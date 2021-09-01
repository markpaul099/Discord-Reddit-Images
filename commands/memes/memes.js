const Discord = require('discord.js');
const { getPost } = require('random-reddit');
const subreddit = ['memes', 'me_irl', 'dankmemes'];

module.exports = {
    name: 'memes',
    description: 'Memes',
    nsfw: false,

    async execute(message) {
        const result = subreddit[Math.floor(Math.random() * subreddit.length)];
        const post = await getPost(result);
        const embed = new Discord.MessageEmbed()
            .setAuthor(`u/${post.author}`, 'https://www.redditinc.com/assets/images/site/reddit-logo.png')
            .setTitle(post.title)
            .setURL(`https://www.reddit.com${post.permalink}`)
            .setColor('#FF5700')
            .setImage(post.url)
            .setDescription(`Comments: ${post.num_comments}`)
            .setFooter(`Subreddit: r/${result}`)
            .setTimestamp()
                if(post.is_video) {
                    embed.addFields({name: `\u200b`, value: `[Open Video](${post.url})`})
                    embed.setImage()
                }
                if(post.selftext) {
                    embed.addFields({name: `\u200b`, value: `${post.selftext}`})
                    embed.setImage()
                }
                if(post.is_gallery) {
                    embed.addFields({name: `\u200b`, value: `[Open Gallery](${post.url})`})
                    embed.setImage()
                }
        message.channel.send(embed);
        console.log(`${message.author.username} requested https://www.reddit.com${post.permalink}`);
    },
};