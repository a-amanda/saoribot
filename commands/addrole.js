const Discord = require("discord.js")
const db = require("quick.db");

module.exports.run = async(client,message,args)=> {

    let channels = db.get(`channels_${message.guild.id}`)
    if(!channels) channels = []
    if(channels.some(a => message.lineReply === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})
        

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

        if(!message.guild.members.cache.has(args[0])) return message.lineReply(" <a:Sirene:810572998037733397>** | Usuario nao encontrado**").then(msg => msg.delete({timeout: 5000}))
    }
    if(!user) return message.lineReply("<a:Sirene:810572998037733397>** | Voce precisa mencionar um usuario.**").then(msg => msg.delete({timeout: 5000}))
    if(!role) return message.lineReply("<a:Sirene:810572998037733397>** | Voce precisa mencionar um cargo.**").then(msg => msg.delete({timeout: 5000}))

if(message.guild.members.cache.get(user.id).roles.cache.has(role.id)) return message.lineReply("<a:Sirene:810572998037733397> **|** Este usuário já possui este cargo.")
    message.guild.members.cache.get(user.id).roles.add(role.id).catch(e => message.lineReply(e))
    message.lineReply("**Cargo adicionado com sucesso <a:Certo:811281368705007676>!**").then(msg => msg.delete({timeout: 5000}))


//addRole @user @role

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}

exports.help = {
    name:"addRole",
    description:"addRole",
    usage:"addRole",
    category:"moderation"
}