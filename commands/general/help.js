const { prefix } = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'commands',
    nsfw: false,

    execute(message) {
        message.delete(); // Deletes the message by the user
        message.channel.send({
            embed: {
                color: 0xFF5700,
                title: message.author.username + " used *r/help*",
                fields: [{
                    name: "commands",
                    value: `**General**\n\
                    **${prefix}help** - this command\n\
                    **${prefix}coinflip** - Flip a Coin!\n\
                    **${prefix}ping** - Bot's Ping\n\
                    \n\
                    **Animals**\n\
                    **${prefix}cats**\n\
                    **${prefix}dogs**\n\
                    \n\
                    **Anime**\n\
                    **${prefix}animeart**\n\
                    **${prefix}animemes**\n\
                    \n\
                    **Memes**\n\
                    **${prefix}dankmemes**\n\
                    **${prefix}funny**\n\
                    **${prefix}meirl**\n\
                    **${prefix}memes** - dankmemes/memes/me_irl in one\n\
                    \n\
                    **Scenary**\n\
                    **${prefix}earth**\n\
                    **${prefix}space**\n\
                    \n\
                    **NSFW**\n\
                    Only works in ***NSFW*** channel\n\
                    **${prefix}porn**\n\
                    **${prefix}jav**\n\
                    **${prefix}ass**\n\
                    **${prefix}pussy**`
                }],
                timestamp: new Date(),
            }
        }).then(message => {
            message.delete({ timeout: 25000 }); // Automatically delete this nessage in 25 sec
        });
    }
};