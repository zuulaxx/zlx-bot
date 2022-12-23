const Discord = require('discord.js');
const ClientSettings = require('./ClientSettings.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

// le prefix : "zlx."
//const prefix = ClientSettings.prefix;
const prefix = ClientSettings.prefix;
//

const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Connaître toutes les commandes 😎');

const data1 = new SlashCommandBuilder()
  .setName('boost')
  .setDescription("Envoie un mp d'encouragement de ta part à zuulaxx ❤😊");

const data2 = new SlashCommandBuilder()
  .setName('bee')
  .setDescription("Voici l'emblème de mon bot : 🐝");

Client.on('ready', async () => {
  // Client.application.commands.set([]), console.log("Commandes supprimées !"); //(supprimer les / commandes)

  // Client.guilds.cache.get("986698834853892106").commands.cache.map(command => {command.delete();}), console.log("Commandes supprimées !");

  // await Client.guilds.cache.get("984901437186248714").commands.fetch(), console.log("Commandes rechargées !"); //(recharge les / commandes d'un serveur)

  Client.application.commands.create(data),
    console.log('Commandes chargées ! (0)');
  Client.application.commands.create(data1),
    console.log('Commandes chargées ! (1)');
  Client.application.commands.create(data2),
    console.log('Commandes chargées ! (2)');

  // Client.guilds.cache.get('984901437186248714').commands.create(data), console.log('Commandes chargées ! (0)');
  // Client.guilds.cache.get('984901437186248714').commands.create(data1), console.log('Commandes chargées ! (1)');
  // Client.guilds.cache.get('984901437186248714').commands.create(data2), console.log('Commandes chargées ! (2)');

  console.log('Bot On 😎');
});

Client.on('interactionCreate', (interaction) => {
  if (interaction.isCommand()) {
    if (interaction.commandName === 'help') {
      interaction.reply(
        'Nos commanndes sont : \n- /boost \n- zlx.say ton-message**'
      ),
        console.log('The help command was used successfully');
    }
    if (interaction.commandName === 'boost') {
      interaction.reply(
        `Le mp vient d'être envoyé. Merci de ton soutien **__${interaction.user.tag}__** ! 😊`
      );
      interaction.guild.members
        .fetch('762555226107543583')
        .then((member) =>
          member.send(`**__${interaction.user.tag}__** t'envoie du courage ❤️`)
        ),
        console.log('The boost command was used successfully');
    }

    const BeeEmbed = new MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Bee ! 🐝')
	// .setURL('https://discord.js.org/')
	// .setAuthor({ name: 'Some name', iconURL: '/public/img/Bee.jpeg'})
	.setDescription('The Bee embed ! 🐝')
	//.setThumbnail('/public/img/Bee.jpeg')
	// .addFields(
	// 	{ name: "J'aime le miel :", value: '||Je suis une abeille 🐝 !||' },
	// 	{ name: '\u200B', value: '\u200B' },
	// 	{ name: 'Je suis une butineuse professionnelle !', value: '||Je suis une abeille 🐝 !||', inline: true },
	// )
	// .addField('Inline field title', 'Some value here', true)
	//.setImage('/public/img/Bee.jpeg')
	//.setTimestamp()
	//.setFooter({ text: 'Voici THE bee ! 🐝', iconURL: '/public/img/Bee.jpeg' });

    if (interaction.commandName === 'bee 🐝') {
      interaction.send({ embeds: [BeeEmbed] }),
        console.log('The bee 🐝 command was used successfully');
    }
  }
});

Client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  //replit
  // if (message.content === 'start') {
  //   setTimeout(() => {
  //     message.channel.send('start');
  //   }, 1000); //console.log("start1");
  //   setTimeout(() => {
  //     message.delete(); //console.log("start2");
  //   }, 2000);
  // }
  //

   if (message.content === 'rules') {
message.channel.send(`Bienvenue sur The Dev House
​Création du serveur : 10 juin 2022 21:26​
Nous vous demandons de bien respecter les règles ci-dessous
Vous devez évidement réspécter aussi les TOS de discord (https://discord.com/tos)
​
​
I – Comportement
-Restez courtois, poli. Vous pouvez être familier, nous ne vous demandons pas d’écrire comme Molière... Mais n'en abusez pas.

-Pas de violence verbale gratuite. Vous pouvez taquiner gentiment sans aller dans l’extrême. Si cela reste dans la bonne humeur et le second degré nous le tolérons. Si le staff estime que cela ne respecte plus la règle, vous risquez un kick ou un ban en fonction de l’humeur de la personne qui s'occupe de votre cas.
​
​
II – Chat écrit/vocal
-Pas de spam, sous peine de bannissement.

-Pas de pub sur les différents chats, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte. Sauf dérogation via un ticket.
​
​
III – Profil/Pseudo
-Ne doit pas être ressemblant/confondu avec celui d’un membre du staff, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.

-Ne doit pas contenir de propos racistes, homophobes, sexistes … (genre la photo de profil Hi**er on s’en passera) sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.

-Ne doit pas avoir de caractère pornographique, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.
​
​
IV - Contacter le staff
-Si pour une quelconque raison, vous voulez contacter un membre du staff (modo ou admin), faite un ticket

-Si vous voulez entrer dans l’équipe de modération, faite un :mailbox:・ticket vous passerez un genre d’entretien afin de voir vos motivations et vos idées pour améliorer le serveur. Ne stressez pas non plus, si vous êtes légitime ça se passera bien ;). C’est histoire de voir à qui donner le rôle de modo et d’apprendre à le/la connaître. La décision vous sera donnée ultérieurement par réponse au ticket.
​
​
Ces règles peuvent être soumises à des évolutions au cours du temps.
Vous avez ici la base du règlement !!!
Merci de le réspecter 😁`)
  };

  //say
  if (message.content.toLowerCase().startsWith(prefix + 'say')) {
    let MSG = message.content.split(' ');
    let Query = MSG.slice(1).join('+');
    let QueryD = MSG.slice(1).join(' ');
    if (!Query) message.reply('Please specify something for me to say!');
    else {
      message.channel.send(QueryD),
        message.delete(),
        console.log('Say message has been used');
    }
  }
  //

  // "Les MP"
  // if (message.content === prefix + 'salut') {
  //   message.author.createDM().then((channel) => {
  //     channel.send('Salut, je suis content de te voir 😊 !'),
  //       console.log('The "salut" command was successful!');
  //   });
  // }
  // if (message.content === prefix + 'salut') {
  //   message.reply('Regarde tes mp ... ^^'),
  //     console.log('The "salut" command was successful!');
  // }
  // "Les MP"
});

Client.login(ClientSettings.token);
console.log('\n Bot opérationnel');
