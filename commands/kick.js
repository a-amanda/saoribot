const Discord = require("discord.js")
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.lineReply({embed: {
  description: "**❌ Você precisa da permissão de `Kikar Membros` para executar este comando**",
  color: "#EE82EE"
}})
if(!message.guild.me.hasPermission(["KICK.MEMBERS", "AMINISTRATOR"])) return message.lineReply({embed: {
  description: "**❌ Eu preciso da permissão de `Kikar Membros` para executar este comando**",
  color: "#EE82EE"
}})

let member = message.mentions.users.first()
let user = message.mentions.users.first()
if(!member) return message.lineReply({embed: {
  description: "**❌ Mencione um usuario para eu poder kicka-lo**",
  color: "#EE82EE"
}})

let motivo = args.slice(1).join(" ")
if(!motivo) return message.lineReply({embed: {
  description: "**❌ Dê um motivo para kickar o user**",
  color: "#EE82EE"
}})

message.guild.member(member).kick(motivo)

const kick = new Discord.MessageEmbed()
.setTitle("Kick Member")
.addField("Kickado", `\`${user.tag}\``)
.addField("Staff", `\`${message.author.tag}\``)
.addField("Motivo", `\`${motivo}\``)
.setColor("#EE82EE")
.setFooter("kick Efetuado", message.author.displayAvatarURL())
message.lineReply(kick)

let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
if(!channel) {
  return
} else {

const modl = new Discord.MessageEmbed()
.setAuthor("Kick Member", message.guild.iconURL())
.addField("Expulso", `\`${user.tag}\``)
.addField("Expulso por", `\`${message.author.tag}\``)
.addField("Motivo", `\`${motivo}\``)
.setTimestamp()
.setColor("#EE82EE")
channel.send(modl)
}
}
