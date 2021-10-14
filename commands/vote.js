const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    const embed = new Discord.MessageEmbed()
    .setTitle(`VOTE`)
    .setColor('#EE82EE')
    .setDescription(`${message.author} Clique em **"VOTE"** para poder votar em meu servidor para ajudar a me manter online. `)
    .setURL(`https://top.gg/servers/771101605827313704`)
    .setFooter(` Comando solicitado por: ${message.author.username} `)

    message.channel.send(embed);

}