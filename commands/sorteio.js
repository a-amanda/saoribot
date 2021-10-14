const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
 name: "sortear",
 timeout: 10000,
 aliases: [],
 run: async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


 
 message.delete().catch(() => null);
 
 if (!args[0]) return message.channel.send(`Você não específicou tempo!`);
 
 if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m")) return message.channel.send(
 `Use a forma correta para definir o tempo, Use Apenas Letras Minusculas Exemplo: 1s, 1m, 1h, 1d`
 );
 
 if (isNaN(args[0][0])) return message.channel.send(`Isso é um número por acaso?`);
 
 let channel = message.mentions.channels.first();
 
 if (!channel) return message.channel.send(
 `Você precisa marcar o canal para o sorteio!`
 );
 
 let prize = args.slice(2).join(" ");
 
 if (!prize) return message.channel.send(`Você precisa falar o prêmio!`);
 
 message.channel.send(`*Sorteio criado em ${channel}*`);
 
 let Embed = new MessageEmbed()
 .setTitle(`Novo sorteio!`)
 .setDescription(
 `@everyone O Usuário ${message.author} Esta Sorteando: **${prize}**
 Clique Em 💎 Para Participar`
 )
 .setTimestamp(Date.now() + ms(args[0]))
 .setColor("#EE82EE");
 
 let m = await channel.send(Embed);
 
 m.react("💎");
 
 setTimeout(() => {
 if (m.reactions.cache.get("💎").count <= 1) {
 message.channel.send(`Reações: ${m.reactions.cache.get("💎").count}`);
 return message.channel.send(``);
 }

 let ganhador = m.reactions.cache.get("💎").users.cache.filter((u) => !u.bot).random();
 channel.send(`Parabens ${ganhador} Por Ganhar O Sorteio De **${prize}**`);
 
 }, ms(args[0]));
 },
};