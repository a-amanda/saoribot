const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

    let channels = db.get(`channels`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    
    let member = db.fetch(`money_${message.author.id}`);
    if(member == null) member = 0;

    let bank = db.fetch(`bank_${message.author.id}`);
    if(bank == null) bank = 0;

    let embed2 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Coloque o valor do deposito!`);
  
    if (!args[0]) {
        return message.lineReply(`${message.author}`, embed2);
    };
    let embed4 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Você não possui Money suficiente para realizar o deposito!`);

    if (member < args[0]) {
        return message.lineReply(`${message.author}`, embed4);
    };
    let embed5 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Você tem que colocar um valor maior que **0** para realizar o deposito!`);

    if(args[0] < 0) {
        return message.lineReply(`${message.author}`, embed5);
    };
    let embed6 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Você tem que colocar um valor numerico para realizar o deposito!`);

    if (isNaN(args[0])){
        return message.lineReply(`${message.author}`, embed6);
    };
    let embed7 = new Discord.MessageEmbed()
    .setTitle("Depósito")
    .setColor("#EE82EE")
    .setDescription(`Você depositou no **Banco** um valor de **${args[0]} saori-coins**!`);

    message.lineReply(`${message.author}`, embed7);
    db.add(`bank_${message.author.id}`, args[0]);
    db.subtract(`money_${message.author.id}`, args[0]);
}
