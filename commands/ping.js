
const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  
  const embed = new Discord.MessageEmbed()
  .setDescription("<a:ping:834035744183025724> **Calculando Ping... Por favor aguarde!**")
  .setColor("#EE82EE")
  message.channel.send(embed).then(msg => {
    setTimeout(() => {
      let ping = new Discord.MessageEmbed()
      .setDescription(`**🛰️ Client Ping** \`${Math.round(bot.ws.ping)}ms\`\n**📡 Guild Ping** \`${msg.createdTimestamp - message.createdTimestamp}ms\``)
    .setColor("#EE82EE")
    msg.edit(ping)
    }, 5000)
  });
}


