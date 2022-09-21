const { SlashCommandBuilder } = require('discord.js');
const { wait } = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('edit')
		.setDescription('Test out reply editing.'),
	async execute(interaction) {
		await interaction.reply('Now you see me...');
		await wait(2000);
		await interaction.editReply('Now you don\'t...');
	},
};