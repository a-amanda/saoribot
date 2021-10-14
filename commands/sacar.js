const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    
    let member = db.fetch(`bank_${message.author.id}`);

    let embed2 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Coloque o valor do saque!`);
  
    if (!args[0]) {
        return message.channel.send(`${message.author}`, embed2);
    };
    let embed4 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Você não Dinheiro no Banco o suficiente para realizar o saque!`);

    if (member < args[0]) {
        return message.channel.send(`${message.author}`, embed4);
    };
    let embed5 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Você tem que colocar um valor maior que **0** para realizar o saque!`);

    if(args[0] < 0) {
        return message.channel.send(`${message.author}`, embed5);
    };
    let embed7 = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setDescription(`Você tem que colocar um valor numerico para realizar o saque!`);

    if (isNaN(args[0])){
        return message.channel.send(`${message.author}`, embed7);
    };
    let embed6 = new Discord.MessageEmbed()
    .setTitle("Saque Efetuado com sucesso!")
    .setColor("#EE82EE")
    .setDescription(` Você sacou no **Banco** um valor de **${args[0]} saori-coins**!`);

    message.channel.send(`${message.author}`, embed6);
    db.add(`money_${message.author.id}`, args[0]);
    db.subtract(`bank_${message.author.id}`, args[0]);
}