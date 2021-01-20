const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Hari.")
.setTitle(" Hari Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **-avatar** = Avatarınıza bakarsınız.  \n  **-yetkilerim** = Yetkilerini görürsün.  \n  **-profil** = Profilini görürsün.  \n  **-sunucuresmi** = Sunucu resmini gösterir.  \n  **-ping** = Botun Pingine Bakarsın.  \n  **-id** = Birisinin id'sine Bakarsın. 5084586115153> \n <a:yan:750065080741134407> **-davet** = Beni Sunucuna Ekle. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-botbilgi** = Bot istatistiklerini görürsünüz. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:developeremoji:749525084586115153>")
.setImage("https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=Hari")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}