const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = [':heart:', ':heart:', ':heart:', ':heart:', ':heart:', ':heart:', ':heart:', ':heart:', ':heart:', ':heart:',];
const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
exports.run = function(client, message, args) {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağımı Yazmalısın**');
  
	var slot1 = slots[Math.floor(Math.random() * slots.length)];
  var slot2 = slots[Math.floor(Math.random() * slots.length)];
  var slot3 = slots[Math.floor(Math.random() * slots.length)];
	var slot4 = slots[Math.floor(Math.random() * slots.length)];
	var slot5 = slots[Math.floor(Math.random() * slots.length)];
  var slot6 = slots[Math.floor(Math.random() * slots.length)];
  var slot7 = slots[Math.floor(Math.random() * slots.length)];
  var slot8 = slots[Math.floor(Math.random() * slots.length)];
  var slot9 = slots[Math.floor(Math.random() * slots.length)];
  var slot0 = slots[Math.floor(Math.random() * slots.length)];
  
	
    if (slot1 === slot2 && slot1 === slot3 && slot1 === slot4 && slot1 === slot5 && slot1 === slot6 && slot1 === slot7 && slot1 === slot8 && slot1 === slot9 && slot1 === slot0) {
		message.channel.send(stripIndents`
		${slot1} ${slot2} ${slot3} ${slot4} ${slot5} ${slot6} ${slot7} ${slot8} ${slot9} ${slot0}
		SEN RESMEN BİR ${mesaj} AŞIĞISIN ONUN 
		`); 
	} else {
		message.channel.send(stripIndents`
		${slot1} ${slot2} ${slot3} ${slot4} ${slot5} ${slot6} ${slot7} ${slot8} ${slot9} 
		AŞIKSIN AŞKIN HALİNDEN ANLARIM ${mesaj}
		`);	
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'loveğzxüğzüxzxüğzxüğzxxz', 
  description: 'Slots oyunu oynatır',
  usage: 'loveğzxüğzüxzxüğzxüğzxxz'
};