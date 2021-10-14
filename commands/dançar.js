const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://i.pinimg.com/originals/e4/c4/a2/e4c4a2c488ddd8e7e8c754aefdceb468.gif',
  'https://giffiles.alphacoders.com/203/203219.gif',
  'https://i.pinimg.com/originals/b5/db/ce/b5dbceea266e9c9d88e0469c57027829.gif',
  'https://33.media.tumblr.com/11e302d54ebc62c896f55d3676fc57fc/tumblr_mvuz9hSv7x1qbvovho1_500.gif',
  'https://4.bp.blogspot.com/-hoIK5aFaZ1Q/WjaQCwuT3AI/AAAAAAAASBs/N-cuVz2Rd1cllw7iCYckDvLZkuohJZtmgCLcBGAs/s1600/tumblr_otwjjzzm4G1thz9j4o1_500.gif',
  'https://1.bp.blogspot.com/-mctARuBX8ok/W8q3tFiCVyI/AAAAAAAAEpc/mV1obcH5aPY1SsfeAKHf7n6qDDqJ7GcHwCLcBGAs/s1600/11a.gif',
  'https://loritta.website/assets/img/actions/dance/male_x_male/gif_244.gif'
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dançar!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Dançando')
        .setColor('#EE82EE')
        .setDescription(`${message.author} Acaba de dançar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Vamos a bailar')
        .setAuthor(message.author.tag, avatar);
  await message.lineReply(embed);
}