/*const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  
    let autor = message.author;
    
    let user = message.mentions.users.first();
    
    if(!user) {
        return message.lineReply(` ${autor} você tem que mencionar um membro para realizar seu roubo!`);
    };

    if(user.id == autor.id){
        return message.lineReply(` ${autor} você não pode se auto-roubar!`);
    };

    let user_money = await db.fetch(`money_${message.author.id}`)
    if(user_money == null) user_money = 0;

    let autor_money = await db.fetch(`money_${message.author.id}`)
    if(autor_money == null) autor_money = 0;
        
    if(user_money <= 0) {
        return message.lineReply(` ${autor}, você não pode roubar alguem que não possui dinheiro!`);
    };

    let timeout = 600000;

    let daily = await db.fetch(`rob_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {

        let time = ms(timeout - (Date.now() - daily));
  
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#EE82EE")
        .setDescription(` Você já realizou um roubo hoje!\n\nTente novamente daqui a **${time.hours}h ${time.minutes}m ${time.seconds}s**`);
        
        message.lineReply(`${autor}`, timeEmbed);
    } else {
        
        let sorte = Math.floor(Math.random() * 15) + 1;
        
        if(sorte == 2) {
            
            let amount = Math.floor(Math.random() * autor_money) + 1;
            
            let moneyEmbed = new Discord.MessageEmbed()
            .setTitle("👮 Seu roubo falhou e você foi preso!")
            .setColor("#EE82EE")
            .setDescription(`Você realizou um roubo e não se saiu muito bem!\nE você teve que pagar a fiança que ficou no total de **${amount} saori-coins**!`);
           
            message.lineReply(`${autor}`, moneyEmbed);
            db.subtract(`money_${autor.id}`, amount);
            db.set(`rob_${autor.id}`, Date.now());
        }else{
            
            let amount = Math.floor(Math.random() * user_money) + 1;
            
            let moneyEmbed = new Discord.MessageEmbed()
            .setTitle("🔫 Roubo Realizado Com sucesso!")
            .setColor("#EE82EE")
            .setDescription(`Você roubou o ${user}!\nE você conseguiu uma quantia de **${amount} saori-coins**!`);
            
            message.lineReply(`${autor}`, moneyEmbed);
            db.subtract(`money_${message.guild.id}_${user.id}`, amount);
            db.add(`money_${autor.id}`, amount);
            db.set(`rob_${autor.id}`, Date.now());
        };
    };
}
*/

const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

message.channel.send("Esse comando está em manutenção. Tente novamente mais tarde ou entre em contado com meus desenvolvedores.")


}
