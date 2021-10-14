const Discord = require('discord.js');


    exports.run = async (saori, message, args) => {

    let corno = Math.round(Math.random() * 100)
        let pessoa = message.mentions.users.first() || message.author;
        if(!pessoa) return message.lineReply("❌|${message.author}, Mencione uma pessoa para ver se é corno ou não")

        let saber
    if(corno > 80) {
      corno = ("é 80% corno...");
    } else if(corno>= 40) {
      corno = ("é 40% corno"); 
    } else if(corno>= 10){
      corno = ("é 10% corno");
    }else if(corno <=0) {
      corno = ('é 0% corno')
    } else {
      corno = ("É 100% corno"); 
    }
    let cornoo = new Discord.MessageEmbed()
    .setTitle('Corno?')
    .setDescription(`🐂| ${pessoa} ${corno}`)
    .setColor('#EE82EE')

    message.lineReply(`${message.author}`, cornoo)


}
