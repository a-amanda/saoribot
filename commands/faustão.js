const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
 try {
 let name = ('Faustão');

 let avatar = {avatar: 'https://imagem.natelinha.uol.com.br/grande/faustaocomendo_86b41c9ca68c6778195f5f5d9dc659a2d54cd81a.jpeg'}

 let fausto = [
    'Ta pegando fogo bixo!',
    'E vem aí, logo depois dos reclames do plin plin...',
    'Aqui no Projac tem gente que passa rasteira até em cobra',
    'Erroooooou!',
    'Quem sabe faz ao vivo!',
    'Se vira nos 30!',
    'Ô louco, meu!',
    'Orrrrra, meu!',
    'Essa fera aí bicho, exatamente às quinze para as sete...'

];
let arg = fausto[Math.floor(Math.random() * fausto.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
    message.lineReply('**Poxa ele ta dormindo agora :/**')
 }
}