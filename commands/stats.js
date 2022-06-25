const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

module.exports.execute = async(Client, message, args) => {
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
    message.channel.send({ embeds: [statsEmbed]});
}

module.exports.help = {
    name: "stats", //Name of the commands
    description: "zlx command", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};