const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    const embed = new Discord.MessageEmbed()
    .setColor('#EE82EE')
    .setDescription(` Entre no meu servidor suporte ${message.author}\n\n[Servidor suporte](https://discord.gg/5fkAkbs5cs)`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    message.channel.send(embed);

}