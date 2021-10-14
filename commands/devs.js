const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = (client, message, args) => {



    const embed = new Discord.MessageEmbed()
    .setColor('#EE82EE')
    .setDescription(` Essas são algumas informações ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: 'Meu criador',
            value: `Quem me programou e me desenvolveu: **! Titio Tamura#7561**`,
            
        },
        {
            name: 'Ajudante do meu programador',
            value: `Quem dá algumas ideias e comanda a área de suporte **blu#5655**`
        }
       

    )
    message.lineReply(embed);
}