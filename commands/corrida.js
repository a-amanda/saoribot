const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


let user = message.mentions.users.first();
          if (!user) return message.reply('**Você não mencionou o usuario que você quer jogar!**').catch(console.error);
          const Corrida = "<@" + message.author.id + ">" 
          const corrida2 =  " <@" + user.id + ">"
          var falas = [" fez **200** metros....."," fez **500** metros..........."," fez **800** metros.............."," fez **1000** metros................."," fez **1500** metros ............................","Teve uma pane no sistema e uma explosão ocorreu","Bateu e pegou fogo" ]
          message.lineReply({
              "embed": {
                  "title": "Corrida em andamento...",
                  "description": " O " + Corrida + " e" +  corrida2 + " **estao disputando uma corrida**" ,
                  "color": "#EE82EE",
                  
                  "fields": [
                      {
                          "name":"Sobre a corrida:",
                          "value":  " " + Corrida +  " " + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "" + corrida2 +  " " + falas[Math.round(Math.random() * falas.length)],
                          "inline": false
                        }
                    ]
                }
            })
        } 