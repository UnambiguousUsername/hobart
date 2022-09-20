const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const globalCommands = [];
const testCommands = [];

const globalCommandsPath = path.join(__dirname, 'commands');
const globalCommandFiles = fs.readdirSync(globalCommandsPath).filter(file => file.endsWith('.js'));

const testCommandPath = path.join(globalCommandsPath, 'test');
const testCommandFiles = fs.readdirSync(testCommandPath).filter(file => file.endsWith('.js'));

for (const file of globalCommandFiles) {
	const filePath = path.join(globalCommandsPath, file);
	const command = require(filePath);
	globalCommands.push(command.data.toJSON());
}

for (const file of testCommandFiles) {
	const filePath = path.join(testCommandPath, file);
	const command = require(filePath);
	testCommands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId, guildId), { body: globalCommands })
	.then(() => console.log('Successfully registered global application commands.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: testCommands })
	.then(() => console.log('Successfully registered test application commands.'))
	.catch(console.error);