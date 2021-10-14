const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = (bot, message, args) => {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    const embed = new Discord.MessageEmbed()
    .setTitle('<a:ASASDance:880914290465443840>| Veja aqui algumas informações minhas!')
    .setColor('#EE82EE')
    .setDescription(`${message.author}, aqui esta uma pequena lista sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: '<a:lolizinha:844750411017617418>| Eu sou a:',
            value: `${bot.user.tag}\n`
            
        },
        {
            name: '<a:staff:880909953395753070>| Prefixo:',
            value: 'sa!'
        },
        {
            name: '<a:r_tv:880913786083614780>| Servidores:',
            value: `Estou em **${bot.guilds.cache.size}** servidores.\n`
            
        },
        {
            name: '<a:wifi:880910315041198090>| Canais:',
            value: `Tenho **${bot.channels.cache.size}** canais de texto.\n`
            
        },
        {
            name: '<a:stickdance:880912927262142465>| Usuários:',
            value: `Cuido de **${bot.users.cache.size}** usuários.\n`
            
        },
        {
            name: '<a:carregamento:880909594271027200>| Meu ping:',
            value: `**${Math.round(bot.ws.ping)}** ms\n`
            
        },
        {
            name: '<:coracao_pra_vc:880911445955608586>| Meu criador:',
            value: '! Titio Tamura#7561\n'
            
        },
        {
          name: '<:enviar:880910848758001674>| Servidor do meu criador:',
          value: `[Clique aqui](https://discord.gg/d5VRmjmd2Z)\n`
          
        },
        {
            name: 'Me adcione!',
            value: '[Me convie para o seu servidor](https://discord.com/oauth2/authorize?client_id=794968270254899240&scope=bot&permissions=8)'
          }
    )
    message.lineReply(embed);
}
