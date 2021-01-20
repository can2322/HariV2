const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
  if(!args[0]) {
    const Ottoman1 = new Discord.MessageEmbed()
    .setTitle('Çok Fazla ;(')
    .setDescription('Mevcut Ülke Kodları : \n Türkiye : **TR** \n Azerbaycan : **AZ** \n Çin : **CN** \n Amerika : **US**')
    return message.channel.send(Ottoman1)
  }
  let Ottoman2 = args[0].toLowerCase()
  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('azerbaycan', 'AZ')
  
  
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${Ottoman2}`);
    const body = text.body; 
  let ülk = body.countrydata[0].info.title

  const kuruna = new Discord.MessageEmbed()
  .addField('Toplam Bilgilendirme', `

\`Toplam Vaka:\` **${body.countrydata[0].total_cases}**
\`Toplam İyileşen:\` **${body.countrydata[0].total_recovered}**
\`Toplam Kayıp :\` **${body.countrydata[0].total_deaths}**
\`Toplam Enfetke:\` **${body.countrydata[0].total_active_cases}**
`)
  .addField('Bugünkü Vakalar', `
\`Bugünkü Vaka:\` **${body.countrydata[0].total_new_cases_today}**
\`Bugünkü Kayıp:\` **${body.countrydata[0].total_new_deaths_today}**

`)
return message.channel.send(kuruna)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'korona'
};