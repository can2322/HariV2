const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Hari yeniden sizlerle.")
.setTitle("🌙 Hari'nın yardım menüsüne hoşgeldin! 🌙 ")
 .setTimestamp()
.setDescription("🌙 **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n 🌙 **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n 🌙 **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n 🌙 **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://habbofont.net/font/steampunk/Hari.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'h!yardım'
}