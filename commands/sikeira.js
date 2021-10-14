const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
 try {
 let name = ('Sikera Junior');

 let avatar = {avatar: 'https://www.meiahora.com.br/_midias/jpg/2020/10/23/700x470/1_sikera-20322040.jpg'}

 let batatinha = [
    'CPF cancelado!',
    'Queima ou não queima?',
    'Você vai morrer antes do natal!',
    'The maconha dead!',
    'Ele tomou?.... NA JACA!!...... no olho da jaca!',
    'Maconheiro safado!',
    'Hmmmmmm, tu queima né?',
    'Tu fumo hoje né?',
    'The maconha is dead!',
    'Acunha Renato!',
    'É o crime... É nois!'

];
let arg = batatinha[Math.floor(Math.random() * batatinha.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
 message.reply('**Poxa ele ta dormindo agora :/**')
 }
}