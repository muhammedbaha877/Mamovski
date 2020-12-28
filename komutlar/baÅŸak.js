const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} Hmmmmm`,
            image: {
                url: ""
            }
        }
    });

    let bitiş = (Math.random() * (10000000 - 1000 +0)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `Baha, %${bitiş.toFixed(0)} BAŞAĞI SEVİYOOOOO.`
            }
        });
    }, 3 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'başakkalpmami', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'başakkalpmami'
};
