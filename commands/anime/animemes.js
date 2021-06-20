const { getImage } = require('random-reddit')

module.exports = {
    name: 'animemes',
    description: 'Anime-Memes',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('animemes');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};