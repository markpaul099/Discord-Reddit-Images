const { getImage } = require('random-reddit')

module.exports = {
    name: 'funny',
    description: 'Funny Images',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('funny');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};