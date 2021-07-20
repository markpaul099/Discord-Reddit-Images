const { getImage } = require('random-reddit');
const subreddit = 'jav';

module.exports = {
    name: 'jav',
    description: 'Japanese Porn',
    nsfw: true,

    async execute(message) {
        const image = await getImage(subreddit);
        message.channel.send(image);
        console.log(message.author.username + " requested " + image);
    },
};

// Using Embed wouldn't' load some videos