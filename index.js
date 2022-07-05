//aaa
const Discord = require('discord.js');
const { MessageEmbed, Collection, SlashCommandBuilder, Formatters } = require('discord.js');
require('@discordjs/voice');
const ClientSettings = require('./ClientSettings.json');
var ffmpeg = require('ffmpeg');
require('ffmpeg-static');
const moment = require('moment');
// const data = new SlashCommandBuilder();
const fs = require('fs');
const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_PRESENCES
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
  // setInterval(function () {
  //   let status = [
  //     `Il y a ${Client.guilds.cache
  //       .map((g) => g.memberCount)
  //       .reduce((a, b) => a + b)} utilisateurs`,
  //     'vos messages 😊',
  //   ];

  //   let rstatus = Math.floor(Math.random() * status.length);

  //   Client.user.setActivity(status[rstatus], { type: 'WATCHING' });
  // }, 10000);

  setInterval(function () {
    let status = ['En dev ...', '⚠️ PAS FAIRE DE CMD'];

  // setInterval(function () {
  //   let status = [/*'En Pause ...', */'Rien'];

    let rstatus = Math.floor(Math.random() * status.length);

    Client.user.setActivity(status[rstatus], /*{ type: 'STREAMING' });*/{ type: 'PLAYING' });/*{ type: 'WATCHING' });*/
  }, 10000);

  Client.user.setStatus('dnd')
  //Client.user.setStatus('idle')
  //statue
});


//MESSAGE D'ARRIVÉ
Client.on("guildMemberAdd", member => {

  const ARREmbed = new MessageEmbed()
    .setColor('#000000')
    .setTitle(`Bienvenue ${member.user.tag} sur **The Dev House** !`)
    .setDescription(`Voici quelques information supplémentaires sur <@${member.user.id}> :`)
    .addField('😊 Tag du compte:', `${member.user.tag}`, true)
    .addField(':id: ID du compte:', `${member.user.id}`, true)
    .addField(':clock: Création du compte:', `Le ${moment.utc(member.user.createdAt).format('DD/MM/YYYY à HH:mm')} <t:${parseInt(member.user.createdAt / 1000)}:R>`, true)
    .addField('🤖 Robot :', `${member.user.bot ? 'Oui' : 'Non'}`, true)
    .addField('Avatar :', `ㅤ`, false)
    .setImage(member.user.displayAvatarURL({ dynamic: true }), false);

  member.guild.channels.cache.find(channel => channel.id === "985155904422965358").send({ embeds: [ARREmbed] });
});
//MESSAGE D'ARRIVÉ
//MESSAGE DE DÉPART
Client.on("guildMemberRemove", member => {
  member.guild.channels.cache.find(channel => channel.id === "985155904422965358").send("Hooooo nonnnnn ! " + "<@" + member.id + ">" + " vient de nous quitter 😥");
});
//MESSAGE DE DÉPART


