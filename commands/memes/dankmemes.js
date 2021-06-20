const { getImage } = require('random-reddit')

module.exports = {
    name: 'dankmemes',
    description: 'DankMemes',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('dankmemes');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};