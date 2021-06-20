const { getImage } = require('random-reddit');
const { execute } = require('../scenary/earth');

module.exports = {
    name: 'cats',
    description: 'Cat Images',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('cats')
        console.log(message.author.user + ' requested ' + image)
        message.channel.send(image)
    },
};