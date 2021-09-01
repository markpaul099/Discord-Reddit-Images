module.exports = {
    name: 'ping',
    description: 'Bot\'s Ping!',
    nsfw: false,

    execute(message, client) {
        message.channel.send(`Bot's Ping = ${client.ws.ping} ms`).catch(console.error);
    },
};