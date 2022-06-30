const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const ClientSettings = require(`${process.cwd()}/ClientSettings.json`);
const prefix = ClientSettings.prefix;

module.exports.execute = async(Client, message, args, connection, subscription, exitVocal) => {
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
    
        const promise = fs.promises.readFile(
          getPath(`${process.cwd()}/assets/images/animals-img/${rdmm()}`)
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
}

module.exports.help = {
    name: "bee", //Name of the commands
    description: "Envoie une image d'abeilles random", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};