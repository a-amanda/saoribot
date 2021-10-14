const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://discord.com/oauth2/authorize?client_id=856349948878913587&scope=bot&permissions=8',
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('meu link de convite')
        .setColor('#EE82EE') 
        .setDescription(`Para me adicionar no seu servidor é só clicar no título. \nFico feliz que você gostou de mim e quer me adicionar❤️`)
        .setURL(rand)
  await message.lineReply(embed);
}
