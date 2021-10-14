const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  message.delete();
  if (!args[0])
    return message.lineReply(
      `**${message.author.username}, a sintaxe correta é:** ` +
        "`" +
        "sa!emoji nomedoemoji`"
    ); //Troque a exclamação ! da mensagem acima pelo seu prefixo
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.lineReply(
      "`" + args[0] + "` **não é um emoji deste servidor.**"
    );
  } else if (emoji.animated === true) {
    message.lineReply(`<a:${args[0]}:${emoji.id}>`);
  } else {
    message.lineReply(`<:${args[0]}:${emoji.id}>`);
  }
};
