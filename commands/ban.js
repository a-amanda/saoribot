const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    config: {
        name: "ban",
        aliases: ["b", "banish"],
        category: "moderation",
        description: "Bans the user",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {

      
        try {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.lineReply("**🚨 | Desculpe, mas você não tem permissão para isso! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.lineReply("**🚨 | Desculpe, mas eu não tenho permissão para isso!- [BAN_MEMBERS]**");
            if (!args[0]) return message.lineReply("**Forneça um usuário para banir!**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.lineReply("**O usuário não está na guilda**");
            if (banMember === message.member) return message.lineReply("**Você não pode se banir**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.lineReply("**Não consigo chutar esse usuário**")
            try {
            banMember.send(`**Olá, você foi banido de ${message.guild.name} pelo motivo: - ${reason || "Motivo não informado"}**`).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(banMember, { days: 7, reason: reason })
            }
            if (reason) {
            let avatar = message.author.displayAvatarURL({format: 'png'});    
            var sembed = new MessageEmbed()
                .setColor("#EE82EE")
                .setThumbnail('https://cdn.streamelements.com/uploads/e91dc755-a59e-4138-82d1-68b960e297d1.gif')
                .setAuthor(message.guild.name, message.guild.iconURL())
                .addFields(
                    {
                      name: "``Informações do Banimento:``",
                      value: `**Usuário banido**: ${banMember.user} \n **Motivo**:  ${reason} \n **Banido por**: ${message.author}`
                    }
                )
            message.lineReply(sembed)
            } else {
                let avatar2 = message.author.displayAvatarURL({format: 'png'});
                var sembed2 = new MessageEmbed()
                .setColor("#EE82EE")
                .setThumbnail('https://cdn.streamelements.com/uploads/e91dc755-a59e-4138-82d1-68b960e297d1.gif')
                .setAuthor(message.guild.name, message.guild.iconURL())
                .addFields(
                    {
                      name: "``Informações do Banimento:``",
                      value: `**Usuário banido**: ${banMember.user} \n **Banido por**: ${message.author}`
                    }
                )
            message.lineReply(sembed2)
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#EE82EE")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderação**", "ban")
                .addField("**Banido**", banMember.user)
                .addField("**ID**", `${banMember.id}`)
                .addField("**Banido por: **", message.author)
                .addField("**Motivo: **", `${reason || "**Motivo não informado**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.lineReply(`**${e.message}**`)
        }
    }
};