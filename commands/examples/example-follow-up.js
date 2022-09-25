const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('follow-up')
		.setDescription('Test out follow ups.'),
	async execute(interaction) {
		await interaction.reply('Who you gonna call?');
		await wait(1000);
		await interaction.followUp('GHOSTBUSTERS!');
	},
};