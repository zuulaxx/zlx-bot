const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');

module.exports.execute = async(client, message, args) => {
    message.channel.send({ content: '**__Le site web de zuulaxx : https://zuulaxx.ml/__**', ephemeral: true });
}

module.exports.help = {
    name: "zuulaxx", //Name of the commands
    description: "zuulaxx command", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};