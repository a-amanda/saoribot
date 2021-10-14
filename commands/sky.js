const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


 
 var list = [  '',
 'https://pa1.narvii.com/6845/6cd3ab2664aff8789debb27c23839d3547e49f31_hq.gif',
 'https://d.wattpad.com/story_parts/897963283/images/16155e2cc8e562c9458333391731.gif',  'https://giffiles.alphacoders.com/483/48377.gif',
 'https://www.icegif.com/wp-content/uploads/levi-icegif.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661506825977917/3f532f51edebdad36a50f9a892082bca.gif',
 'https://media.discordapp.net/attachments/795081713238802433/822661565227860048/9dac95fbcf7d75e73c6baae74191b38f.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661565882826766/bdd7b06b8ffa8ec7cc35265b334abbf2.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661635764256818/72a614b39ccd9a043fdf4eead4d4359a.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661636803788800/7ea6fa0ea2bf64f94e7a68cb2bada63f.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661667023749161/86ef05e9a304b13475550327b2e6087c.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661667350642688/006f0e19562afd7048e12d0c3ce41436.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661683221757954/56e0b95abfc673f1303bf99d20fc4df3.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661707641651250/0b7be76a7618911b585781bdd6fadc54.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661708073009203/fbb8cb851e5cb8f06d4384db83ff1dc9.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661741305004037/743fccb9a18a49053f1269b9d91e428c.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661742315307008/167cde0b95bac77489213b233f98d150.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661830044155924/67842f4019b7667a73beba250b6b5863.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661830924828712/3e835d7259e9631656d2d0ba6e702dd4.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661920783335424/c2cd7a343293da0a795e2f905bf29d47.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661921274200104/360babcd76186c9952dfc926277b3399.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661959605813278/fc9c8ff007636551f9e04e636f920e32.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661960037433354/03b46276e83286c2f90cc80933fbd234.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822661979558117396/a6e309b9a9ac1f863e070cbed84d2e98.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822662275852664842/44d36e90acd4de13e3e152d8086a808b.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822662276179296306/5c7c0e8bff746eea627ff79d6f04211d.gif',
 'https://cdn.discordapp.com/attachments/795081713238802433/822662276544462857/9e0d9385cabf24cfae7b04d86d162e67.gif'];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Olha o Levi')
    .setColor('#EE82EE')
    .setDescription(`${message.author} Acaba de adimirar o Levi`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando feito por: ${message.author.username}`)
    
    message.channel.send(embed);
}