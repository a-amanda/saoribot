const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
    if(!channels) channels = []
    if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})
     
 var list = [  'https://cdn.discordapp.com/attachments/763588320415580201/877249125287092244/unknown.png'];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Lora')
    .setColor('#EE82EE')
    .setDescription(`${message.author} teste de comando **__sa!lora__**`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando realizado por: ${message.author.username}... `)
    
    message.lineReply(embed);
}