const Discord = require("discord.js");
require("@discordjs/voice");
const ClientSettings = require("./ClientSettings.json");
var ffmpeg = require("ffmpeg");
const { MessageEmbed } = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ]
});

// le prefix : "zlx."
const prefix = ClientSettings.prefix;

Client.on("ready", async () => {
    console.log("\nSuccessfully run application commands.\n");
});

Client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/g).slice(1);
    if (message.content === "Ping") {
        message.reply("Pong 🏓!");
    }
});

const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const config = require("./config.json");

const commands = [
    new SlashCommandBuilder()
        .setName("Ping")
        .setDescription("Replies with Pong 🏓!")
        .reply("Pong 🏓!")
        .message()
        .send()
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(ClientSettings.token);

rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), {
    body: commands
})
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);



    Client.on("messageCreate", (message) => {
        if (message.author.bot) return;
    
        if (message.content.startsWith(prefix)) {
            const cmd = message.content.split(prefix).pop();

            switch (cmd) {
            case "aide":
                message.channel.send(
                    "**__Les commandes du bot :__**\n - **__/zuulaxx__** ou **__/zlx__** : Renvoie une bio plus approfondie sur zuulaxx 😊 !"
                );
                break;
        }
    }
    });