const Discord = require('discord.js');
require('@discordjs/voice');
const ClientSettings = require('./ClientSettings.json');
var ffmpeg = require('ffmpeg');
require('ffmpeg-static');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

// le prefix : "zlx."
const prefix = ClientSettings.prefix;

// constantes pour les assets
const path = require('path');
const assetPath = './assets';
function getPath(key) {
  return path.join(assetPath, key);
}

//date
var d = new Date();
var date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
var hours =
  d.getHours() + 'h ' + d.getMinutes() + 'min et ' + d.getSeconds() + 'sec';
var fullDate = date + ' à ' + hours;
//date

Client.on('ready', async () => {
  console.log('\nHello, world!\n');
  console.log(`Je suis ${Client.user.tag}\n`);
  console.log(`Démarage le ${fullDate}`);

  //statue
  setInterval(function () {
    let status = [
      `Il y a ${Client.guilds.cache
        .map((g) => g.memberCount)
        .reduce((a, b) => a + b)} utilisateurs`,
      'vos messages 😊',
    ];
    let rstatus = Math.floor(Math.random() * status.length);

    Client.user.setActivity(status[rstatus], { type: 'WATCHING' });
  }, 10000);
});
//statue

Client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/g).slice(1);

  // "Les MP"
  if (message.content === prefix + 'hello') {
    message.author.createDM().then((channel) => {
      channel.send('***__Merci__*** pour la commande !');
    });
  }
  if (message.content === prefix + 'hello') {
    message.reply({ content: 'Regarde tes mp ...', ephemeral: true }),
      console.log('\n The **hello** command has been sent 😄 '),
      console.log('by', message.author.tag, '\n'),
      console.log('le', fullDate);
  }
  // "Les MP"

  // "zuulaxx ou zlx"
  if (message.content === prefix + 'zlx') {
    message.reply('**__Le site web de zuulaxx : https://zuulaxx.ml/__**'),
      console.log('\n The **zuulaxx/zlx** command has been sent 😄 '),
      console.log('by', message.author.tag, '\n'),
      console.log('le', fullDate);
  }
  // "zuulaxx ou zlx"
  if (message.content === prefix + 'zuulaxx') {
    message.reply('**__Le site web de zuulaxx : https://zuulaxx.ml/__**'),
      console.log('\n The **zuulaxx/zlx** command has been sent 😄 '),
      console.log('by', message.author.tag, '\n'),
      console.log('le', fullDate);
  }


  //"aide"
  else if (message.content === prefix + 'aide') {
    message.react('✅');
    const exampleEmbed = new MessageEmbed()
      .setColor('#0000ff')
      .setTitle("Tu as besoin d'aide ?")
      //.setAuthor({ name: 'Avatar', iconURL: "./assets/images/botavatar.png" })
      .setDescription(
        'Voici zlx-bot développé par <@974578596704321576> ! \n'
      )
      .addFields(
        {
          name: '\n Nos commandes :',
          value:
            'Voici toutes les commandes que vous pouvez être amené a faire :',
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: '**__zlx.zuulaxx__** ou **__zlx.zlx__** :',
          value: 'Donne des info ^^',
          inline: true,
        },
        {
          name: '**__zlx.hello__** :',
          value: 'Tu reçois un mp 🎉',
          inline: true,
        },
        {
          name: '**__zlx.info (@user)__** :',
          value: 'Tu reçois des infos sur toi ou sur (@user)',
          inline: true,
        },
        {
          name: '**__zlx.play, zlx.stop, zlx.replay__** :',
          value: 'Joue ▶, arête ⏹️ ou recommence 🔁 une musique',
          inline: true,
        },
        {
          name: '**__zlx.bee/zlx.cat__** :',
          value: "Envoie une image de chats ou d'abeilles random",
          inline: true,
        },
        {
          name: '**__zlx.stats__** :',
          value: 'Donne des statistiques sur zlx-bot',
          inline: true,
        },
        { name: '\u200B', value: '\u200B' }
      )
      .addField(
        "**__Nombres d'utilisateurs :__**",
        `**${Client.guilds.cache
          .map((g) => g.memberCount)
          .reduce((a, b) => a + b)}**`,
        true
      )
      .setTimestamp()
      .setFooter({
        text: `${message.author.tag} a demandé de l'aide !`,
      });
    message.channel.send({ embeds: [exampleEmbed] }).catch(),
      console.log('\n The **aide** command has been sent 😄 '),
      console.log('by', message.author.tag, '\n'),
      console.log('le', fullDate);
  }


  if (message.content === prefix + 'stats') {
    const statsEmbed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Voici les stats du bot !')
      .setDescription(
        'zlx-bot a été développé par <@974578596704321576>'
      )
      .addFields(
        {
          name: 'Nos stats :',
          value: 'Voici tout les stats que vous pouvez connaitre :',
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: "Nombres d'utilisateurs 👨‍💻 :",
          value: `${Client.guilds.cache
            .map((g) => g.memberCount)
            .reduce((a, b) => a + b)}`,
          inline: true,
        },
        { name: '\u200B', value: '\u200B', inline: true },
        {
          name: 'Nombres de serveures 📋 :',
          value: `${Client.guilds.cache.size.toString()}`,
          inline: true,
        },
        { name: '\u200B', value: '\u200B', inline: true },
        {
          name: '**__Voici le ping du bot :__ 🏓**',
          value: `Chargement... 🚶‍♂️🚶🚶‍♂️ \n\n || 🏓 Latency is ${Date.now() - message.createdTimestamp
            }ms \n API Latency is ${Math.round(Client.ws.ping)}ms ||`,
          inline: false,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Nous sommes le 🕰️ :',
          value: `La date du jour : ${fullDate} !`,
          inline: false,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Langue :flag_fr:',
          value: '```Le bot est Français ```',
          inline: false,
        },
        { name: '\u200B', value: '\u200B' },
        {
          name: 'Créateur du bot (▀̿Ĺ̯▀̿ ̿) :',
          value: `<@974578596704321576>`,
          inline: false,
        },
        { name: '\u200B', value: '\u200B' }
      )
      .addField(
        '**__Des questions ?__**',
        `**Demmande à <@974578596704321576>**`,
        true
      )
      .setTimestamp()
      .setFooter({
        text: `${message.author.tag} a demandé nos stats !`,
      });
    message.channel.send({ embeds: [statsEmbed] }).catch(),
      console.log('\n The **stats** command has been sent 😄 '),
      console.log('by', message.author.tag, '\n'),
      console.log('le', fullDate);
  }

  // TODO : Vérifier
  if (
    message.content.includes('slt') ||
    message.content.includes('bonjour') ||
    message.content.includes('yo') ||
    message.content.includes('salut') ||
    message.content.includes('bjr') ||
    message.content.includes('cc') ||
    message.content.includes('bonsoir') ||
    message.content.includes('coucou') ||
    message.content.includes('hey') ||
    message.content.includes('Slt') ||
    message.content.includes('Bonjour') ||
    message.content.includes('Yo') ||
    message.content.includes('Salut') ||
    message.content.includes('Bjr') ||
    message.content.includes('Cc') ||
    message.content.includes('Bonsoir') ||
    message.content.includes('Coucou') ||
    message.content.includes('Hey')
  ) {
    message.channel.send(`Bonjour ${message.author.username}`);
  }

  // "on"
  else if (message.content === prefix + 'on') {
    message.channel.send('```Démarage du programme```');
  }
  // "off"
  else if (message.content === prefix + 'off') {
    message.channel.send('```Arrêt du programme```');
  }
  // "restart"
  else if (message.content === prefix + 'restart') {
    message.channel.send('```Redémarage du programme```');
  }
  /*****************************************
   ******* BEGINNING OF INFO COMMAND *******
   *****************************************/
  const moment = require('moment');
  let user;

  if (message.content.startsWith(prefix + 'info')) {
    message.channel.send('Chargement... 🚶‍♂️🚶🚶‍♂️').then((newMessage) => {
      newMessage.edit('10'); newMessage.edit('9'); newMessage.edit('8'); newMessage.edit('7'); newMessage.edit('6'); newMessage.edit('5'); newMessage.edit('4'); newMessage.edit('3'); newMessage.edit('2'); newMessage.edit('1');
    });
  }

  if (message.content.startsWith(prefix + 'info')) {
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }

    const MeEmbed = new MessageEmbed()
      .setColor('#ff00fa')
      .setTitle(`Information sur ${user.username}#${user.discriminator} :`)
      .addField('😊 Tag du compte:', `${user.tag}`, true)
      .addField(':id: ID du compte:', `${user.id}`, true)
      .addField(
        ':clock: Création du compte :',
        `Le ${moment.utc(user.createdAt).format('DD/MM/YYYY à HH:mm:ss')}`,
        true
      )
      //verif : avatar format
      .addField('Avatar :', `ㅤ`, false)
      .setImage(user.displayAvatarURL({ format: 'png' }), false);

    message.channel.send({ embeds: [MeEmbed] }).catch(),
      console.log('\n The **info** command has been sent 😄 '),
      console.log('by', message.author.tag, '\n'),
      console.log('le', fullDate);
  }
  /*****************************************
   ********** END OF INFO COMMAND **********
   *****************************************/

  //"clear"

  //module.exports.run = async (bot, message, args) => {

  //if (message.content.startsWith("zlx.clear")) {
  //message.delete();
  //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Tu n'as pas la permission...`);
  //if (!args[0]) return message.channel.send("Tu dois spécifier un nombre de messages à supprimer !");
  //message.channel.bulkDelete(args[0]).then(() => {
  //message.channel.send(`À ton service! (${args[0]}) `).then(msg => msg.delete(5000));

  //})
  //}
  //}

  //"bee"

  const bee = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ];

  function rdmm() {
    return bee[Math.floor(Math.random() * bee.length)];
  }

  if (message.content === prefix + 'bee') {
    const promise = fs.promises.readFile(
      getPath(`images/animals-img/${rdmm()}`)
    ); //this image exists
    message.react('🐝'),
      Promise.resolve(promise)
        .then(function (buffer) {
          const exampleEmbed = new MessageEmbed()
            .setColor('#ffff00')
            .setTitle('Qui a invoqué(e) une abeille :bee: ?')
            .setFooter({
              text: `${message.author.tag} a invoqué(e) byzzbyzzzz l'abeille 🐝`,
            });
          message.channel
            .send({
              embeds: [exampleEmbed],
              files: [{ attachment: buffer }],
            })
            .catch(),
            console.log(
              '\n',
              message.author.tag,
              'a invoqué(e) une **abeille**'
            ),
            console.log('le', fullDate);
        })
        .catch();
  }
  //"bee"

  //"Say"
  //if (message.content.startsWith("zlx.say")) {
  //if (!message.member.hasPermission('MANAGE_MESSAGES'))
  //return message.channel.send(
  //"🚫 | Vous n'avez pas les permissions d'utiliser ceci. `MANAGE_MESSAGES`"
  //);
  //if (
  //message.content.includes('@everyone') ||
  //message.content.includes('@here')
  //)
  //return message.channel.send(
  //'🚫 | Merci de ne pas mentionner here/everyone.'
  //);

  //const sayMessage = args.join(' ');
  //if (!sayMessage)
  //return message.channel.send(
  //"🚫 | Merci d'entrer un message à envoyer à votre place. "
  //);
  //message.delete();

  //message.channel.send(sayMessage);
  //console.log(
  //`\n The **say** command has been sent 😄 by ${message.author.tag} le ${fullDate}`
  //);
  //}
  //"Say"

  if (message.content === prefix + '1') {
    message.delete();
    message.channel.send("salut lol")
  }

});

  //"Voice-Play"
  const {
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
    VoiceConnectionStatus,
    VoiceConnectionDisconnectReason,
  } = require('@discordjs/voice');
  const { time } = require('@discordjs/builders');
  //const { NOTFOUND } = require("dns");
  //const { time } = require("console");
  //const { Server } = require("http");
  const player = createAudioPlayer();
  player.play(createAudioResource(getPath('audio/audio.mp3')));

  var connection, subscription;
  function exitVocal() {
    if (connection != null) connection.destroy();
    if (subscription != null) subscription.unsubscribe();
  }

  Client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/g).slice(1);

    if (message.content === prefix + 'play') {
      connection = joinVoiceChannel({
        channelId: message.member.voice.channelId,
        guildId: message.member.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      });

      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel)
        return message.channel.send(
          '❌ | Merci de rejoindre un salon vocal !',
          message.react('🚫'),
          console.log(
            message.author.tag,
            'à **essayé** de jouer de la **musique**'
          )
        );

      connection.on(VoiceConnectionStatus.Ready, () => {
        //console.log("Ready to play audio!");
      });
      (subscription = connection.subscribe(player)), message.react('▶️');
      console.log('\n', message.author.tag, 'a utilisé **play** **musique** \n');
    }

    if (message.content === prefix + 'stop') {
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel)
        return message.channel.send(
          '❌ | Merci de rejoindre un salon vocal !',
          message.react('🚫'),
          console.log(
            message.author.tag,
            'à **essayé** de jouer de la **musique**'
          )
        );
      message.react('⏹️');
      connection = exitVocal({ VoiceConnectionDisconnectReason });
      console.log('\n', message.author.tag, 'a utilisé **stop** **musique** \n');
    }

    if (message.content === prefix + 'replay') {
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel)
        return message.channel.send(
          '❌ | Merci de rejoindre un salon vocal !',
          message.react('🚫'),
          console.log(
            message.author.tag,
            'à **essayé** de jouer de la **musique**'
          )
        );
      message.react('🔁');
      connection = exitVocal({ VoiceConnectionDisconnectReason });

      connection = joinVoiceChannel({
        channelId: message.member.voice.channelId,
        guildId: message.member.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      });

      connection.on(VoiceConnectionStatus.Ready, () => {
        //console.log("Ready to play audio!");
      });
      subscription = connection.subscribe(player);

      console.log(
        '\n',
        message.author.tag,
        'a utilisé **replay** **musique** \n'
      );
    }
  });
  //"Voice-Play"

  Client.login(ClientSettings.token);
  console.log('\n Bot opérationnel');
