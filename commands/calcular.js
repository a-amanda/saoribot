const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calculadora",
    description: "Resolva um problema de matemática.",


    async run (client, message, args){

        if(!args[0]) return message.lineReply('Por favor, forneça uma pergunta');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.lineReply('Por favor, forneça uma pergunta **válida**')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#8702df')
        .setTitle('📈 Calculadora')
        .addField('Pergunta:', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta:', `\`\`\`css\n${resp}\`\`\``)

        message.lineReply(embed);
        message.delete()

    }
}