Client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/g).slice(1);

  /*
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
  */

  /*
  // "help"
  // else if (message.content === prefix + 'help') {
  //   message.react('✅');
  //   const exampleEmbed = new MessageEmbed()
  //     .setColor('#0000ff')
  //     .setTitle("Tu as besoin d'aide ?")
  //     //.setAuthor({ name: 'Avatar', iconURL: "./assets/images/botavatar.png" })
  //     .setDescription('Voici zlx-bot développé par <@762555226107543583> ! \n')
  //     .addFields(
  //       {
  //         name: '\n Nos commandes :',
  //         value:
  //           'Voici toutes les commandes que vous pouvez être amené a faire :',
  //       },
  //       { name: '\u200B', value: '\u200B' },
  //       {
  //         name: '**__zlx.zuulaxx__** ou **__zlx.zlx__** :',
  //         value: 'Donne des info sur zuulaxx^^',
  //         inline: true,
  //       },
  //       {
  //         name: '**__zlx.hello__** :',
  //         value: 'Tu reçois un mp 🎉',
  //         inline: true,
  //       },
  //       {
  //         name: '**__zlx.info (@user)__** :',
  //         value: 'Tu reçois des infos sur toi ou sur (@user)',
  //         inline: true,
  //       },
  //       {
  //         name: '**__zlx.play, zlx.stop, zlx.replay__** :',
  //         value: 'Joue ▶, arête ⏹️ ou recommence 🔁 une musique',
  //         inline: true,
  //       },
  //       {
  //         name: '**__zlx.bee__** :',
  //         value: "Envoie une image d'abeilles random",
  //         inline: true,
  //       },
  //       {
  //         name: '**__zlx.stats__** :',
  //         value: 'Donne des statistiques sur zlx-bot',
  //         inline: true,
  //       },
  //       { name: '\u200B', value: '\u200B' }
  //     )
  //     .addField(
  //       "**__Nombres d'utilisateurs :__**",
  //       `**${Client.guilds.cache
  //         .map((g) => g.memberCount)
  //         .reduce((a, b) => a + b)}**`,
  //       true
  //     )
  //     .setTimestamp()
  //     .setFooter({
  //       text: `${message.author.tag} a demandé de l'aide !`,
  //     });
  //   message.channel.send({ embeds: [exampleEmbed] }).catch(),
  //     console.log('\n The **help** command has been sent 😄 '),
  //     console.log('by', message.author.tag, '\n'),
  //     console.log('le', fullDate);
  // }
  // "help"

  if (message.content === prefix + 'stats') {
    const statsEmbed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Voici les stats du bot !')
      .setDescription('zlx-bot a été développé par <@762555226107543583>')
      .addFields(
        {
          name: 'Nos stats :',
          value: 'Voici tout les stats que vous pouvez connaitre :',
        },
        //{ name: '\u200B', value: '\u200B' },
        {
          name: "Nombres d'utilisateurs 👨‍💻 :",
          value: `${Client.guilds.cache
            .map((g) => g.memberCount)
            .reduce((a, b) => a + b)}`,
          inline: true,
        },
        //{ name: '\u200B', value: '\u200B', inline: true },
        {
          name: 'Nombres de serveures 📋 :',
          value: `${Client.guilds.cache.size.toString()}`,
          inline: true,
        },
        //{ name: '\u200B', value: '\u200B', inline: true },
        {
          name: '**__Voici le ping du bot :__ 🏓**',
          value: `Chargement... 🚶‍♂️🚶🚶‍♂️ \n\n || 🏓 Latency is ${Date.now() - message.createdTimestamp
            }ms \n API Latency is ${Math.round(Client.ws.ping)}ms ||`,
          inline: false,
        },
        //{ name: '\u200B', value: '\u200B' },
        {
          name: 'Bot démarré le 🕰️ :',
          value: `<t:${parseInt(Client.readyTimestamp / 1000)}:R>`,
          inline: false,
        },
        //{ name: '\u200B', value: '\u200B' },
        {
          name: 'Langue :flag_fr:',
          value: '```Le bot est Français```',
          inline: false,
        },
        //{ name: '\u200B', value: '\u200B' },
        {
          name: 'Créateur du bot (▀̿Ĺ̯▀̿ ̿) :',
          value: `<@762555226107543583>`,
          inline: false,
        }
        //{ name: '\u200B', value: '\u200B' }
      )
      .addField(
        '**__Des questions ?__**',
        `**Demmande à <@762555226107543583>**`,
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
*/
  //git
  // if (message.content === prefix + 'git') {
  //   const gitEmbed = new MessageEmbed()
  //     .setColor('#3160FF')
  //     .setTitle('Le repository github du bot !')
  //     .addFields(
  //       { name: 'Voici tout ce que vous pouvez avoir besion sur le bot', value: '(Le plagiat est interdit)\u200B' },
  //       //{ name: '\u200B', value: '\u200B' },
  //       {
  //         name: "Lien 👨‍💻 :",
  //         value: ('[Source de zlx-bot](https://github.com/zuulaxx/zlx-bot)'),
  //         inline: false,
  //       },
  //     )
  //     .setTimestamp()
  //     .setFooter({
  //       text: `${message.author.tag} a demandé le github !`,
  //     });
  //   message.channel.send({ embeds: [gitEmbed] }).catch(),
  //     console.log('\n The **git** command has been sent 😄 '),
  //     console.log('by', message.author.tag, '\n'),
  //     console.log('le', fullDate);
  // }

  // TODO : Vérifier
  if (
    message.content.toLowerCase().includes('slt') ||
    message.content.toLowerCase().includes('bonjour') ||
    message.content.toLowerCase().includes('yo') ||
    message.content.toLowerCase().includes('salut') ||
    message.content.toLowerCase().includes('bjr') ||
    message.content.toLowerCase().includes('bonsoir') ||
    message.content.toLowerCase().includes('coucou') ||
    message.content.toLowerCase().includes('hey')
  ) {
    message.channel.send(`Bonjour ${message.author.username}`);
  }
  /*****************************************
   ******* BEGINNING OF INFO COMMAND *******
   *****************************************/
  /*
  let user;

  if (message.content.startsWith(prefix + 'info')) {
    message.channel.send('Chargement... 🚶‍♂️🚶🚶‍♂️').then((newMessage) => {
      newMessage.edit('10');
      newMessage.edit('9');
      newMessage.edit('8');
      newMessage.edit('7');
      newMessage.edit('6');
      newMessage.edit('5');
      newMessage.edit('4');
      newMessage.edit('3');
      newMessage.edit('2');
      newMessage.edit('1');
      newMessage.edit('0');
      newMessage.edit('⬇️⬇️⬇️');
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
        ':clock: Création du compte:',
        `Le ${moment
          .utc(user.createdAt)
          .format('DD/MM/YYYY à HH:mm')} <t:${parseInt(
            user.createdAt / 1000
          )}:R>`,
        true
      )
      //.addField('Nombre de serveur:', `${user.guilds.cache.size.toString()}`, true)
      //verif : avatar format
      .addField('Avatar :', `ㅤ`, false)
      .setImage(user.displayAvatarURL({ format: 'png' }), false);

    message.channel.send({ embeds: [MeEmbed] }).catch(),
      console.log('\n The **info** command has been sent 😄 '),
      console.log('by', message.author.tag, '\n'),
      console.log('le', fullDate);
  }
  */
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
  /*
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
    }*/
  //"bee"

  /*
  //"Say"
  if (message.content.startsWith('zlx.say')) {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
      console.log('2');
      return message.channel.send(
        "🚫 | Vous n'avez pas les permissions d'utiliser ceci. `MANAGE_MESSAGES`"
      );
    }
    if (
      message.content.includes('@everyone') ||
      message.content.includes('@here')
    ) {
      console.log('3');
      return message.channel.send(
        '🚫 | Merci de ne pas mentionner here/everyone.'
      );
    }
    const sayMessage = args.join(' ');
    if (!sayMessage) {
      console.log('4');
      return message.channel.send(
        "🚫 | Merci d'entrer un message à envoyer à votre place. "
      );
    }
    message.delete();

    message.channel.send(sayMessage);
    console.log(
      `\n The **say** command has been sent 😄 by ${message.author.tag} le ${fullDate}`
    );
  }
  */
  //"Say"

  /*  
      if (message.content === prefix + '1') {
        message.delete();
        const AIDEEmbed = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle("Bienvenue sur The Dev House")
          .setDescription("\u200BCréation du serveur : <t:1654889201>\u200B")
          .addField("Nous vous demandons de bien respecter les règles ci-dessous", "Vous devez évidement réspécter aussi les TOS de discord (https://discord.com/tos)", false)
          .addField('\u200B', "\u200B", true)
          .addField("I – Comportement", "     -Restez courtois, poli. Vous pouvez être familier, nous ne vous demandons pas d’écrire comme Molière... Mais n'en abusez pas.\n\n     -Pas de violence verbale gratuite. Vous pouvez taquiner gentiment sans aller dans l’extrême. Si cela reste dans la bonne humeur et le second degré nous le tolérons. Si le staff estime que cela ne respecte plus la règle, vous risquez un kick ou un ban en fonction de l’humeur de la personne qui s'occupe de votre cas.", false)
          .addField('\u200B', "\u200B", true)
          .addField("II – Chat écrit/vocal", "     -Pas de spam, sous peine de bannissement.\n\n     -Pas de pub sur les différents chats, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte. Sauf dérogation via un ticket.", false)
          .addField('\u200B', "\u200B", true)
          .addField("III – Profil/Pseudo", "     -Ne doit pas être ressemblant/confondu avec celui d’un membre du staff, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.\n\n     -Ne doit pas contenir de propos racistes, homophobes, sexistes … (genre la photo de profil Hi**er on s’en passera) sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.\n\n     -Ne doit pas avoir de caractère pornographique, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.", false)
          .addField('\u200B', "\u200B", true)
          .addField("IV - Contacter le staff", "     -Si pour une quelconque raison, vous voulez contacter un membre du staff (modo ou admin), faite un ticket\n\n     -Si vous voulez entrer dans l’équipe de modération, faite un :mailbox:・ticket vous passerez un genre d’entretien afin de voir vos motivations et vos idées pour améliorer le serveur. Ne stressez pas non plus, si vous êtes légitime ça se passera bien ;). C’est histoire de voir à qui donner le rôle de modo et d’apprendre à le/la connaître. La décision vous sera donnée ultérieurement par réponse au ticket.", false)
          .addField('\u200B', "\u200B", true)
          .addField('Ces règles peuvent être soumises à des évolutions au cours du temps.', " Vous avez ici la base du règlement !!!\nMerci de le réspecter 😁 ", false)
    
        message.channel.send({ embeds: [AIDEEmbed] }).catch()
      }
    
      if (message.content === prefix + '2') { 
        message.delete(); 
        message.channel.send("@everyone"); 
      }
*/

  //   Slash,test
  //   const data = new SlashCommandBuilder()
  //     .setName('help')
  //     .setDescription("Renvoie de l'aide");

  // //Client.application.commands.create(data), console.log('application (/) commands *Ready*');
  // //Client.guilds.cache.get('986698834853892106').commands.create(data), console.log('application (/) commands *Ready*');

  //   Client.on('interactionCreate', (interaction) => {
  //     if (interaction.isCommand()) {
  //       if (interaction.commandName === 'help') {
  //         message = interaction.reply({ embeds: [exampleEmbed] });
  //       }
  //     }
  //   });
  //   Slash,test

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

