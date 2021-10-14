const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  
    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.author.id}`)

    let embed1 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(` Você tem que mencionar alguem para pagar!`);

    if (!user) {
        return message.lineReply(`${message.author}`, embed1)
    }
    let embed2 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(` Coloque um valor válido para o pagamento!`);
  
    if (!args[1]) {
        return message.lineReply(`${message.author}`, embed2)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(` Você nao possui dinheiro suficiente para realizar o pagamento!`);

    if (member < args[1]) {
        return message.lineReply(`${message.author}`, embed4)
    }
    let embed5 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(` Você nao pode enviar quantias abaixo de 0!`);

    if(args[1] < 0) {
        return message.lineReply(`${message.author}`, embed5)
    }
    let embed7 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Você tem que colocar um valor númerico para pagar! `);

    if (isNaN(args[1])){
        return message.lineReply(`${message.author}`, embed7)
    }
    let embed6 = new Discord.MessageEmbed()
    .setTitle(" Pagamento Efetuado!")
    .setColor("#EE82EE")
    .setDescription(`Você pagou o ${user} com **${args[1]} saori-coins**!`);

    message.lineReply(`${message.author}`, embed6)
    db.add(`money_${message.user.id}`, args[1])
    db.subtract(`money_${message.author.id}`, args[1])
}