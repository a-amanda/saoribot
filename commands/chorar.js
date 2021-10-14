const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


 
 var list = [  'https://i.pinimg.com/originals/2f/b2/96/2fb2965acbf3ed573e8b63080b947fe5.gif',
'https://i.pinimg.com/originals/76/fe/00/76fe00f234770428389dc3a6951a2216.gif',
'https://i.pinimg.com/originals/36/25/06/362506108c27897e87b08096372180f3.gif',
'https://pa1.narvii.com/6504/d0f9226cd2d27099ef16369a1ca520070572d91c_hq.gif',
'https://i.pinimg.com/originals/f2/18/ac/f218ac4c19011661adde76da6f18c250.gif',
'https://pa1.narvii.com/6504/b4351ab7cf34478c4086d3334e226ed77d9c50eb_hq.gif',
'https://thumbs.gfycat.com/FragrantThoughtfulAmericancurl-size_restricted.gif',
'https://image.myanimelist.net/ui/ogNrt6xjoxcgp7z0v_1Zi1oMaZFLnP1GlBCxOVfgIs8iL-QqDWvkHnZkFAUQNY5bMJx5OiaxEhBc-SS-UGUNLCJcL5TwSRP_Gq47xOrV1VI',
'https://ptanime.com/wp-content/uploads/2018/07/Zero-Two-Choro-Nova-Gif.gif',
'https://i.pinimg.com/originals/ba/c8/3d/bac83d1be35ecf3c44fea0816fc9f9d9.gif',
'https://pa1.narvii.com/6504/77a3f6e60f9b93a6ea6eecd76cd92be43136a27e_hq.gif',
'https://i.gifer.com/1Wjy.gif',
'https://1.bp.blogspot.com/-utM1dsZcAoQ/VriefmeH6RI/AAAAAAAAPtM/g8jhrq3Xvlk/s1600/bloguidajeh.blogspot.anime.5.gif',
'https://64.media.tumblr.com/c7965ab3c023e72a0a2d443886f72b99/tumblr_nk3dfooRBO1spu161o1_500.gifv',
'ttps://i.pinimg.com/originals/65/b7/de/65b7de83e0c08f0dc38bf6971cd2f2d4.gif',
'https://i.gifer.com/338j.gif',
'https://cdn.discordapp.com/attachments/845890867638304769/859868427426856981/d0f9226cd2d27099ef16369a1ca520070572d91c_hq.gif'];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Vamos chorar')
    .setColor('#EE82EE')
    .setDescription(`${message.author} Está chorando`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando realizado por: ${message.author.username}... As lagrimas já cairam!`)
    
    message.lineReply(embed);
}