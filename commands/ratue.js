const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
   'https://media.discordapp.net/attachments/736731189431500831/821770953339568188/866d8d1f-edb5-403d-9095-ab7a40b0efb4.png?width=351&height=409'  
  
];

//script de tayssobrt#2690
var rand = list[Math.floor(Math.random() * list.length)];
client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Ratue')
        .setColor('#EE82EE')
        .setDescription(`${message.author} **Use quando receber imagem de maldição!**`)
        .setImage(rand)
  await message.channel.send(embed);
}