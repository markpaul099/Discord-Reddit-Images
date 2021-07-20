const { prefix } = require('../config.json');

module.exports = {
    name: 'ready',
    once: true,

    execute(client) {
        console.log(`Bot is Online!`);
        client.user.setActivity(`for ${prefix}help`, { type: 'WATCHING' });
    },
};