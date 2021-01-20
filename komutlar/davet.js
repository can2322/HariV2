const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=787408903368736778&scope=bot&permissions=805314622) \n [__**Destek Sunucusu**__](https://discord.gg/FAsAZ5nn2T)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};