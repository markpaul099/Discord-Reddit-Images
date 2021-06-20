const { getImage } = require('random-reddit');

module.exports = {
    name: 'example-command', //type the exact file name here or the command wouldn't recognized by the bot, make sure to type in lowercase
    description: 'some_description_here',
    nsfw: false,

    async execute(message, args) {
        const image = await getImage('subreddit') //type the subreddit here without "r/"
        console.log(message.author.username + " requested " + image);
        message.channel.send(image);
    },
};

//Place the command inside commands subfolder 