const Discord = require('discord.js');

exports.run = async (bot, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('#EE82EE')
  .setThumbnail(icon)
  .setTitle('Minha loja')
  .setDescription(`Olá ${message.author}, Bem vindo a minha lojinha \n\n <:coroa_vermelha:874396059202367528> <:setinhaa:883912952632193025> **Itens**\n\n <:coroa:883147171451514941> <:setinhaa:883912952632193025> **Itens teste 2**\n\n <:fofinha:859050554498875413> <:setinhaa:883912952632193025> **Itens teste 3**.`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))

  message.channel.send(comandos).then(msg => {
    msg.react('874396059202367528').then(r => {
      msg.react('883147171451514941').then(r => {
        msg.react('859050554498875413').then(r => {
          
        })
      })
    })

    const geralFilter = (reaction, user) => reaction.emoji.name === 'coroa_vermelha' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === 'coroa' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'fofinha' && user.id === message.author.id;

    const geral = msg.createReactionCollector(geralFilter);
      const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);


    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Itens**')
      .setThumbnail(icon)
       .addFields(
        {
        name: 'item 1',
        value: 'preço'
        },
        {
        name: 'item 2',
        value: 'preço'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
      })

    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Testes 2**')
      .setThumbnail(icon)
      .addFields(
        {
        name: 'item a venda',
        value: '5k'
        },
        {
        name: 'like',
        value: '10k'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
    })

    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Teste 3**')
      .setThumbnail(icon)
      .addFields(
        {
          name: 'aaaaaaa 1',
          value: 'preço'
        },
        {
        name: 'aaaaa 2',
        value: 'preço'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
    })




  })








}