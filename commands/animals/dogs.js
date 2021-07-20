const Discord = require('discord.js');
const { getImage } = require('random-reddit');
const subreddit = 'lookatmydog';

module.exports = {
    name: 'dogs',
    description: 'Dogs Images',
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