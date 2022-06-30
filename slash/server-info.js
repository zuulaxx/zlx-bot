const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (interaction, guild, message) => {
    const { MessageEmbed } = require('discord.js');
    const moment = require('moment');

    // const filterLevels = {
    //     DISABLED: 'Off',
    //     MEMBERS_WITHOUT_ROLES: 'No Role',
    //     ALL_MEMBERS: 'Everyone'
    // };

    const verificationLevels = {
        NONE: 'None',
        LOW: 'Low',
        MEDIUM: 'Medium',
        HIGH: '(╯°□°）╯︵ ┻━┻',
        VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
    };

    const regions = {
        brazil: 'Brazil',
        europe: 'Europe',
        hongkong: 'Hong Kong',
        india: 'India',
        japan: 'Japan',
        russia: 'Russia',
        singapore: 'Singapore',
        southafrica: 'South Africa',
        sydeny: 'Sydeny',
        'us-central': 'US Central',
        'us-east': 'US East',
        'us-west': 'US West',
        'us-south': 'US South'
    };
    const roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = interaction.guild.members.cache;
    const channels = interaction.guild.channels.cache;
    const emojis = interaction.guild.emojis.cache;

    const serviembed = new MessageEmbed()
        .setDescription(`**Server Info**`)
        .setColor('#2d4fa3')
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .addFields(
            {name: `**Name:**`, value: `${interaction.guild.name}`},
            {name: `**ID:**`, value: `${interaction.guild.id}` },
            //{name: `**Owner:**`, value: `${interaction.guild.owner.tag} (${interaction.guild.ownerID})` },
            //{name: `**Region:**`, value: `${regions[interaction.guild.region]}` },
            {name: `**Boost Count:**`, value: `${interaction.guild.premiumSubscriptionCount || '0'}` },
            {name: `**Boost Tier:**`, value: `${interaction.guild.premiumTier ? `Tier ${interaction.guild.premiumTier}` : 'None'}` },
            //{name: `**Explicit Filter:**`, value: `${filterLevels[interaction.guild.explicitContentFilter]}` },
            {name: `**Verification Level:**`, value: `${verificationLevels[interaction.guild.verificationLevel]}` },
            {name: `**Time Created:**`, value: `${moment(interaction.guild.createdTimestamp).format('LT')} ${moment(interaction.guild.createdTimestamp).format('LL')} [${moment(interaction.guild.createdTimestamp).fromNow()}]` },
            //{name: '\u200B', value: '\u200B' },
            {name: `**Role Count:**`, value: `${roles.length}` },
            {name: `**Emoji Count:**`, value: `${emojis.size}` },
            {name: `**Regular Emoji Count:**`, value: `${emojis.filter(emoji => !emoji.animated).size}` },
            {name: `**Animated Emoji Count:**`, value: `${emojis.filter(emoji => emoji.animated).size}` },
            {name: `**Member Count:**`, value: `${interaction.guild.memberCount}` },
            {name: `**Humans:**`, value: `${members.filter(member => !member.user.bot).size}` },
            {name: `**Bots:**`, value: `${members.filter(member => member.user.bot).size}` },
            // {name: `**Text Channels:**`, value: `${channels.filter(channel => channel.type === 'text').size}` },
            // {name: `**Voice Channels:**`, value: `${channels.filter(channel => channel.type === 'voice').size}` },
            //{name: '\u200B', value: '\u200B' },
            // {name: `**Online:**`, value: `${members.filter(member => member.presence.status === 'online').size}` },
            // {name: `**Idle:**`, value: `${members.filter(member => member.presence.status === 'idle').size}` },
            // {name: `**Do Not Disturb:**`, value: `${members.filter(member => member.presence.status === 'dnd').size}` },
            // {name: `**Offline:**`, value: `${members.filter(member => member.presence.status === 'offline').size}` }
        )
        .setTimestamp();
        await interaction.reply({ embeds: [serviembed], ephemeral: true });
}

//              Slash Commands
module.exports.help = {
    name: "server-info", //Name of the command
    description: "Donne des infos sur tout le serveur", //Description of the command
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
