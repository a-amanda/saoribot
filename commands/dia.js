const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async (bot, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        let user = message.author;
        let timeout = 86400000;
        let author = await db.fetch(`worked_${message.author.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.lineReply(`**Você ja coletou seu dinheiro diario, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
        } else {
            let amount = Math.floor(Math.random() * 4000) + 1;
            db.add(`money_${message.author.id}`, amount)
            db.set(`worked_${message.author.id}`, Date.now())

            message.lineReply(`**${user} Você recebeu ${amount} saori-coins em seu dinheiro diario!**`)
        }
    }