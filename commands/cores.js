const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
  if(!channels) channels = []
  if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})
  
  

  var string = args.join(" ");
  var colors = [
    {
      name: "Vermelho",
      id: "803457545237954620"
    },
    {
      name: "verde",
      id: "862406034860933143"
    },
    {
      name: "azuL",
      id: "803457545237954620"
    }
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.lineReply(`${message.author}, escreva o nome da cor após o comando.`);
  } else if (args[0].toLowerCase()  === "remove") {
      await message.member.roles.remove(ids);
      return await message.lineReply(`${message.author}, suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.lineReply(
      `${message.author}, não existe cores com o nome ${string} neste servidor.`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.lineReply(`${message.author}, agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};