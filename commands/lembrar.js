const Discord = require('discord.js');
const ms = require("ms")
const db = require("quick.db");

module.exports = {
    name: 'lembrete',
    aliases: ['alarme'],

    run: async(client, message, args) => {

        let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        let time = args[0]
        if(!time) return message.lineReply("Defina um tempo para eu poder te lembrar. Use apenas letras minusculas. Ex: 1s, 1m, 1h, 1d")
        let lembrete = args.slice(1).join(" ")
        if(!lembrete) return message.lineReply(`Por favor defina um lembrete`)

 const lembrar = new Discord.MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTitle (`Lembrete agendado`)
    .setColor('#EE82EE') 
    .addField(`Irei lembrar você de:`, `\`${lembrete}\``, true)
    .addField("Daqui as", `\`${time}\``, true) 
    .setTimestamp(Date.now() + ms(time))
    .setFooter(`Você será lembrado `, client.user.displayAvatarURL())
        message.lineReply(lembrar)

        setTimeout(() => {
            let pronto = new Discord.MessageEmbed()
            .setTitle("Seu lembrete "  + message.author.username)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Você me pediu para criar um lembrete com essas informações`)
            .setColor("#EE82EE")
            .addField("Duração", `\`${time}\``, true)
            .addField(`Lembrete:`, `\`${lembrete}\``, true)
            .setFooter(`Lembrete Ocorido com sucesso`, client.user.displayAvatarURL())
            message.lineReply(message.author, pronto)
        }, ms(time))
    }
}