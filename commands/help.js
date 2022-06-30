const { MessageActionRow, MessageButton, MessageEmbed, Permissions } = require('discord.js');
const fs = require('fs');
const ClientSettings = require(`${process.cwd()}/ClientSettings.json`);
const prefix = ClientSettings.prefix;

module.exports.execute = async(Client, message, args) => {
    let commands = [], command = [], slashCommands = [];

    const CommandsFiles = fs.readdirSync("commands").filter(fl => fl.endsWith(".js"))

    const SlashCommandsFiles = fs.readdirSync("slash").filter(fl => fl.endsWith(".js"))

    commands.push({ name: '\u200B', value: '\u200B' })

    commands.push({name: `Prefix Commands`, value: `Les prefix commands utilise le prefix ${prefix}`})
    CommandsFiles.forEach(file => {
        const authorPerms = message.channel.permissionsFor(message.author)
        const command = require(`../commands/${file}`)
        if(!command || !authorPerms || !command.execute || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || !command.help.show || command.help.enable !== true || command.help.show !== true || !authorPerms.has(command.help.permission)) return
        commands.push({name: `**__${prefix}${command.help.name}__**`, value: `${command.help.description}`, inline: true})
    })

    commands.push({ name: '\u200B', value: '\u200B' })

    commands.push({name: `Slashcommands`, value: `Les slash commands utilise le /`})
    SlashCommandsFiles.forEach(file => {
        const command = require(`../slash/${file}`)
        if(!command || !command.help || !command.help.name || !command.help.description || !command.help.permission || !command.help.enable || !command.help.show || command.help.enable !== true || command.help.show !== true || command.help.type !== 1) return
        commands.push({name: `**__/${command.help.name}__**`, value: `${command.help.description}`, inline: true})
    })

    commands.push({ name: '\u200B', value: '\u200B' })

    const embed = new MessageEmbed()
        .setTitle("Tu as besoin d'aide ?")
        .setColor('#0000ff')
        .setDescription('Voici zlx-bot développé par <@762555226107543583> ! \n')
        .addFields(commands)
        .addField(
            "**__Nombres d'utilisateurs :__**",
            `**${Client.guilds.cache
                .map((g) => g.memberCount)
                .reduce((a, b) => a + b)}**`,
            true
        )
        // .addField(
        //     "**__⚠️⚠️⚠️__**",
        //     "**Vous pouvez aussi utiliser `/` pour voire les commandes qui ne sont pas ici !**",
        //     true
        // )
        .setTimestamp()
        .setFooter({
            text: `Un Utilisateur a demandé de l'aide !`,
        });
        //.setDescription(command.join('\n').replaceAll(',', "\n"))

    message.channel.send({embeds: [embed]})
}

module.exports.help = {
    name: "helptest", //Name of the commands
    description: "Commande d'aide", //Description of the commands
    permission: "SEND_MESSAGES", //Required permissions to execute the commands (if you want no permissions it's recommanded to put SEND_MESSAGES)
    enable: true, //If the command is under maintenance
    show: true //If the command is showed on the help menu
};