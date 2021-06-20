const { getImage } = require('random-reddit');

module.exports = {
    name: 'memes',
    description: 'Memes',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('memes');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};