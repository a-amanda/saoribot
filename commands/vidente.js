const Discord = require("discord.js")
const db = require("quick.db");

module.exports.run = async(bot,message,args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})




    if(!args[0]) return message.channel.send("🚨 Você precisa fazer uma pergunta")
    if(args[0].length < 1) return message.channel.send("🚨 Você precisa fazer uma pergunta")


    let i = ["Sim",
    "Não, eu acho.",
    "Talvez",
    "Eu não sei, tente de novo",
    "Quem sabe?",
    "Isso é um mistério, na verdade eu sei mais não quero te falar",
    "Não posso te contar",
    "Meu informante disse que não",
    "Provavelmente",
    "Me pergunte mais tarde! Agora não quero falar contigo.",
    "Claro que não!",
    "Não conte comigo para isso",
    "Dúvido muito",
    "NUNCA",
    "Não Quero Responder Agora Tou No Zipzop",
    "Mais é Claro",
    "Certeza Que Sim",
    "COM CERTEZA",
    "Modo Vidente Está Desligado (mentira e preguica mesmo ;-;)",
    "Quando eu descobrir eu te falo",
    "Quem sabe um dia eu te falo isso...",
    "Pela primeira vez, eu não sei a resposta :(",
    "Essa, tu pergunta lá no posto Ipiranga",
    "Acho que não posso te contar sobre isso não",
    "Isso não é a sua real duvida"]

    let y = i[Math.floor(i.length * Math.random())]


    message.channel.send(`🔮 ${y}`)
}

exports.help = {
    name:"vidente",
    description:"Vidente",
    usage:"vidente trap",
    category:"fun"
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}