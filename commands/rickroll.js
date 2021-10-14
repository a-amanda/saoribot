const Discord = require('discord.js');
const ms = require('ms');
const db = require("quick.db");
 
exports.run = async(bot, message, args) => {


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


let msg = await message.lineReply(`.`)
let time = 3*500
setTimeout(function(){
  msg.edit(`..`)
}, time)
time += 3*500
setTimeout(function(){
  msg.edit(`...`)
 }, time)
time += 3*500
setTimeout(function(){
  msg.edit(`Never gonna give you up`)
}, time)
time += 3*1000
setTimeout(function(){
  msg.edit(`Never gonna let you down`)
}, time)
time += 3*1000
setTimeout(function(){
  msg.edit(`Never gonna run around`)
}, time)
time += 3*1000
setTimeout(function(){
  msg.edit(`and desert you`)
}, time)
time += 3*1000
setTimeout(function(){
  msg.edit(`Never gonna make you cry`)
}, time)
time += 3*1000
setTimeout(function(){
  msg.edit(`Never gonna say goodbye`)
}, time)
time += 3*1000
setTimeout(function(){
  msg.edit(`Never gonna tell a lie`)
}, time)
time += 3*1000
setTimeout(function(){
  msg.edit(`and hurt you`)
}, time)
time += 3*1000
setTimeout(function(){
      msg.edit(`https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif`)
 }, time)

}