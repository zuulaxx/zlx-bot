const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const ClientSettings = require('./ClientSettings.json');

const commands = [];
const commandFiles = fs.readdirSync('./slash').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./slash/${file}`);
	commands.push(command.help);
}

const rest = new REST({ version: '9' }).setToken(ClientSettings.token);

// Deleting older Guild Commands
// rest.get(Routes.applicationGuildCommands('986711914077892608', '986698834853892106'))
// 	.then(data => {
// 		const promises = [];
// 		for (const command of data) {
// 			const deleteUrl = `${Routes.applicationGuildCommands('986711914077892608', '986698834853892106')}/${command.id}`;
// 			promises.push(rest.delete(deleteUrl));
// 		}
// 		console.log('Delete GUILD application (/) commands.')
// 		return Promise.all(promises);
// });

// Deleting older Client Commands
// rest.get(Routes.applicationCommands('986711914077892608'))
// 	.then(data => {
// 		const promises = [];
// 		for (const command of data) {
// 			const deleteUrl = `${Routes.applicationCommands('986711914077892608')}/${command.id}`;
// 			promises.push(rest.delete(deleteUrl));
// 		}
// 		console.log('Delete CLIENT application (/) commands.')
// 		return Promise.all(promises);
// });

//Client Deploy

(async () => {
	try {
		// Client.application.commands.create(data), console.log('application (/) commands *Ready*');
        // Client.guilds.cache.get('986698834853892106').commands.create(data), console.log('application (/) commands *Ready*');
		console.log('Started refreshing application (/) commands.');
		await rest.put(
			Routes.applicationCommands('986711914077892608'),
			{ body: commands },
		);
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})
();

//Guild Deploy
// (async () => {
// 	try {
// 		console.log('Started refreshing application (/) commands.');

// 		await rest.put(
// 			Routes.applicationGuildCommands('986711914077892608', '986698834853892106'),
// 			{ body: commands },
// 		);

// 		console.log('Successfully reloaded application (/) commands.');
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();