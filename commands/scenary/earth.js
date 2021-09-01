const Discord = require('discord.js');
const { getPost } = require('random-reddit');
const subreddit = 'earthporn';

module.exports = {
    name: 'earth',
    description: 'EarthPorn Image',
    nsfw: false,

    async execute(message, args) {
        const post = await getPost(subreddit);
        const embed = new Discord.MessageEmbed()
            .setAuthor(`u/${post.author}`, 'https://www.redditinc.com/assets/images/site/reddit-logo.png')
            .setTitle(post.title)
            .setURL(`https://www.reddit.com${post.permalink}`)
            .setColor('#FF5700')
            .setImage(post.url)
            .setDescription(`Comments: ${post.num_comments}`)
            .setFooter(`Subreddit: r/${subreddit}`)
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