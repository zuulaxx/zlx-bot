const { MessageActionRow, MessageButton, MessageEmbed, Permissions, UserFlags } = require('discord.js');
const { truncate } = require('fs');
const moment = require('moment');
let status
module.exports.execute = async (client, message, args) => {
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
    .addField(':clock: Création du compte:',`Le ${moment.utc(user.createdAt).format('DD/MM/YYYY à HH:mm')} <t:${parseInt(user.createdAt / 1000)}:R>`, true)
    .addField('🤖 Robot :', `${user.bot ? 'Oui' : 'Non'}`, true)
    //.addField('', `${}`, true)
    //.addField('Statue', [user.presence.status], true)
    //.addField('A rejoind le serveur le', `\`${moment(user.joinedAt).format('DD MMM YYYY')}\``, true)
    /*if (UserFlags.length > 0) MeEmbed*///.addField('Badges', UserFlags.map(flag => flags[flag]).join('\n'))
    .addField('Avatar :', `ㅤ`, false)
    .setImage(user.displayAvatarURL({ dynamic: true }), false);

  message.channel.send({ embeds: [MeEmbed] }), console.log(`${message.author.tag} a demandé des infos !`)
}

module.exports.help = {
  name: "info", //Name of the commands
  description: "Donne des infos sur un utilisateur", //Description of the commands
  permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
  enable: true, //If the command is under maintenance
  show: true //If the command is showed on the help menu
};