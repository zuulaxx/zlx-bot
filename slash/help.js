const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (interaction, Client, message) => {
    const exampleEmbed = new MessageEmbed()
        .setColor('#0000ff')
        .setTitle("Tu as besoin d'aide ?")
        //.setAuthor({ name: 'Avatar', iconURL: "./assets/images/botavatar.png" })
        .setDescription('Voici zlx-bot développé par <@762555226107543583> ! \n')
        .addFields(
            {
                name: '\n Nos commandes :',
                value:
                    'Voici toutes les commandes que vous pouvez être amené a faire :',
            },
            { name: '\u200B', value: '\u200B' },
            {
                name: '**__zlx.zuulaxx__** ou **__zlx.zlx__** :',
                value: 'Donne des info sur zuulaxx^^',
                inline: true,
            },
            {
                name: '**__zlx.hello__** :',
                value: 'Tu reçois un mp 🎉',
                inline: true,
            },
            {
                name: '**__zlx.info (@user)__** :',
                value: 'Tu reçois des infos sur toi ou sur (@user)',
                inline: true,
            },
            {
                name: '**__zlx.play, zlx.stop, zlx.replay__** :',
                value: 'Joue ▶, arête ⏹️ ou recommence 🔁 une musique',
                inline: true,
            },
            {
                name: '**__zlx.bee__** :',
                value: "Envoie une image d'abeilles random",
                inline: true,
            },
            {
                name: '**__zlx.stats__** :',
                value: 'Donne des statistiques sur zlx-bot',
                inline: true,
            },
            { name: '\u200B', value: '\u200B' }
        )
        .addField(
            "**__Nombres d'utilisateurs :__**",
            `**${Client.guilds.cache
                .map((g) => g.memberCount)
                .reduce((a, b) => a + b)}**`,
            true
        )
        .addField(
            "**__⚠️⚠️⚠️__**",
            "**Vous pouvez aussi utiliser `/` pour voire les commandes qui ne sont pas ici !**",
            true
        )
        .setTimestamp()
        .setFooter({
            text: `Un Utilisateur a demandé de l'aide !`,
        });
    await interaction.reply({ embeds: [exampleEmbed], ephemeral: false });
}

//              Slash Commands
module.exports.help = {
    name: "help", //Name of the command
    description: "Renvoie de l'aide", //Description of the command
    type: 1, //Type of the command. Read the readme.md file for more information
    // options: [
    //     {
    //         type: 3, //String
    //         name: "test1", //Option Name
    //         description: "description for the test1 arguments", //Option description
    //         required: false //Does the value need to be put in
    //     },
    //], //Option of the command
    permission: "SEND_MESSAGES", //Required permission to use the command
    enable: true, //If the command is under maintenance mode
    show: true //If the command is show on the help menu
};

//              User Context Menu
// module.exports.help = {
//     name: "test", //Name of the command
//     type: 2, //Type of the command. Read the readme.md file for more information
//     permission: "ADMINISTRATOR", //Required permission to use the command
//     enable: true, //If the command is under maintenance mode
//     show: true //If the command is show on the help menu
// };

//              Message Context Menu
// module.exports.help = {
//     name: "test", //Name of the command
//     type: 3, //Type of the command. Read the readme.md file for more information
//     permission: "ADMINISTRATOR", //Required permission to use the command
//     enable: true, //If the command is under maintenance mode
//     show: true //If the command is show on the help menu
// };