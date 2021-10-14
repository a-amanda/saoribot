/*const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {


  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



const sender = message.author;

let embed = new Discord.MessageEmbed()

.setColor(`#EE82EE`)
.setTitle(`|Bem vindo(a) a minha lista comandos`)
.setDescription(``)
.setImage('https://cdn.discordapp.com/attachments/802631313408262195/838209804405047296/PicsArt_05-01-09.25.34.jpg')
.setFooter(`Esses são os meus comandos`)
.setThumbnail(client.user.displayAvatarURL())
.addFields(
        {
          name: 'Meu server suporte',
          value: `[Clique aqui](https://discord.gg/5fkAkbs5cs)`
          
        },
        {
          name: 'Server do meu criador',
          value: `[Clique aqui](https://discord.gg/d5VRmjmd2Z)`
          
        },
        {
          name: 'Meus comandos',
          value: `Em breve`
          
        }

    )

sender.send(embed)
message.channel.send(`${message.author} A lista de comandos foi enviada para sua dm!\nCaso não tenha chegado, verifique se a sua DM está bloqueada, e se estiver por favor desbloqueie.`)
}*/

const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {

message.channel.send(`${message.author} No momento esse comando não pode ser usado pelo motivo: **Meu site não está online!**`)
}