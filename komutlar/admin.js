const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mamovski`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=702923191106011198&scope=bot&permissions=805314622) | [Discord'uma Katılmayı Unuma](https://discord.gg/hZRBytuds8) | [Youtube](https://www.youtube.com/channel/UCO1AOrIJ0ibD4nyx4GpvVxA)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Mamovski - Moderasyon`, `:peach: | **&kick**: İstediğin kişiyi sunucudan atar.\n:peach: | **&oylama**: İçeriğin oylamasını yapar evet hayır olarak.\n:peach: | **&unban**: İstediğiniz kişinin banını kaldırır.\n:peach: | **&sil**: 99 mesajı siliverir.\n:peach: | **&reklamtaraması**: Üyelerin açıklamalarında reklam var mı diye bakar. `)
      .setFooter(`${message.author.username} al aga.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['koasdojasasdodjash'],
    permLevel: 0
  };

  exports.help = {
    name: 'moderasyon',
    description: 'moderasyon',
    usage: 'moderasyon'
  };
