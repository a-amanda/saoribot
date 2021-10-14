const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    
    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    let user = message.author;
    
    let author = await db.fetch(`work_${message.author.id}`)

    let timeout = 6000000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#EE82EE")
        .setDescription(`Você já trabalhou recentemente!\n\nTente novamente em **${time.minutes}m ${time.seconds}s**`);
        
        message.channel.send(`${user}`, timeEmbed);
    } else {

        let replies = ['Programador','Construtor','Agricultor','Garoto(a) de Programa','Garçom','Mecanico','Cozinheiro',
                      'Vendedor','Marinheiro','Youtuber','Padeiro','Profesor','Segurança','Modelo','Detetive','Conselheiro(a) amoroso(a)','Jornalista','Garoto (a) de programa']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 500) + 500;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("Trabalho efetuado com sucesso!")
        .setColor("#EE82EE")
        .setDescription(`${user.username} trabalhou como **${replies[result]}** e ganhou: \n\n:dollar: Dinheiro: **R$${amount}**`)
        .setFooter("Uau,você é bem trabalhador(a)... Tenho muito orgulho de você!")
        .setTimestamp();

        message.channel.send(`${user}`, embed1);
        
        db.add(`money_${message.author.id}`, amount);
        db.set(`work_${message.author.id}`, Date.now());
    };
}