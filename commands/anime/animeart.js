const { getImage } = require('random-reddit')

module.exports = {
    name: 'animeart',
    description: 'Anime-Art',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('animeart');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};