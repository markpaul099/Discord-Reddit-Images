const { getImage } = require('random-reddit');

module.exports = {
    name: 'porn',
    description: 'Porn Image',
    nsfw: true,

    async execute(message, args) {
        const image = await getImage('porn')
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};