const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (interaction, message) => {
    await interaction.reply("Trouve le : 🤖 \n||👨|| ||👨|| ||👨||\n||🤖|| ||👨|| ||👨||\n||👨|| ||👨|| ||👨||"),({ephemeral: true}), console.log(`\n The **game** command has been sent by ${message.author.tag} à utilisé **say** 😄`);
}

//              Slash Commands
module.exports.help = {
    name: "game", //Name of the command
    description: "🤖 Renvoie un petit jeux ^^", //Description of the command
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