const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const {
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
    VoiceConnectionStatus,
    VoiceConnectionDisconnectReason,
  } = require('@discordjs/voice');

module.exports.execute = async(Client, message, args, connection, subscription, exitVocal) => {
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
}

module.exports.help = {
    name: "play", //Name of the commands
    description: "Joue de la musique", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};