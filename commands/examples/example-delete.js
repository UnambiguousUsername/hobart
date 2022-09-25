const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('delete')
		.setDescription('Not for you.'),
	async execute(interaction) {
		await interaction.reply('Ice cream');
		await interaction.deleteReply();
	},
};