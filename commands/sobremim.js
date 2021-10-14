const { MessageEmbed } = require('discord.js')
const db = require('quick.db');

module.exports = {
      run: async (bot, message, args) => {

const aboutme = args.join(' ');
const user = message.author;
let prefix2 = db.get(`prefix_${message.guild.id}`) || 'sa!'

if (!aboutme) return message.reply(`Siga o exemplo a seguir:\n sa!sobremim Olá eu sou o ${message.author.username}!`);

db.set(`aboutme_${user.id}`, aboutme);

return message.reply('Mensagem alterada com sucesso! ⭐');
      }
}