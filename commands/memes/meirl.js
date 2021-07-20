const Discord = require('discord.js');
const { getImage } = require('random-reddit')
const subreddit = 'meirl';

module.exports = {
    name: 'meirl',
    description: 'Me_IRL',
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