
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  if(!message.member.roles.has(`774866223317909505`) && !message.member.hasPermission('ADMINISTRATOR')) {
  let paradox = new Discord.RichEmbed()
  .setColor('RED')
  .setDescription(`Bu Komutu Kullana Bilmen İçin Kick Hammer Rolü Alman Lazım.
`) 
return message.channel.send(paradox)
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**❌ Bu Komutu Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
 let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('**⚠ Kimi Atmak İstediğini Yazmalısın!**').catch(console.error);

      message.guild.kick(user)
  const devtr = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
  .setTitle('✅  ' +  message.author.username + ' İşlem Başarılı Kullanıcı Sunucudan Atıldı!' )
  .setImage(`https://cdn.discordapp.com/attachments/619325209727729680/654049708381175830/tenor.gif`)
  return message.channel.sendEmbed(devtr)
};
}      
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["at"],
  permLevel: 0
}; //DevTR

exports.help = {
  name: 'kick',
  description: 'Seçilen kişiyi banlar',
  usage: 'kick '
};