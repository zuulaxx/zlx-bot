const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (interaction, Client) => {
        await interaction.reply({content: `lol${interaction.name}`, ephemeral: true});
}

//              Slash Commands
module.exports.help = {
    name: "contact", //Name of the command
    description: "Contacter un utilisateur", //Description of the command
    type: 1, //Type of the command. Read the readme.md file for more information
    // options: [
    //     {
    //         type: 3, //String
    //         name: "Personne à contacter :", //Option Name
    //         description: "Mentionnez la personne à contacter", //Option description
    //         required: true //Does the value need to be put in
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