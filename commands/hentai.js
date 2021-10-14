const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const db = require("quick.db");

module.exports = {
  name: 'hentai',
  description: 'Send A Hentai Gif Lol',
  usage: '[Prefix]hentai',
  category: 'nsfw',
  run: async (client, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/Random_hentai_gif`
    );

    if (message.channel.nsfw == false) {
      return message.lineReply(
        'Desculpe, por favor **Ligue as permições NSFW do canal nas configurações** para usar este comando!'
      );
    }
    let hentaiEmbed = new MessageEmbed()
      .setColor('#EE82EE')
      .setTitle('Leve o seu Hentai Gif, senhor!!')
      .setImage(body.url)
      .setFooter(`Tysm For Using Me! ${message.author.username}`);

    message.lineReply(hentaiEmbed);
  }
}; 