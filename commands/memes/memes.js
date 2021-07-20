const Discord = require('discord.js');
const { getImage } = require('random-reddit');
const subreddit = ['memes', 'me_irl', 'dankmemes'];

module.exports = {
    name: 'memes',
    description: 'Memes',
    nsfw: false,

    async execute(message) {
        const result = subreddit[Math.floor(Math.random() * subreddit.length)];
        const image = await getImage(result);
        const embed = new Discord.MessageEmbed()
            .setColor('#FF5700')
            .setImage(image)
            .setFooter(`Subreddit: ${result}`)
            .setTimestamp()
        console.log(message.author.username + " requested " + image);
        message.channel.send(embed);
    },
};