const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
     if (!message.member.roles.find(r => r.name === "Voice Hammer",))
    return message.reply(`<a:mavitik:774884971432116256>  **Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin.**`);
    let kullanici = message.mentions.members.first()
    
    let süre = args[1]
    if (!süre) return message.reply("<a:mavitik:774884971432116256> **Süre belirtmelisin.**")
    if (!kullanici) return message.channel.send("<a:mavitik:774884971432116256>  **Kimi susturacağını belirtmedin.**")
    kullanici.setMute(true, `**<a:mavitik:774884971432116256>  Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre}ms**`)
        .then(() =>
            message.channel.send(`**<a:mavitik:774884971432116256> ${kullanici} \`${süre}\` ses kanallarında susturuldu.**`))
        .catch(console.error);
        setTimeout(() => {

        kullanici.setMute(false,`**Süresi dolduğu için susturması kaldırıldı.**`)
        message.channel.send(`**<a:mavitik:774884971432116256>  ${kullanici} Süresi dolduğu için mikrafonu açıldı.**`)

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sustur'],
   permLevel: 0
};

exports.help = {
    name: 'sustur',
    description: 'sesli süreli sustur',
    usage: "sustur"
};