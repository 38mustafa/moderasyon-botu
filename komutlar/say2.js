const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if (!message.member.roles.has("ROLID") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "SUNUCUID";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
   '0': `<a:k0:774884171248173086>`,
    '1': `<a:k1:774884168315174942>`,
    '2': `<a:k2:774884170211524619>`,
    '3': `<a:k3:774884170601725992>`,
    '4': `<a:k4:774884170056204309>`,                       
    '5': `<a:k5:774884170618503168>`,
    '6': `<a:k6:774884170534223883>`,
    '7': `<a:k7:774884168240201738>`,
    '8': `<a:k8:774884170761240597>`,
    '9': `<a:k9:774884170521640990>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:k0:774884171248173086>`,
    '1': `<a:k1:774884168315174942>`,
    '2': `<a:k2:774884170211524619>`,
    '3': `<a:k3:774884170601725992>`,
    '4': `<a:k4:774884170056204309>`,                       
    '5': `<a:k5:774884170618503168>`,
    '6': `<a:k6:774884170534223883>`,
    '7': `<a:k7:774884168240201738>`,
    '8': `<a:k8:774884170761240597>`,
    '9': `<a:k9:774884170521640990>`}[d];
      })
    }
  
 
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "ꧪ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
   '0': `<a:k0:774884171248173086>`,
    '1': `<a:k1:774884168315174942>`,
    '2': `<a:k2:774884170211524619>`,
    '3': `<a:k3:774884170601725992>`,
    '4': `<a:k4:774884170056204309>`,                       
    '5': `<a:k5:774884170618503168>`,
    '6': `<a:k6:774884170534223883>`,
    '7': `<a:k7:774884168240201738>`,
    '8': `<a:k8:774884170761240597>`,
    '9': `<a:k9:774884170521640990>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:k0:774884171248173086>`,
    '1': `<a:k1:774884168315174942>`,
    '2': `<a:k2:774884170211524619>`,
    '3': `<a:k3:774884170601725992>`,
    '4': `<a:k4:774884170056204309>`,                       
    '5': `<a:k5:774884170618503168>`,
    '6': `<a:k6:774884170534223883>`,
    '7': `<a:k7:774884168240201738>`,
    '8': `<a:k8:774884170761240597>`,
    '9': `<a:k9:774884170521640990>`}[d];
      })
    }
  
let emoji1 = `<a:tehlikeli:774974443230593047>`;
 const embed1 = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor('SAY')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("KANALID9"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}