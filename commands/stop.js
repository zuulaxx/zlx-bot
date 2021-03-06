const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const {
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
    VoiceConnectionStatus,
    VoiceConnectionDisconnectReason,
  } = require('@discordjs/voice');

module.exports.execute = async(Client, message, args, connection, subscription, exitVocal) => {
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
}

module.exports.help = {
    name: "stop", //Name of the commands
    description: "stop la musique", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};