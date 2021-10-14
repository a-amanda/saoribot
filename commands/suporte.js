/*const Discord = require('discord.js')
exports.run = async (client, message, argumentos, arg_teste, chat, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando!`)
        return message.channel.send(embed);
      }
    // caso queira que só alguém/permissão/servidor/cargo possa usar esse ticket, chame a Aiko no servidor Comunidade YT
  const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setThumbnail(icon)
  .setImage('https://media1.tenor.com/images/c5d851562a75b54b4cad3f2227f979a1/tenor.gif?itemid=20743722')
  .setTitle('🎟️ - Ticket')
  .setDescription(`Olá, clique no emoji para criar um ticket!`)
  .setTimestamp()
  .setFooter(`Apenas administradores podem enviar essa mensagem`, message.author.displayAvatarURL({Size: 32}))

message.channel.send(comandos).then(msg => {
    msg.react('🎟️').then(r => { 
    })

    const prosseguirFilter = (reaction, user) => reaction.emoji.name === '🎟️';
 
    const prosseguir = msg.createReactionCollector(prosseguirFilter);
 
    prosseguir.on('collect', r2 => {
    const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)) {
      console.log()
    }else message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
chan.send("O suporte estará aqui em breve..").then((m)=>{ m.pin() })
})
})
})
}
*/


const Discord = require('discord.js')
const db = require("quick.db");
module.exports.run = (bot,message,args) =>{


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    if(message.guild.id !== "771101605827313704") {
const embed = new Discord.MessageEmbed()
        .setTitle(`SUPORTE`)
        .setColor('#EE82EE')
        .setDescription(`Só pode ser usado no servidor (**WaifuZone**)! Clique no título "SUPORTE" que será redirecionado para o servidor!`)
        .setURL(`https://discord.gg/92sz2vTF5g`)
        return message.channel.send(embed);
}

      const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
        message.channel.send("Você já abriu um ticket")
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
message.channel.send("Eu criei um ticket para você");
chan.send(`${message.author} O <@&816155918198243358> estará aqui em breve..`).then((m)=>{ m.pin() })
})
}
}

module.exports.help = {
name : 'ticket'
}