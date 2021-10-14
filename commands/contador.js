const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "membercount",
aliases: ["memberc"],
run: async (client, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username}, Neste momento temos \`${message.guild.memberCount}\` Membros no servidor.`)
.setFooter(`${message.author.tag} • Informacão`, message.author.displayAvatarURL())
.setTimestamp()
.setColor("#EE82EE")
message.lineReply(embed)
}
}