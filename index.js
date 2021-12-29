// puxar as livrarias
const Discord = require("discord.js");
const config = require("./config.js");
const { lineReply } = require('discord-reply');
const bot = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});
const {token, prefix} = require('./config.js');
const express = require("express");
const fs = require("fs");
const app = express();
const moment = require('moment')



//marcar o bot e ela responde com informações
bot.on("message", message => {
  if (message.author.bot) return;
  if (message.content == `<@!${bot.user.id}>` || message.content == `<@${bot.user.id}>`) {

    const marcar = new Discord.MessageEmbed()
      .setDescription(`Olá ${message.author}, meu nome é **Saori** e o meu propósito é ajudar você!`)
      .setThumbnail(bot.user.displayAvatarURL())
      .setColor("#EE82EE")
      .setImage("https://cdn.discordapp.com/attachments/833136190428414023/881963785554903040/saori_icon.jpg")
      .addFields(
        {
          name: 'Meu prefixo:',
          value: `» Meu prefixo é **sa!**`
        },
        {
          name: 'Ajuda',
          value: `» Use sa!help para ver meus comandos.`
        },
        {
          name: 'Me adcione!',
          value: '[Me convide para o seu servidor](https://discord.com/oauth2/authorize?client_id=794968270254899240&scope=bot&permissions=8)'
        }
      )
    return message.lineReply(marcar)
  }

});



//onde tudo se inicia
bot.on('message', message => {
  if (message.author.bot) return;
  
  if (message.channel.type == 'channel') return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`)//puxando a pasta comands + o comando
    commandFile.run(bot, message, args);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
      .setColor('#EE82EE')
      .setDescription(`${message.author},Eu não consegui encontrar comando **__${command}__** no meu sistema, use **sa!help** para saber meus comandos! Caso isso seja um erro, use **sa!reportbug**`)
    return message.lineReply(embed);
  }
});


bot.on("guildCreate", (guild) => {
  let channelSend;
  let prefix = "sa!"

  guild.channels.cache.forEach((channel) => {
    if(
        channel.type === "text" &&
        !channelSend &&
        channel.guild.me.hasPermission("SEND_MESSAGES"))
        channelSend = channel;
  });

  if (!channelSend) return;

  channelSend.send(`Obrigada por me adicionar em seu servidor. O meu prefixo é: **${prefix}** `);
})



bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command == "ticket") {

      let channel = message.mentions.channels.first();
      if(!channel) return message.reply("Use: `sa!ticket #channel para usar o comando`");

      let sent = await channel.send(new Discord.MessageEmbed()
          .setTitle("Sistema de ticket")
          .setDescription("Reaja com :ticket: para abrir um ticket!")
          .setFooter("Sistema de ticket")
          .setColor("#EE82EE")
      );

      sent.react('🎫');
      settings.set(`${message.guild.id}-ticket`, sent.id);

      message.channel.send("Sistema de ticket ativado!")
  }

  if(command == "close") {
      if(!message.channel.name.includes("ticket-")) return message.channel.send("Você não pode usar aqui")
      message.channel.delete();
  }
});



bot.on('messageReactionAdd', async (reaction, user) => {
  if(user.partial) await user.fetch();
  if(reaction.partial) await reaction.fetch();
  if(reaction.message.partial) await reaction.message.fetch();

  if(user.bot) return;

  let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

  if(!ticketid) return;

  if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
      reaction.users.remove(user);

      reaction.message.guild.channels.create(`ticket-${user.username}`, {
          permissionOverwrites: [
              {
                  id: user.id,
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
              },
              {
                  id: reaction.message.guild.roles.everyone,
                  deny: ["VIEW_CHANNEL"]
              }
          ],
          type: 'text'
      }).then(async channel => {
          channel.send(`<@${user.id}>`, new Discord.MessageEmbed()
          .setTitle("Bem-vindo ao ticket")
          .setDescription("O suporte estará aqui em breve!")
          .setColor("#EE82EE"))
      })
  }
});



//status do bot
bot.on('ready', () => {
  console.log('Agora eu estou online');
  var tabela = [
    { name: 'Meu prefixo é sa!', type: 'PLAYING' },
    { name: 'Eu sou uma pequena criança de dois anos que foi feita para te ajudar!', type: 'PLAYING' },
    { name: 'Use sa!suporte para entrar no meu servidor suporte!', type: 'PLAYING' },
    { name: `Eu estou em ${bot.guilds.cache.size} servidores`, type: 'PLAYING' }
  ];


  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    bot.user.setActivity(altstatus)
  }
  setStatus("online")
  setInterval(() => setStatus(), 6000)
})



bot.login(config.token);

