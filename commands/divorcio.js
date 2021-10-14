const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message, args) => {


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed2 = new Discord.MessageEmbed()
.setColor("#EE82EE")
.setDescription(` **|** Mencione alguem que deseja divorciar!`)
  if (!user) return message.lineReply(embed2);

    let embed1 = new Discord.MessageEmbed()
.setColor("#EE82EE")
.setDescription(` **|** Você não pode se auto-divorciar!`)
   if (user == message.member) return message.reply(embed1);

  const embed3 = new Discord.MessageEmbed()
  .setColor("#EE82EE")
  .setDescription(` **${user}O usuário ${message.author.tag} se divorciou de você! \n Pelo seu divorcio eu cobro uma multa de 10.000 Saori-coins!**`)
   message.lineReply(embed3)

   db.delete(`casamento_${user.id}`, message.author.username)
   db.delete(`casamento_${message.author.id}`, user.user.username)
   db.subtract(`money_${message.author.id}`, 10000)
}