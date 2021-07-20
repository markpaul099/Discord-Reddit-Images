const coin = ['tails', 'heads'];

module.exports = {
    name: 'coinflip',
    description: 'Flip the Coin!!!',
    nsfw: false,

    execute(message) {
        const result = coin[Math.floor(Math.random() * coin.length)];
        message.channel.send(`Result: ${result}`);
    },
};