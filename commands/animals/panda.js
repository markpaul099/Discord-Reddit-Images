const { getImage } = require('random-reddit');

module.exports = {
    name: 'panda',
    description: 'Panda Images',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('panda')
        console.log(message.author.user + ' requested ' + image)
        message.channel.send(image)
    },
};