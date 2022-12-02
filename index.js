const Discord = require('discord.js');
const ClientSettings = require('./ClientSettings.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

// le prefix : "zlx."
//const prefix = ClientSettings.prefix;
const prefix = (ClientSettings.prefix);
//

const data = new SlashCommandBuilder()
  .setName('boost')
  .setDescription("Envoie un mp d'encouragement de ta part à zuulaxx ❤😊")

const data1 = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Connaître toutes les commandes 😎');

Client.on('ready', async () => {
    // Client.application.commands.set([]), console.log("Commandes supprimées !"); //(supprimer les / commandes)

    // Client.guilds.cache.get("986698834853892106").commands.cache.map(command => {command.delete();}), console.log("Commandes supprimées !");

    // await Client.guilds.cache.get("984901437186248714").commands.fetch(), console.log("Commandes rechargées !"); //(recharge les / commandes d'un serveur)

    Client.application.commands.create(data), console.log('Commandes chargées ! (0)');
    Client.application.commands.create(data1), console.log('Commandes chargées ! (1)');

    // Client.guilds.cache.get('984901437186248714').commands.create(data), console.log('Commandes chargées ! (0)');
    // Client.guilds.cache.get('984901437186248714').commands.create(data1), console.log('Commandes chargées ! (1)');

  console.log('Bot On 😎');
});

Client.on('interactionCreate', (interaction) => {
  if (interaction.isCommand()) {
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
    if (interaction.commandName === 'help') {
      interaction.reply('Nos commanndes sont : \n- /boost \n- zlx.say ton-message**'),
        console.log('The help command was used successfully');
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

  //say
  if (message.content.toLowerCase().startsWith(prefix + 'say')) {
    let MSG = message.content.split(' ');
    let Query = MSG.slice(1).join('+');
    let QueryD = MSG.slice(1).join(' ');
    if (!Query) message.reply('Please specify something for me to say!');
    else {
      message.channel.send(QueryD), message.delete(), console.log("Say message has been used");
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
console.log('\n Bot opérationnel')