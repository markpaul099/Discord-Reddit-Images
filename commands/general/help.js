const { prefix } = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'commands',
    nsfw: false,

    async execute(message, args) {
        message.delete();
        message.channel.send({
            embed: {
                title: message.author.username + " used *r/help*",
                fields: [{
                    name: "commands",
                    value: `**General**\n\
                    **${prefix}help** - this command\n\
                    **${prefix}ping** - Pong!\n\
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
                    **${prefix}memes**
                    \n\
                    **Scenary**\n\
                    **${prefix}earth**\n\
                    **${prefix}space**\n\
                    \n\
                    **NSFW**\n\
                    Only works in ***NSFW*** channel\n\
                    **${prefix}porn**\n\
                    **${prefix}pussy**`
                }],
                timestamp: new Date(),
            }
        }).then(message => {
            message.delete({ timeout: 25000 });
        });
    }
};