const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



      let user = bot.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author;

    let money = db.fetch(`money_${message.author.id}`)
    if(money === null) money = 0;
  
    let bank = db.fetch(`bank_${message.author.id}`)
    if(bank === null) bank = 0;

    const embed = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setTitle("Saldo na carteira ")
    .setDescription(`**${user.username}**, veja as informações da sua carteira:` +
    `\n\nDinheiro: **R$${money}**` +
    `\nBanco: **R$${bank}**`)
    .setFooter("Informações da sua carteira!")
    .setTimestamp();

    message.lineReply(`${user}`, embed);
}
