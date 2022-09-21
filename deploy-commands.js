const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const releasedCommands = [];
const inDevCommands = [];
const examplesCommands = [];

const commandsPath = path.join(__dirname, 'commands');

const releasedCommandsPath = path.join(commandsPath, 'released');
const releasedCommandFiles = fs.readdirSync(releasedCommandsPath).filter(file => file.endsWith('.js'));

const inDevCommandPath = path.join(commandsPath, 'indev');
const inDevCommandFiles = fs.readdirSync(inDevCommandPath).filter(file => file.endsWith('.js'));

const examplesCommandPath = path.join(commandsPath, 'examples');
const examplesCommandFiles = fs.readdirSync(examplesCommandPath).filter(file => file.endsWith('.js'));

for (const file of releasedCommandFiles) {
	const filePath = path.join(releasedCommandsPath, file);
	const command = require(filePath);
	releasedCommands.push(command.data.toJSON());
}

for (const file of inDevCommandFiles) {
	const filePath = path.join(inDevCommandPath, file);
	const command = require(filePath);
	inDevCommands.push(command.data.toJSON());
}

for (const file of examplesCommandFiles) {
	const filePath = path.join(examplesCommandPath, file);
	const command = require(filePath);
	examplesCommands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: releasedCommands })
	.then(() => console.log('Successfully registered released application commands.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: inDevCommands })
	.then(() => console.log('Successfully registered in development application commands.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: examplesCommands })
	.then(() => console.log('Successfully registered example application commands.'))
	.catch(console.error);