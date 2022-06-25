const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const moment = require('moment');

module.exports.execute = async(client, message, args) => {
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
        .addField('Avatar :', `ㅤ`, false)
        .setImage(user.displayAvatarURL({ format: 'png' }), false);
  
      message.channel.send({ embeds: [MeEmbed] })
}

module.exports.help = {
    name: "info", //Name of the commands
    description: "info command", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};