/*
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
}); */
//"Voice-Play"

//Handler info
let SlashCommands = [];
let Events = [];
let Commands = [];

//Slash Command Handler
const SlashCommandFiles = fs.readdirSync("./slash").filter(fl => fl.endsWith(".js"));
Client.commands = new Collection();

SlashCommandFiles.forEach(async file => {
  const command = require(`./slash/${file}`)
  SlashCommands.push(command.help.name)
  Client.commands.set(command.help.name, command)
})

Client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand() && !interaction.isMessageContextMenu() && !interaction.isContextMenu() && !interaction.isUserContextMenu()) return
  //const authorPerms = interaction.channel.permissionsFor(interaction.member)

  const command = Client.commands.get(interaction.commandName);

  if (!command) return;

  if (command.help.enable !== true) return interaction.reply({ content: 'command.disabled', ephemeral: true })
  //if (!authorPerms.has(command.help.permission)) return interaction.reply({ content: 'command.notEnoughPermission', ephemeral: true })

  try {
    await command.execute(interaction, Client);
  } catch (error) {
    console.log(error)

    const embed = new MessageEmbed()
      .setTitle('error.unexpected')
      .setColor('RED')
      .setDescription('```' + error + '```')

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
});

//Commands handler
const CommandFiles = fs.readdirSync("./commands").filter(fl => fl.endsWith(".js"));
CommandFiles.forEach((f, i) => {
  let props = require(`./commands/${f}`)
  Client.commands.set(props?.help?.name, props)
  Commands.push(props?.help?.name)
})

Client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const authorPerms = message.channel.permissionsFor(message.author)
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let cmd = Client.commands.get(command)
  if (cmd) {
    message.delete();
    let notEnoughPermission = new MessageEmbed().setTitle("Pas assez de permission").setColor("RED")
    let unexpectedError = new MessageEmbed().setTitle("erreur non attendu").setColor("RED")
    let commandDisabled = new MessageEmbed().setTitle("Commande desactiver").setColor("RED")

    if (!authorPerms.has(cmd.help.permission)) return message.channel.send({ embeds: [notEnoughPermission] })
    if (cmd.help.name !== command) return message.channel.send({ embeds: [unexpectedError] })
    if (cmd.help.enable === false) return message.channel.send({ embeds: [commandDisabled] })
    cmd.execute(Client, message, args, connection, subscription, exitVocal)
  } else if (message.content.startsWith(prefix)) {
    message.delete();
    message.channel.send({ content: "Commande introuvable" });
  }
})

Client.login(ClientSettings.token);
console.log('\n Bot opérationnel');
