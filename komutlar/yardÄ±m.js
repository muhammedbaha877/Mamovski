const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {
  
  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mamovski`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=702923191106011198&scope=bot&permissions=805314622) | [Discord'uma Katılmayı Unuma](https://discord.gg/hZRBytuds8) | [Youtube](https://www.youtube.com/channel/UCO1AOrIJ0ibD4nyx4GpvVxA)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Mamovski - Yardım`, `:white_small_square: | **&yardım**: Botun komutlarını görüntüler!\n:white_small_square: | **&eğlence**: Eğlence komutları Sayfa 1\n:white_small_square: | **&eğlence2**: Eğlence komutları Sayfa 2\n:white_small_square: | **&moderasyon**: Moderasyon komutlarını gösterir.\n:white_small_square: | **&müzik**: Düzenleniyor....\n:white_small_square: | **&radyo**: Radyo açma komutlarını gösterir.\n:white_small_square: |  **Sunucular** : ${client.guilds.size.toLocaleString()} \n:white_small_square: |  **Kullanıcılar** : ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n:white_small_square: |  **İnstagram**: Unexpectedshine\n:white_small_square: |  **&partner**: Şuan bulunduğunuz sunucuya bu komutu yazarsanız size özelden mesaj gönderir ve nasıl partner olabilceğinizi daha doğrusu partner olma isteğinizi nasıl iletebilceğiniz hakkında bilgi verir...(Yöneticiyseniz çalışmaz)  `)
      .setFooter(`${message.author.username} al aga.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'yardım', 'y'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
