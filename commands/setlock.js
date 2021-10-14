const Discord = require('discord.js')
const db = require("quick.db")

module.exports = {
  name: "setlock",
  aliases: ["setlockchannel", ],
  description: 'Usado para setar um canal onde é proibido usar comandos do bot',
  category: 'configuracao',
  usage: '<prefix>comando <#channel>',

  run: async (client, message, args) => {

let channel = message.mentions.channels.first()

let channels =  db.get(`channels_${message.guild.id}`) 
if(!channels) channels = []

if(channels.length > 10) return message.channel.send(`O maximo de canais setaveis são 10`)

if(channels.some(a => channel.id === a)) return message.channel.send(`Não podes setar o que ja foi setado`)

channels.push(channel.id)


db.set(`channels_${message.guild.id}`, channels)
message.channel.send(`Canal ${channel} Setado com sucesso`)

  }
}