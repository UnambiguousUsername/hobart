const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ephemeral')
		.setDescription('Test out ephemeral messaging.'),
	async execute(interaction) {
		await interaction.reply({ content: 'Boo!', ephemeral: true });
	},
};