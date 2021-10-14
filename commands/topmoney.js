const { MessageEmbed } = require("discord.js");
const db = require('quick.db');;

exports.run = async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        let money = db.all().filter(lb => lb.ID.startsWith(`bank_${message.author.id}`)).sort((a, b) => b.data- a.data)
        let bankBalance = money.slice(0, 10)
        console.log(bankBalance)
        let content = " ";

        for(let i = 0; i < bankBalance.length; i++) {
            let user = bot.users.cache.get(bankBalance[i].ID.split('_')[2])

            content += `${i+1}. ${user} - \$${bankBalance[i].data} \n`

        }

        const embed = new MessageEmbed()
        .setColor("#EE82EE")
        .setTitle(`${message.guild.name}\' RANK`)
        .setDescription(`** ${content} **`)
        .setTimestamp()

        message.channel.send(embed)
}

