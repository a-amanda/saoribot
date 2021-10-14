const Discord = require('discord.js')
const db = require("quick.db");
const  generator = require('generate-password');

module.exports = {
    name: "passgen",
    category: 'Uteis',
    cooldown: '60',
    async run(client, message, args) {


        let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



  var password = generator.generate({
      length: 10,
      numbers: true
});

  let user = message.author

  let embed = new Discord.MessageEmbed()
      .setTitle('🔒 Gerador de Senhas')
      .setDescription(`A senha gerada é: \`${password}\``)
      .setColor('#EE82EE')

  let embed2 = new Discord.MessageEmbed()
      .setTitle('🔑 Gerador de Senhas')
      .setDescription('Gerei uma senha aleatória e enviei na sua DM!')
      .setColor('#EE82EE')

user.send(embed)
return message.lineReply(embed2)
    }}