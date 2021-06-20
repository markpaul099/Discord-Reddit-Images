const { getImage } = require('random-reddit');

module.exports = {
    name: 'cats',
    description: 'Cat Images',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('cats');
        console.log(message.author.username + ' requested ' + image);
        message.channel.send(image);
    },
};