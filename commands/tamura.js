const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        if(message.author.id !== "671110871853826059")  return message.reply('Voce nao é o meu criador Tamura  -___-')
        message.delete().catch(O_o => {});
        

 
 var list = [  'https://i.pinimg.com/originals/d3/4c/6a/d34c6a8f8c3f5765749fea88438f2b04.gif',
'https://pa1.narvii.com/6300/aac2f23b864857c6a9b5cec90a33161c7f7dce29_hq.gif'];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Tamura quebrador de matrix')
    .setColor('#EE82EE')
    .setDescription(`O <@671110871853826059> é um nobre guerreiro que conseguiu ultrapassar todas as barreiras da realidade quebrando a matrix...`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`${message.author} Está admirando o Tamura: ${message.author.username}... Não pergunte! Não questione! APENAS ACEITE `)
    
    message.channel.send(embed);
}

//print for embed