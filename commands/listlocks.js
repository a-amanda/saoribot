const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
  name: "getchannel", 
  run: async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



let c = db.get(`channels_${message.guild.id}`)
if(!c) return message.lineReply('Nenhum Canal Setado')


let h = c.map((a, b) => {
return `${b}. <#${a}>`
})

const embed = new Discord.MessageEmbed()
.setTitle(`Canais bloqueados`)
.setDescription(h)
.setColor("#EE82EE")
message.lineReply(embed)
  }
}