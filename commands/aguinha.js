const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


 
 var list = [  'https://i.pinimg.com/originals/4b/3f/ec/4b3fec3892fe392ce1f82749015f9841.gif',
 'https://i.pinimg.com/originals/da/75/2b/da752b5e9869c21485278e52145251e9.gif',
 'https://pa1.narvii.com/6214/248348caa4ea9757c643fcae5ba04e990134c276_hq.gif',
 'https://pa1.narvii.com/6580/a04dac6943b3e0adc4b0dc321bd9af95accf9731_hq.gif', 
 'http://pa1.narvii.com/5812/df953bfe5eb40184f09de633115e9bd48d9916b5_00.gif',

];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Tomar água')
    .setColor('#EE82EE')
    .setDescription(`${message.author} Acaba de tomar uma água`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando feito por: ${message.author.username}`)
    
    message.lineReply(embed);
}