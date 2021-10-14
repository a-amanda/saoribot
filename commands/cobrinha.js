const { Bot, Message } = require('discord.js');
const db = require("quick.db");
const SnakeGame = require('snakecord')
module.exports = {
    name: 'snakegame',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(bot, message, args) => {

        let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "#EE82EE",
            timestamp: true,
            gameOverTitle: "Game Over"
        });
        return snakeGame.newGame(message);
    }
}