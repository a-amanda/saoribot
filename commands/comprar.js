const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Digite o nome do item q deseja adquirir')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.author.id}`)

        if(purchase === 'pc gamer dos deuses'){
            if(amount < 50000) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.author.id}`, 50000);
            db.push(message.author.id, "pc gamer dos deuses");
            message.channel.send('Você comprou uma (pc gamer dos deuses) com sucesso!')
        }
            if(purchase === 'nome do item'){
            if(amount < preço) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.author.id}`, preço);
            db.push(message.author.id, "nome do item");
            message.channel.send('Você comprou seu (nome do item) com sucesso!')
        }
    }