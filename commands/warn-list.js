const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, _args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  
  let member = message.mentions.users.first() || message.author;
  
 let warns = await db.get(`warnsCount_${message.guild.id}-${member.id}`) || 0;
  
  
  const avisos = new Discord.MessageEmbed()
  .setAuthor(`📢 Avisos Membros`, message.guild.iconURL())
  .setDescription(`:anunciar: **${message.author} Possui \`${warns}\` Avisos**`)
  .setColor("#EE82EE")
  .setThumbnail(member.displayAvatarURL())
  .setFooter(`Author do Comando ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(avisos)
}



/*
var Discord = require('discord.js');
 
exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('📢 | Voce nao pode utilizar esse comando!');
 
    var user = msg.mentions.users.first();
    if(!user) return msg.reply('📢 | Voce tem que mencionar alguem');
 
    var member;
 
    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
    if(!member) return msg.reply('📢 | O usuario nao está no server!');
 
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('📢 | Voce tem que dar um motivo!');
 
    var channel = msg.guild.channels.cache.find(c => c.id === '785169365644869683');
 
    var log = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('📢 | Usuario Warned')
    .addField('Usuario:', user, true)
    .addField('Por:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);
 
    var embed = new Discord.MessageEmbed()
    .setTitle('📢 | Voce levou uma advertência!')
    .setDescription(reason);
 
    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }
 
    msg.channel.send(`**${user}** foi avisado por **${msg.author}**!`);
}
*/