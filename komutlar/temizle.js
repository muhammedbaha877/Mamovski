const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(99);
message.channel.send("99 mesaj siliverdim").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 2 
};

exports.help = {
  name: 'sil', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'sil <miktar>'
};
