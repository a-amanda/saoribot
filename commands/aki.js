const db = require("quick.db");
const { MessageEmbed } = require("discord.js"),
  { Aki } = require("aki-api"),
  emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"],
  Started = new Set();
module.exports = {
  name: "akinator",
  aliases: ["aki"],
  description: "akinator cmd",
  async run(client, message, args) {


    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    const sendMsg = await message.lineReply("⚙ Carregando...");
    const aki = new Aki("pt");
    await aki.start();
    sendMsg.delete();
    const msg = await message.lineReply(
      new MessageEmbed()
        .setTitle(`${message.author.username}, Questão ${aki.currentStep + 1}`)
        .setColor('#EE82EE')
        .setDescription(
          `**${aki.question}**\n${aki.answers
            .map((x, i) => `${x} | ${emojis[i]}`)
            .join("\n")}`
        )
    );
    for (let emoji of emojis) await msg.react(emoji).catch(console.error);
    const collector = msg.createReactionCollector(
      (reaction, user) =>
        emojis.includes(reaction.emoji.name) && user.id === message.author.id,
      { time: 60000 * 6 }
    );
    collector.on("collect", async (reaction, user) => {
      reaction.users.remove(user).catch(console.error);
      if (reaction.emoji.name == "❌") return collector.stop();

      await aki.step(emojis.indexOf(reaction.emoji.name));
      if (aki.progress >= 70 || aki.currentStep >= 78) {
        await aki.win();
        collector.stop();
        message.lineReply(
          new MessageEmbed()
            .setTitle("Este é o seu personagem?")
            .setDescription(
              `**${aki.answers[0].name}**\n${aki.answers[0].description}\nRanking as **#${aki.answers[0].ranking}**\n\n[sim (**s**) / nao (**n**)]`
            )
            .setImage(aki.answers[0].absolute_picture_path)
            .setColor('#EE82EE')
        );
        message.channel
          .awaitMessages(
            (response) =>
              ["sim", "s", "nao", "n"].includes(
                response.content.trim().toLowerCase()
              ) && response.author.id == message.author.id,
            { max: 1, time: 30000, errors: ["time"] }
          )
          .then((collected) => {
            const content = collected.first().content.trim().toLowerCase();
            if (content == "s" || content == "sim")
              return message.lineReply(
                new MessageEmbed()
                  .setColor('#EE82EE')
                  .setTitle("Excelente! Acertou mais uma vez.")
                  .setDescription("Gostei de jogar com você! Te espero aqui de novo!")
              );
            else
              return message.lineReply(
                new MessageEmbed()
                  .setColor('#EE82EE')
                  .setTitle("Uh. você é vencedor")
                  .setDescription("Gostei de jogar com você! Te espero aqui de novo!")
              );
          });
        return;
      }
      msg.edit(
        new MessageEmbed()
          .setTitle(
            `${message.author.username}, Questão ${aki.currentStep + 1}`
          )
          .setColor(10181046)
          .setDescription(
            `**${aki.question}**\n${aki.answers
              .map((x, i) => `${x} | ${emojis[i]}`)
              .join("\n")}`
          )
      );
    });

    collector.on("Fim", () => {
      Started.delete(message.author.id);
      msg.delete({ timeout: 1000 }).catch(() => {});
    });
  },
};
