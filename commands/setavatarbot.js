const Discord = require('discord.js');


module.exports = {
run: async(client, message, args) => {
    if(message.author.id == "671110871853826059"){ 
const embed = new Discord.MessageEmbed().setColor('#EE82EE')
.setDescription('Você setou meu novo avatar!!!')

        client.user.setAvatar(args[0])
        message.channel.send(embed);
    }
    }
};