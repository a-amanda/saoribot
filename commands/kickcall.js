const discord = require('discord.js')
const db = require("quick.db");
module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    if(!message.member.hasPermission('ADMINISTRATOR')) return message.lineReply('Você e fraco lhe falta permissão para isso.')

    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.lineReply(
        "Não tenho permissões adequadas para usar este comando!"
      );

    if (!message.mentions.members.first())
      return message.lineReply(
        `Mencione o usuário que você deseja expulsar do canal de voz!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.lineReply(`O usuário não está em nenhum canal de voz!`);

    message.mentions.members.first().voice.kick();
    
    message.lineReply(`O usuário foi expulso do canal de voz!`)
  }
};