const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (interaction, Client) => {
    const gitEmbed = new MessageEmbed()
        .setColor('#3160FF')
        .setTitle('Le repository github du bot !')
        .addFields(
            { name: 'Voici tout ce que vous pouvez avoir besion sur le bot', value: '(Le plagiat est interdit)\u200B' },
            //{ name: '\u200B', value: '\u200B' },
            {
                name: "Lien 👨‍💻 :",
                value: ('[Source de zlx-bot](https://github.com/zuulaxx/zlx-bot)'),
                inline: false,
            },
        )
        .setTimestamp()
        .setFooter({
            text: `Un Utilisateur a demandé le github !`,
        });
        await interaction.reply({ embeds: [gitEmbed], ephemeral: true }).catch(),
        console.log('\n The **git** command has been sent 😄 ');
}

//              Slash Commands
module.exports.help = {
    name: "git", //Name of the command
    description: "Avoir le lien du repository github du bot", //Description of the command
    type: 1, //Type of the command. Read the readme.md file for more information
    // options: [
    //     {
    //         type: 3, //String
    //         name: "test1", //Option Name
    //         description: "description for the test1 arguments", //Option description
    //         required: false //Does the value need to be put in
    //     },
    // ], //Option of the command
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