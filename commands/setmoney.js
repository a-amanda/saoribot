/*const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {  

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    
    if(message.author.id !== "671110871853826059")  return message.reply('Apenas meu criador tem permisão para usar este comando.');

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(` ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
    };

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(` ${message.author}, você precisa mencionar um usuário para adicionar o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(` ${message.author}, você precisa colocar um numero valido!`);
    };

    db.add(`money_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`money_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle(":dollar: **|** Money adcionado!")
    .setColor("#EE82EE")
    .setDescription(`Foi adicionado **$${args[1]}** para ${user}!\n\n:dollar: Dinheiro Atual: **R$${bal}**`)
    .setFooter(`Money foi adicionado!`);
    message.channel.send(moneyEmbed);
}*/

const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

message.channel.send("Esse comando está em manutenção. Tente novamente mais tarde ou entre em contado com meus desenvolvedores.")


}