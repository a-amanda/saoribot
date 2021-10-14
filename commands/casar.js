const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message, args) => {


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed1 = new Discord.MessageEmbed()
.setColor("#EE82EE")
.setDescription(`**|** Mencione o(a) seu amor para poder casar!`)
  if (!user) return message.lineReply(embed1);

    let embed2 = new Discord.MessageEmbed()
.setColor("#EE82EE")
.setDescription(`**|** Ei bobinho(a) você não pode casar com si mesmo!`)
   if (user == message.member) return message.lineReply(embed2);

   let casamento = db.fetch(`casamento_${user.id}`)
   let embed4 = new Discord.MessageEmbed()
.setColor("#EE82EE")
.setDescription(` **|** VocÊ não pode casar com essa pessoa, porque ela já esta casada e não pode casar novamente por emquanto. Se você gostar de casadas(os) o assunto é outro...`)
   if (casamento) return message.lineReply(embed4)

     let casamento2 = db.fetch(`casamento__${message.author.id}`)
   let embed5 = new Discord.MessageEmbed()
.setColor("#EE82EE")
.setDescription(` **|** Você ja está casado com alguem, digite **sa!divorcio** e se divorcie.`)
   if (casamento2) return message.lineReply(embed5)

  const embed6 = new Discord.MessageEmbed()
  .setColor("#EE82EE")
  .setDescription(`${user} O usuario ${message.author} quer se casar com você, vai aceitar?`)
   message.lineReply(embed6).then(msg => {
  msg.react('832069090277326888');

  let filtro = (reaction, usuario) => reaction.emoji.name === 'loveee' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id);
let embed7 = new Discord.MessageEmbed()
.setColor("#EE82EE")
.setDescription(` **BOAA ${user} e ${message.author} Agora são um belissimo casal! VIVA O AMOR❤️**`)
.setImage("https://i.pinimg.com/originals/be/1f/d3/be1fd3b9ce4580bb31cb376eccf5e315.gif")
 message.lineReply(embed7)
db.set(`casamento_${user.id}`, message.author.username)
db.set(`casamento_${message.author.id}`, user.user.username)
   })



  })

}
