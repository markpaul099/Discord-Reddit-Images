const { getImage } = require('random-reddit')

module.exports = {
    name: 'meirl',
    description: 'Me_IRL',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('me_irl');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};