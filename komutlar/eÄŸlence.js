const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mamovski`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=702923191106011198&scope=bot&permissions=805314622) | [Discord'uma Katılmayı Unuma](https://discord.gg/hZRBytuds8) | [Youtube](https://www.youtube.com/channel/UCO1AOrIJ0ibD4nyx4GpvVxA)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Mamovski - Eğlence Komutları`, `:eggplant: | **&ara155**: Polisi arar.\n:eggplant: | **&atatürk**: Ulu Önder Mustafa Kemal Atatürk...\n:eggplant: | **&avatar**: Kendi avatarını chate aktarır.\n:eggplant: | **&fuck**: Orta parmak gifi atar.\n:eggplant: |  **&havadurumu**: İstediğiniz şehrin havadurumunu verir.\n:eggplant: | **&herkeseçay**: Herkese çay ısmarlar.\n:eggplant: | **&fuck**: Orta parmak gifi atar.\n:eggplant: | **&hesapla**: İstediğin bir hesaplamayı yapar.\n:eggplant: | **&istatistik**: Bilgisayarının hızı hakkında bilgi verir.\n:eggplant: | **&kullanıcıbilgim**: Discord hesabınız hakkında bilgileri verir.\n:eggplant: | **&mesajdöndür**: Mesajları tersten yazar.\n:eggplant: | **&ping**: Pinginizi ölçer.\n:eggplant: | **&rolbilgi**: İstediğiniz rol hakkında bilgi verir.\n:eggplant: | **&svicon**: Sunucunun fotosunu chate atar.\n:eggplant: | **&slots**: Slot çevirir.\n:eggplant: | **&stresçark**: Stres çarkı döndürür. `)
      .setFooter(`${message.author.username} al aga.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nklnkladklbs'],
    permLevel: 0
  };

  exports.help = {
    name: 'eğlence',
    description: 'eğlence',
    usage: 'eğlence'
  };
