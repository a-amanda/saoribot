const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


 
 var list = [  'https://pa1.narvii.com/6233/8b5500ad51f91dedda0394d8d134d8914e3ebf17_hq.gif',
 'https://pa1.narvii.com/6372/a15d884aaf83566833b1980c9a4cefe5416b55f8_hq.gif',
 'https://media.tenor.com/images/e52618c2f41b59784c57f2b40518ad9e/tenor.gif',
 'https://pa1.narvii.com/6456/1eff3c590e0077f0024e3338f60c01dbd5b6411b_hq.gif',
 'https://pa1.narvii.com/6474/62099452c3bc158209875070874088da65d5b1e1_hq.gif',
 'https://i2.wp.com/media1.tenor.com/images/2c51c752d565b24a8ba45e9eaf97c4d4/tenor.gif',
 'https://media.tenor.com/images/b6b0fe37770f0ccd963008d52e658eae/tenor.gif',
 'https://pa1.narvii.com/7556/54a5094715b9015f9da131d3b6abbf39d82892c6r1-500-281_hq.gif',
 'https://media.tenor.com/images/e52618c2f41b59784c57f2b40518ad9e/tenor.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/838229193422667836/cd90ad66edaf50a24f8a30749f47f0fe.gif',
 'https://pa1.narvii.com/6438/396827cf464b8e62c7a3754c574674bb62a37346_hq.gif',
 'https://pa1.narvii.com/6227/9e41ad523762f667331da72f8badd7ece3f5e2d0_hq.gif',
 'https://lh6.googleusercontent.com/proxy/zRrFEqkwRYSfSJNIn4Py0cSwoQHraaaVEei2Bug3HGV7Bc87sotfmhluiKqcEfGwcJI8u-Hzbqup62a-HF4-Ek064i47uDwDEbtxpuawXiK6HBm7Nmg0g8GERz4DZCg_c9-8c935S-DR6y9iaxW-KXXqGWsbPGM=s0-d',
 'https://i.pinimg.com/originals/9f/d5/75/9fd575d279569bf9ccf1695ea427e32e.gif',
 'https://pa1.narvii.com/6567/181255a24379b8693320a851b590ffc250d9b752_hq.gif',
 'https://pa1.narvii.com/6240/4938a23fee2d7e24cf4ce9b63e9486f9ee7a56f0_hq.gif',
 'https://c.tenor.com/9TF-CSHKqOgAAAAM/cat-coffee.gif',
 'https://c.tenor.com/EMwYOe49lGoAAAAM/mao-amatsuka-gj-bu.gif',
 'https://c.tenor.com/ZJkjf9sKWEkAAAAM/na-paz-quietinho.gif',
 'https://c.tenor.com/-fBDS2LvKjMAAAAM/anime-coffee.gif',
 'https://c.tenor.com/kclGV4IAq1oAAAAM/coffee-cat.gif',
 'https://c.tenor.com/gHspgX-oMv4AAAAM/cafe-coffee.gif',
 'https://c.tenor.com/yMbX2GLRBIIAAAAM/anime-coffee.gif',
 'https://c.tenor.com/p4JuWMWEYoYAAAAM/tea-anime.gif',
 'https://c.tenor.com/x1oQ0IQ6vP8AAAAM/narumi-momose-wotaku-ni-koi-wa-muzukashii.gif',
 'https://c.tenor.com/Gb4gal1GeREAAAAM/coffee-anime.gif',
 'https://c.tenor.com/gHspgX-oMv4AAAAM/cafe-coffee.gif',
 'https://c.tenor.com/p4JuWMWEYoYAAAAM/tea-anime.gif',
 'https://c.tenor.com/ZJkjf9sKWEkAAAAM/na-paz-quietinho.gif',
 'https://c.tenor.com/x1oQ0IQ6vP8AAAAM/narumi-momose-wotaku-ni-koi-wa-muzukashii.gif',
 'https://c.tenor.com/Gb4gal1GeREAAAAM/coffee-anime.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Tomar café')
    .setColor('#EE82EE')
    .setDescription(`${message.author} Acaba de tomar um cafezinho.`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando feito por: ${message.author.username}`)
    
    message.lineReply(embed);
}