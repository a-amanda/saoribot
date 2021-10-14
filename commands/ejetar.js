const Discord = require('discord.js');
const db = require("quick.db");
exports.run = async (client, message, args) => {


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://media.discordapp.net/attachments/837371784885960757/840608079380217856/gif2.gif',
  'https://media.discordapp.net/attachments/837380910848409631/840609272899043338/gif1.gif'
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para Ejetar');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Ejetou')
        .setColor('#EE82EE')
        .setDescription(`${message.author} acaba de Ejetar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Impostor')
        .setAuthor(message.author.tag, avatar);
  await message.lineReply(embed);
}