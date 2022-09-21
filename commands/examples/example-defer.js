const { SlashCommandBuilder } = require('discord.js');
const { wait } = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('defer')
		.setDescription('Test out defer messaging.'),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(10000);
		await interaction.editReply('Pecan pie.');
	},
};