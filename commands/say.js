const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

module.exports.execute = async(Client, message, args) => {
      if (
        message.content.includes('@everyone') ||
        message.content.includes('@here')
      ) {
        return message.channel.send(
          '🚫 | Merci de ne pas mentionner here/everyone.'
        );
      }
      const sayMessage = args.join(' ');
      if (!sayMessage) {
        return message.channel.send(
          "🚫 | Merci d'entrer un message à envoyer à votre place. "
        );
      }
      message.delete();
  
      message.channel.send({content: sayMessage}), console.log(`${message.author.tag} à utilisé **say**`)
}

module.exports.help = {
    name: "say", //Name of the commands
    description: "zlx command", //Description of the commands
    permission: "MANAGE_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};