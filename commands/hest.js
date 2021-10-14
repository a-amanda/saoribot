const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


 
 var list = [  'https://cdn.discordapp.com/attachments/833136190428414023/835709127577043015/Im_a_unicorn.jpeg'];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Hest nossa deusa')
    .setColor('#EE82EE')
    .setDescription(`${message.author} Se você tem chance, apenas aprecie a beldade que todos aqui conhecem com hest (NOSSA DEUSA)`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando realizado por: ${message.author.username}... Apenas adimire!`)
    
    message.lineReply(embed);
}