const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
  name: "declarar",
  run: async (client, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



    let msg = message.channel
    let author = message.author
    let name = message.author.username
    
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if(!user) return message.lineReply(`${author} Lembre-se de mencionar a pessoa você quer se declarar`)

  let menssagem = args.slice(1).join(" ")
  if(!menssagem) return message.lineReply(`${author} Lembre-se de escrever a mensagem de amor que você quer mandar para ${user.user.username}`)

message.lineReply(`Sua menssagem foi enviada para ${user.user.username}... Se essa pessoa estiver com a dm bloqueada, a gente chora :3`)

  const declaração = new Discord.MessageEmbed()
  .setColor('#EE82EE') 
  .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
  .setDescription(`Eii, ${user} Sabia que **${name}** te ama muito? se liga na menssagem que ele(a) te mandou`)
  .addField(`${user.user.username}`, `${menssagem}`, true)
  .setFooter(`Menssagem enviada por ${name}`, author.displayAvatarURL({ dynamic: true }))
 user.send(declaração)

  }
}