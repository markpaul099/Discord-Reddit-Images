const { getImage } = require('random-reddit');

module.exports = {
    name: 'space',
    description: 'SpacePorn Image',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('spaceporn');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};