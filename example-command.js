const Discord = require('discord.js');
const { getImage } = require('random-reddit');
const subreddit = 'cats'; // type the subreddit here without "r/"

module.exports = {
    name: 'cats', // type the exact file name here or the command wouldn't be recognized by the bot.
    description: 'Cat Images',
    nsfw: false,

    async execute(message) {
        const image = await getImage(subreddit);
        const embed = new Discord.MessageEmbed()
            .setColor('#FF5700')
            .setImage(image)
            .setFooter(`Subreddit: ${subreddit}`)
            .setTimestamp()
        message.channel.send(embed);
        console.log(message.author.username + " requested " + image);
    },
};

// Place the command.js inside commands subfolder example "/commands/folder/command.js"