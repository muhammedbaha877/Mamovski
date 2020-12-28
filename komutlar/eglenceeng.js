const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mamovski`, client.user.avatarURL)
      .setDescription("[Add Bot](https://discord.com/oauth2/authorize?client_id=702923191106011198&scope=bot&permissions=805314622) | [Dont Forget Join My Discord](https://discord.gg/hZRBytuds8) | [Youtube](https://www.youtube.com/channel/UCO1AOrIJ0ibD4nyx4GpvVxA)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Mamovski - Fun Commands`, `:crocodile: | **&call911**: Calls 911.\n:crocodile: | **&ataturk**: God of Greece, Also Armenian Fucker\n:crocodile: | **&avatar**: Show Own Avatar.\n:crocodile: | **&fuck**: Send Fuck Gif.\n:crocodile: |  **&weather**: Show weather which country you want.\n:crocodile: | **&sendtea**: send tea to everyone.\n:crocodile: | **&draw**: Draw a number between 100-999.\n:crocodile: | **&calculate**: Calculate your math problem.\n:crocodile: | **&stats**: Bot Channels, Users Stats.\n:crocodile: | **&Profile**: Shows your discord profile.\n:crocodile: | **&turnmsg**: It turns messages.\n:crocodile: | **&ping**: Shows Ping.\n:crocodile: | **&roleinfo**: Show role info.\n:crocodile: | **&svicon**: Shows server icon.\n:crocodile: | **&slots**: It kind of playing slots.\n:crocodile: | **&fidgetspinner**: Turns Fidget spinner.`)
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
    name: 'fun',
    description: 'eğlence',
    usage: 'fun'
  };
