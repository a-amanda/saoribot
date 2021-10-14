const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {



  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://pa1.narvii.com/6723/a62c58fa264cb92a3ba5b2f50446a0541307e528_hq.gif',
  'https://pa1.narvii.com/6200/33889bd8c5e3b9dde6b4c43de225fea521ce511a_hq.gif',
  'https://pa1.narvii.com/6208/322cd6d8998e41fe2a424d59b8ad4a5a21c4783c_hq.gif',
  'https://thumbs.gfycat.com/TautInformalIndianjackal-small.gif',
  'https://i.pinimg.com/originals/22/0b/ab/220babfd5f8b629cc16399497ed9dd96.gif',
  'https://lh4.googleusercontent.com/proxy/DW9gnmitGV19QeA2FV9Dymtlg3pAWPPMJxPtv2FwbsuHK7djz0MRfNuJ-7mijjQaCx0=s0-d',
  'https://pa1.narvii.com/6244/5c979c1b83cae4d8d14c53c2a28e99984d620e3d_hq.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838166167709155328/gif_5.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838192788850999326/gif_3.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838192789111177236/gif_6.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838192789430730792/gif_1.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838192809324183613/gif_13.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838192809597075486/gif_12.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838192840680669214/gif_0.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838192841367748618/gif_2.gif'

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer um cafuné!');
}
/*
message.lineReply(`${message.author.username} **acaba de fazer um cafuné em** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cafuné')
        .setColor('#EE82EE')
        .setDescription(`${message.author} acaba de fazer um cafuné em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Um cafuné pra você')
        .setAuthor(message.author.tag, avatar);
  await message.lineReply(embed);
}
