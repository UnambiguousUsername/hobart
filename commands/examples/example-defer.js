const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('defer')
		.setDescription('Test out defer messaging.'),
	async execute(interaction) {
		await interaction.deferReply().then(() => console.log('deffered')).catch(console.error);
		await wait(1000).then(() => console.log('waited')).catch(console.error);
		await interaction.followUp('Pecan pie.').then(() => console.log('followed up')).catch(console.error);
	},
};