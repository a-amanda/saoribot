const { Message } = require('discord.js')
const db = require("quick.db");

module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
    run : async(bot, message, args) => {

        let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Membro não encontrado')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'mutado');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} Acaba de ser desmutado`)
    }
}