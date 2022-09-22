const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const releasedPath = path.join(commandsPath, 'released');
const inDevPath = path.join(commandsPath, 'indev');
const examplesPath = path.join(commandsPath, 'examples');

const releasedFiles = fs.readdirSync(releasedPath).filter(file => file.endsWith('.js'));
const inDevFiles = fs.readdirSync(inDevPath).filter(file => file.endsWith('.js'))
const examplesFiles = fs.readdirSync(examplesPath).filter(file => file.endsWith('.js'));

for (const file of releasedFiles) {
	const filePath = path.join(releasedPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

for (const file of inDevFiles) {
	const filePath = path.join(inDevPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

for (const file of examplesFiles) {
	const filePath = path.join(examplesPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);