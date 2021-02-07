const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\


//
client.on('message', message => {
let tag = message.content.toLowerCase()

if(tag === '!tag') {
message.channel.send(`ꧪ`)
}
})

client.on('message', message => {
let tag = message.content.toLowerCase()

if(tag === '.tag') {
message.channel.send(`ꧪ`)
}
})

client.on('message', message => {
let tag = message.content.toLowerCase()

if(tag === '-tag') {
message.channel.send(`ꧪ`)
}
})

client.on('message', message => {
let tag = message.content.toLowerCase()

if(tag === 'tag') {
message.channel.send(`ꧪ`)
}
})

/////////////////////SA-AS Komutu/////////////////////////

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("**Aleyküm Selam Hoşgeldin**");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply("**Aleyküm Selam Hoşgeldin**");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "bb") {
    msg.reply("Görüşürüz Kardeşim");
  }
  if (msg.content === "Selamun Aleyküm") {
    msg.reply("ve aleyküm selam");
  }

  if (msg.content === "bye bye") {
    msg.reply("**Su Gibi Git Su Gibi Gel**");
  }

  if (msg.content === "günaydın") {
    msg.reply("**Sana da Günaydın**");
  }

  if (msg.content === "31") {
    msg.reply("**çok mu komik top**");
  }

  if (msg.content === "iyi geceler") {
    msg.reply("**Sanada İyi Geceler**");
  }

  if (msg.content === "iyi akşamlar") {
    msg.reply("**Sanada İyi Akşamlar**");
  }

  if (msg.content === "selamın aleyküm") {
    msg.reply("**Ve Aleyküm Selam**");
  }

  if (msg.content === "güle güle") {
    msg.reply("Sana Da Güle Güle");
  }

});


///////////////////BOTU ODAYA SOKMA///////////////////////////////////

client.on("ready", () => {
  client.channels.get("781823837830119424").join();
});



////////////OTO TAG/////////////
client.on('guildMemberAdd', (member) => {
var tag = "ꧪ İsim | Yaş"//Tagınız
member.setNickname(`${tag}`)
}); 



//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("774866229352595497") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.get("774866242325839916") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.addRole(rol)
   member.removeRole(kayıtsız)
member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
setTimeout(() => {

}, 1000)


   }
        else {

        }
    });

//-----------------------ŞÜPHELİ-HESAP----------------------\\    
