const fetch = require("node-fetch")
const db = require("quick.db");
const { MessageEmbed, MessageMentions } = require('discord.js')
module.exports = {
    name: "fritar",
    description: "Frite alguém!",
    run: async(client, message, args) => {


        let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        const user = message.mentions.members.first() || message.member || message.guild.users.cache.get(u => u.id === args[0])
        const avatar = user.user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Fritado!")
            .setImage(data.message)
            .setColor('#EE82EE')
            .setTimestamp()
            message.lineReply(embed)
        })
    }
}