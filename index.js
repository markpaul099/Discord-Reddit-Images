const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fs = require('fs');
const async = require('async');

// Command Handler
client.commands = new Discord.Collection();
const cmdDirs = fs.readdirSync('./commands');

for (const dir of cmdDirs) {
    const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(f => f.endsWith('.js'));
    for (const cmd of commandFiles) {
        const command = require(`./commands/${dir}/${cmd}`);
        client.commands.set(command.name, command);
    };
};

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmdName = args.shift().toLowerCase();

    if (!client.commands.has(cmdName)) return message.delete().then(message => {
        message.channel.send(`<@${message.author.id}> Command does not Exist.`).then(message => {
            message.delete({ timeout: 10000 })
        });
    });

    const command = client.commands.get(cmdName);

    if (command.nsfw && !message.channel.nsfw) return message.delete().then(message => {
        message.channel.send(`<@${message.author.id}> This command is only allowed in **NSFW** channel.`).then(message => {
            message.delete({ timeout: 10000 })
        });
    });

    try {
        command.execute(message, args);
    } catch (error) {
        console.log(error);
        message.channel.send('There was an error trying to execute that command.');
    }
});

// Event Handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, Discord, client));
    }
};

client.login(token).catch(() => {
    console.log('Invalid TOKEN!')
});