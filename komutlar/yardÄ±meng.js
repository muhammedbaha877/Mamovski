const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {
  
  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mamovski`, client.user.avatarURL)
      .setDescription("[Add Bot](https://discord.com/oauth2/authorize?client_id=702923191106011198&scope=bot&permissions=805314622) | [Dont Forget Join My Discord](https://discord.gg/hZRBytuds8) | [Youtube](https://www.youtube.com/channel/UCO1AOrIJ0ibD4nyx4GpvVxA)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Mamovski - Help`, `:turtle: | **&help**: Show Bot Commands!\n:turtle: | **&fun**: Show Fun Commands Page 1\n:turtle: | **&fun2**: Show Fun Commands Page 2\n:turtle: | **&moderation**: Show Moderation Commands.\n:turtle: | **&music**: Updating....\n:turtle: | **&radio**: Show Radio Commands.\n:turtle: |  **Channels** : ${client.guilds.size.toLocaleString()} \n:turtle: |  **Users** : ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} \n:turtle: |  **İnstagram**: Unexpectedshine`)
      .setFooter(`${message.author.username}, here my friend.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['command', 'help','h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'help',
    description: 'yardım',
    usage: 'help'
  };
