const Discord = require('discord.js')
const db = require("quick.db");

exports.run = async (client, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    const rng = Math.floor((Math.random() * 100) + 1);

    if (args[0] === 'pedra' && rng > 0 && rng <= 34) {
        return message.lineReply('```Pedra, empatamos :)```');
    } else if (args[0] === 'pedra' && rng > 34 && rng <= 67) {
        return message.lineReply('```Papel, você perdeu!``` ');
    } else if (args[0] === 'pedra' && rng > 67 && rng <= 100) {
        return message.lineReply('```Tesoura, eu perdi :(```');
    } else if (args[0] === 'papel' && rng > 0 && rng <= 34) {
        return message.lineReply('```Papel, empatamos :)```');
    } else if (args[0] === 'papel' && rng > 34 && rng <= 67) {
        return message.lineReply('```Tesoura, você perdeu!```');
    } else if (args[0] === 'papel' && rng > 67 && rng <= 100) {
        return message.lineReply('```Pedra, eu perdi :(```');
    } else if (args[0] === 'tesoura' && rng > 0 && rng <= 34) {
        return message.lineReply('```Tesoura, empatamos :)```');
    } else if (args[0] === 'tesoura' && rng > 34 && rng <= 67) {
        return message.lineReply('```Pedra, você perdeu!```');
    } else if (args[0] === 'tesoura' && rng > 67 && rng <= 100) {
        return message.lineReply('```Papel, eu perdi :(```');
    }

    if (args[0] !== 'pedra' || args[0] !== 'papel' || args[0] !== 'tesoura') {
        return message.reply('Por favor, insira `pedra`, `papel` ou `tesoura`.');
    }

}