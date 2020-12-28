const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} LGBT Ölçeri Çalıştırdı!`,
            image: {
                url: "https://media.giphy.com/media/26BGK3lg1onPfg7W8/giphy.gif"
            }
        }
    });

    let bitiş = (Math.random() * (100 - 1 +0)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, %${bitiş.toFixed(0)} LGBT üyesisin.`
            }
        });
    }, 3 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'gay', 
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'gay'
};
