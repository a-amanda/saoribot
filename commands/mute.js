const Discord = require("discord.js");
const ms = require('ms')
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply('Você e fraco lhe falta permissão.')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.lineReply('Membro não encontrado.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'mutado')
        if(!role) {
            try {
                message.lineReply('O cargo mute não foi encontrada, tentando criar um cargo mute.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'mutado',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.lineReply('O cargo mute foi criado com sucesso.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'mutado')
        if(Member.roles.cache.has(role2.id)) return message.lineReply(`${Member.displayName} já foi mutado`)
        await Member.roles.add(role2)
        const embed = new Discord.MessageEmbed()
        .setDescription(`${Member.displayName} Agora esta mutado.`)
        .setColor('#EE82EE')
    message.lineReply(embed);
    }







