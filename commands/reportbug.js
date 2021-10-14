const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "reportbug",
  aliases: "bug",
  category: "Info",
  description: "Reporte um bug da Saori.",
  usage: "reportbug <bug>",
  run: (bot, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


const hora = new Date();
hora.setHours(hora.getHours() - 3);
message.delete().catch(O_o => {});
const reason = args.join(' ');
if(!reason) return message.reply("Você precisa me avisar qual é op bug que você quer reportar!").then(msg => msg.delete({timeout: 5000}))

//Mensagem na Log
console.log(`
=================================
Bug Reportado!

Bug: ${reason}
Reportado por: ${message.author.tag} ID: ${message.author.id}
Hora: ${hora.getUTCHours()}:${hora.getUTCMinutes()}:${hora.getUTCSeconds()}
=================================`);

//Mensagem no Privado
const privado = new Discord.MessageEmbed()
.setTitle(`**Bug reportado com sucesso!**`)
.setColor(`#EE82EE`)
.setThumbnail('https://media.tenor.com/images/c48003cc85f49ab072d0a819d63da772/tenor.gif')
.setDescription(`${message.author} muito obrigado por nos avisar o bug: **${reason}**, caso tenha alguma nescecidade, alguem da nossa equipe podera entrar em contato com você!`)
.setFooter(`O uso deste comando com mas intenções podem gerar punições!`) 
message.author.send(privado);


//mensagem que chega na minha dm
const minha = new Discord.MessageEmbed()

.setTitle("Novo bug")
.setDescription(`O usuário  ${message.author.tag} do ID: ${message.author.id} \nReportou um bug no servidor ${message.guild.name}  ${message.guild.id} \nEle reportou o bug: **${reason}**`)
.setFooter("Lembre-se logo de resolver")
.setColor("#EE82EE")

let user = client.users.cache.get("671110871853826059")

user.send(minha)

}
}





/*const Discord = require('discord.js')

module.exports = {
  name:"reportbug",
  aliases:["bug"],
  run: async (client, message, args) => {
    
 const reporte = args.join(" ")
if(!reporte) return message.channel.send(`${message.author} você deve digitar o bug`) 

const embed = new Discord.MessageEmbed()

.setTitle("Novo bug")
.setDescription(`O usuário  ${message.author.username} \nReportou um bug no servidor ${message.guild.name} \nEle reportou ${reporte}**`)
.setFooter("Espero que conserta")
.setColor("BLUE")

let user = client.users.cache.get("671110871853826059")

user.send(embed)
}
}*/
