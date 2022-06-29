const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (interaction, guild, message) => {
    const { MessageEmbed } = require('discord.js');
    const moment = require('moment');

    const filterLevels = {
        DISABLED: 'Off',
        MEMBERS_WITHOUT_ROLES: 'No Role',
        ALL_MEMBERS: 'Everyone'
    };

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
        .setColor('BLACK')
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .addField(`**Name:** ${interaction.guild.name}`)
        .addField(`**ID:** ${interaction.guild.id}`)
        //.addField(`**Owner:** ${interaction.guild.owner.tag} (${interaction.guild.ownerID})`)
        .addField(`**Region:** ${regions[interaction.guild.region]}`)
        .addField(`**Boost Tier:** ${interaction.guild.premiumTier ? `Tier ${interaction.guild.premiumTier}` : 'None'}`)
        .addField(`**Explicit Filter:** ${filterLevels[interaction.guild.explicitContentFilter]}`)
        .addField(`**Verification Level:** ${verificationLevels[interaction.guild.verificationLevel]}`)
        .addField(`**Time Created:** ${moment(interaction.guild.createdTimestamp).format('LT')} ${moment(interaction.guild.createdTimestamp).format('LL')} [${moment(interaction.guild.createdTimestamp).fromNow()}]`)
        .addField('\u200b')
        .addField(`**Role Count:** ${roles.length}`)
        .addField(`**Emoji Count:** ${emojis.size}`)
        .addField(`**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`)
        .addField(`**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`)
        .addField(`**Member Count:** ${interaction.guild.memberCount}`)
        .addField(`**Humans:** ${members.filter(member => !member.user.bot).size}`)
        .addField(`**Bots:** ${members.filter(member => member.user.bot).size}`)
        .addField(`**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`)
        .addField(`**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`)
        .addField(`**Boost Count:** ${interaction.guild.premiumSubscriptionCount || '0'}`)
        .addField('\u200b')
        .addField(`**Online:** ${members.filter(member => member.presence.status === 'online').size}`)
        .addField(`**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`)
        .addField(`**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`)
        .addField(`**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`)
        .addField('\u200b')
        .addField(`Roles [${roles.length - 1}]`, roles.join(', '))

        .setTimestamp();
    await interaction.reply({ content: serviembed, ephemeral: true });
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
