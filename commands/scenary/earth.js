const { getImage } = require('random-reddit');

module.exports = {
    name: 'earth',
    description: 'EarthPorn Image',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('earthporn');
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};