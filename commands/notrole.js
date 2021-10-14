const Discord = require("discord.js")
const db = require("quick.db");
 
module.exports.run = async(bot,message,args)=> {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  message.delete().catch(O_o => {});  
    let role;
    if(args[1] && isNaN(args[1])) role = message.mentions.roles.first()
    if(args[1] && !isNaN(args[1])){
        role = message.guild.roles.cache.get(args[1])
    }
    let user;
    if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if(args[0] && !isNaN(args[0])){
        user = client.users.cache.get(args[0])
 
        if(!message.guild.members.cache.has(args[0])) return message.lineReply("Usuario nao encontrado").then(msg => msg.delete({timeout: 5000}))
 
    }
    if(!user) return message.lineReply(" Voce precisa mencionar um usuario").then(msg => msg.delete({timeout: 5000}))
 
    if(!role) return message.lineReply("  Voce precisa mencionar um cargo").then(msg => msg.delete({timeout: 5000}))
 
if(!message.guild.members.cache.get(user.id).roles.cache.has(role.id)) return message.lineReply(":xrosa:")
    message.guild.members.cache.get(user.id).roles.remove(role.id).catch(e => message.lineReply(e))
    message.lineReply("cargo removido com sucesso").then(msg => msg.delete({timeout: 5000}))
 
 
//addRole @user @role
 
}
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}
 
exports.help = {
    name:"removeRole",
    description:"removeRole",
    usage:"removeRole",
    category:"moderation"
}