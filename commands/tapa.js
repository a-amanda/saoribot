const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://i.pinimg.com/originals/e2/cf/7c/e2cf7c01031a331ccef83051a973ea9e.gif',
  'https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif',
  'https://i.pinimg.com/originals/6d/4c/be/6d4cbe4a871d8bd4a89eb60169e450cd.gif',
  'https://i.pinimg.com/originals/f8/5f/4c/f85f4c557e5a03d2a7a2e903b66e0047.gif',
  'https://i.pinimg.com/originals/8f/66/c7/8f66c751cb43320e88656d3a00a9361f.gif',
  'https://i.pinimg.com/originals/6d/4c/be/6d4cbe4a871d8bd4a89eb60169e450cd.gif',
  'https://i.pinimg.com/originals/40/ef/24/40ef24388a01ba9be6da6dea69d30fda.gif',
  'https://i.pinimg.com/originals/ae/db/95/aedb9593d56bf5dd056c07e64d58287a.gif',
  'https://loritta.website/assets/img/actions/slap/female_x_male/gif_218.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_female/gif_187.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838169723757789234/gif_199.gif',
  'https://loritta.website/assets/img/actions/slap/male_x_male/gif_191.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838170957574832128/gif_221.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838170958459305994/gif_192.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838171667464323112/gif_196.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838171668132003891/gif_202.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838171668534394952/gif_224.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838171672103223336/gif_201.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838171672765792256/gif_220.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838172441791954954/gif_195.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838172442388070450/gif_206.gif',
  '',


];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}

if (user == bot.user) {
  return message.reply(`Nossa, eu não te fiz nada e é isso que você me faz? Lembrarei disso!.`);
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed2 = new Discord.MessageEmbed()
        .setTitle('Tapa')
        .setColor('#EE82EE')
        .setDescription(`${message.author} acaba de dar um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Toma essa lapada bobão')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed2);
}

