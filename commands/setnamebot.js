const Discord = require('discord.js');


module.exports = {

    run: async(client, message, args) => {
    if(message.author.id == "671110871853826059") {
        const embed = new Discord.MessageEmbed().setColor('#EE82EE')
        .setDescription('Meu nome foi alterado!!!')
        await client.user.setUsername(args.join(' ')).then(
            message.channel.send(embed)
        ).catch(e => e)
    }
    },
};