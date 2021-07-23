const { prefix } = require('../../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'commands',
    nsfw: false,

    execute(message) {
        message.delete();
        const embed = new MessageEmbed()
            .setColor('0xFF5700')
            .setTitle(`Commands`)
            .setAuthor(`${message.author.username} used ${prefix}help`)
            .addFields(
                { name: 'General', value: `**${prefix}help** - this command\n\ **${prefix}coinflip** - Flip a Coin!\n\ **${prefix}ping** - Bot's Ping` },
 			    { name: 'Animals', value: `**${prefix}cats**\n\ **${prefix}dogs**` },
			    { name: 'Anime', value: `**${prefix}animeart**\n\ **${prefix}animemes**` },
 			    { name: 'Memes', value: `**${prefix}dankmemes**\n\ **${prefix}funny**\n\ **${prefix}meirl**\n\ **${prefix}memes** - dankmemes/memes/me_irl in one` },
 			    { name: 'Scenary', value: `**${prefix}earth**\n\ **${prefix}space**` },
 			    { name: 'NSFW', value: `Only works in ***NSFW*** channel\n\ **${prefix}porn**\n\ **${prefix}jav**\n\ **${prefix}ass**\n\ **${prefix}pussy**` }, )
            .setTimestamp()
            .setFooter('Random-Reddit-Images')
        message.channel.send(embed).then(message => {
            message.delete({ timeout: 25000 })
        });
    }
};