const db = require("quick.db")

module.exports = {
    config: {
        name: "setmodlogchannel",
        category: "configuracao",
        aliases: ['setm', 'sm', 'smc'],
        description: "Define um canal para o qual o bot pode enviar registros de moderação!",
        usage: '<prefix>comado <#channel>'
    },
    run: async (bot, message, args) => {

      let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Você é fraco, lhe falta poder de administrador! - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**O canal modlog definido neste servidor é: \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Digite um nome de canal ou ID para definir!**"
        );
    }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Insira um canal de texto válido!**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**Este canal já está definido como canal Modlog!**")
            } else {
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Canal modlog setado **")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**O canal modlog foi configurado com sucesso em \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Erro - `Falta de permições ou o canal não é um canal de texto!`**");
        }
    }
};
