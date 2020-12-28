const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mamovski`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=702923191106011198&scope=bot&permissions=805314622) | [Discord'uma Katılmayı Unuma](https://discord.gg/hZRBytuds8) | [Youtube](https://www.youtube.com/channel/UCO1AOrIJ0ibD4nyx4GpvVxA)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Mamovski - Eğlence Komutları 2`, `:eggplant: | **&çekiç**: İstediğin kişiye çekiç fırlatır.\n:eggplant: | **&şifre**: İstediğiniz uzunlukta rastgele şifre oluşturur.\n:eggplant: | **&emojiyazı**: Emojilerle istediğiniz şeyi yazar.\n:eggplant: | **&afiş**: isminizi afiş şeklinde yazar.\n:eggplant: | **&gay**: LGBT Üyesi olma düzeyinizi ölçer.\n:eggplant: | **&bok**: istediğiniz kişinin kafasına sıçarsınız. `)
      .setFooter(`${message.author.username} al aga.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['koasdojasodjash'],
    permLevel: 0
  };

  exports.help = {
    name: 'eğlence2',
    description: 'eğlence',
    usage: 'eğlence2'
  };
