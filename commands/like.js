const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  let autor = message.author;



  let user = message.mentions.users.first() || bot.users.cache.get(args[0]);

  if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar like!');
}





  let sorte = Math.floor(Math.random() * 1) + 1;
    let amount = sorte;

    db.add(`like_${user.id}`, amount);
    db.set(`likes_${user.id}`, Date.now());




    const embed = new Discord.MessageEmbed()
  .setTitle('💖 Likes!')
  .setDescription(`Você deu ${amount} like para ${user}!`)
  .setColor('#EE82EE')
  message.lineReply(embed)

}


