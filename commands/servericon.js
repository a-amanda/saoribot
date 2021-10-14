const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  nome: 'servericon',
  alternativas: ['servericon'],
  run: async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    var embed = {
      title: `Icone do servidor ${message.guild.name}`,
      description: `[Click aqui](${message.guild.iconURL({
        dynamic: true, format: "png", size: 4096
      })}) para baixar a imagem desse servidor.`,
      color: '#EE82EE',
      image: {
        url: message.guild.iconURL({ dynamic: true, format: "png", size: 4096 })
      }
    };
    message.reply({ embed: embed });
  }
};