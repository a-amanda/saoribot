const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
    if(!channels) channels = []
    if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})
     
 var list = [  'https://cdn.discordapp.com/attachments/819758804241481758/846793523725336626/1621961702199.jpg'];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('blu passarinho')
    .setColor('#EE82EE')
    .setDescription(`${message.author} blu é o passarinho oficial do WaifuZone... Aprecie com moderação`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando realizado por: ${message.author.username}... Voa canarinho!`)
    
    message.lineReply(embed);
}

//pra que serve
//tantos códigos?
//se a vida
//não é programada
//e as melhores coisas
//não tem lógica <3 