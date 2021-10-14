const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "setnick",
  aliases: ["setnickname", "setusername"],
  description: 'Mudar o apelido de um membro do servidor',
  usage: '<prefix>setnick <@user> novo nickname',
  category: 'configuração', 


run = async (client, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  
  
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "#EE82EE", description: "Você é fraco, lhe falta poder de administrador para usar este comando!"}})
  }
  
  let user = message.mentions.users.first(); 
  if (!user) return message.channel.send({embed: {color: "#EE82EE", description: "Você precisa mencionar o usuário!"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "#EE82EE", description: "Você precisa inserir um nickname para eu poder fazer a alteração!"}});
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "#EE82EE", description: `Eu não tenho permição para alterar o nickname desse usuário!`}}));
  return message.channel.send({embed: {color: "#EE82EE", description: `Alterado com sucesso **${user.tag}** nickname para **${nick}**`}});
}

}

