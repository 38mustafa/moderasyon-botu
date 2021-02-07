const Discord = require("discord.js"); //modül


exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1)
    return message.reply("Yazmam için herhangi bir şey yazmalısın.");
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true, //false komutu kapatır sadece botun sahibi kullanabilir ayarlar.json'a sahip id yi girmeyi unutmayın
  guildOnly: false, //true olursa komut sadece sunucularda çalışır false olursa komut hem dm hemde sunucularda çalışır
  aliases: ["yazdır"], //alternatifler birden fazla eklenebilir
  permLevel: 0 //bot.js satır 109-110-111-112-113'e göre yetki seviyesi ayarlanır
};

exports.help = {
  name: "yaz", //komutun ana çalıştırma komutu
  description: "İstediğiniz yazıyı bota yazdırı", //komutun açıklaması
  usage: "prefix + yaz [yazdırmak istediğiniz şey]" //kullanım örneği
};
