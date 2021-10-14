const { MessageEmbed } = require('discord.js');
const db = require("quick.db");

module.exports = {
    name: 'unban',
    run: async (bot, message, args) => {

        let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Esta faltando a permissão **BAN_MEMBROS**').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Porfavor coloque o id do usuario que você quer desbanir').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Não e um usuario valido!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'sem razão';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Usuario desbanido com sucesso! ${user.user.tag}`)
                    .setColor('#EE82EE')
                    .addField('Usuario ID', user.user.id, true)
                    .addField('Tag do usuario', user.user.tag, true)
                    .addField('Motivo do desbanimento', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`Usuario ${member.tag} não foi banido!`)
                    .setColor('#EE82EE')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('Ocorreu um erro')
        });

    }
}      
