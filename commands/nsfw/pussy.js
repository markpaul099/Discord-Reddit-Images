const { getImage } = require('random-reddit');

module.exports = {
    name: 'pussy',
    description: 'Pussy Image',
    nsfw: true,

    async execute(message, args) {
        const image = await getImage('pussy');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};