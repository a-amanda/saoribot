const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
  name: "setunlock",
  aliases: ["setunlockchannel"],
  category: "configuracao",
  description: "Usado para remover canais onde o bot é privado de ser utilizado.",
  usage: '<prefix>comando <#channel>',
  run: async (bot, message, args) => {

let channels = db.get(`channels_${message.guild.id}`)
if(!channels) return message.channel.send(`Não existem canais na BlackList!`)

if(isNaN(args[0])) return message.channel.send(`Deve me dar uma quantia numeral de 0 a 10`)
if(args[0] > 10) return message.channel.send("Maximo 10")


if(channels.length <= args[0]) return message.channel.send(`Este valor não existe na array`)

message.channel.send(`Canal <#${channels[args[0]]}> retirado`)

channels.splice(args[0], 1)

db.set(`channels_${message.guild.id}`, channels)
  }
}