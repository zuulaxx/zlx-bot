const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.execute = async (interaction, Client, message) => {
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

    module.exports = {
        name: 'server',
        aliases: [],
        description: 'server info...',
        cooldown: 5,
        guildOnly: false,
        args: false,
        run: async (client, message, args) => {
            const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
            const members = message.guild.members.cache;
            const channels = message.guild.channels.cache;
            const emojis = message.guild.emojis.cache;

            const serviembed = new MessageEmbed()
                .setDescription(`**Server Info**`)
                .setColor('BLACK')
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField('General', [
                    `**Name:** ${message.guild.name}`,
                    `**ID:** ${message.guild.id}`,
                    `**Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
                    `**Region:** ${regions[message.guild.region]}`,
                    `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                    `**Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
                    `**Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
                    `**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
                    '\u200b'
                ])
                .addField('Statistics', [
                    `**Role Count:** ${roles.length}`,
                    `**Emoji Count:** ${emojis.size}`,
                    `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
                    `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
                    `**Member Count:** ${message.guild.memberCount}`,
                    `**Humans:** ${members.filter(member => !member.user.bot).size}`,
                    `**Bots:** ${members.filter(member => member.user.bot).size}`,
                    `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                    `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                    `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
                    '\u200b'
                ])
                .addField('Presence', [
                    `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                    `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
                    `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                    `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
                    '\u200b'
                ])
                .addField(`Roles [${roles.length - 1}]`, roles.join(', '))

                .setTimestamp();
            await interaction.reply({ content: serviembed, ephemeral: true });
        }

    }
}

//              Slash Commands
module.exports.help = {
    name: "serveur-info", //Name of the command
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
