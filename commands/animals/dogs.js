const { getImage } = require('random-reddit');

module.exports = {
    name: 'dogs',
    description: 'Dogs Images',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('lookatmydog')
        console.log(message.author.user + ' requested ' + image)
        message.channel.send(image)
    },
};