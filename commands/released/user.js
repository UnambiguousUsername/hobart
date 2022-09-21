const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		await interaction.reply(`Your username: ${interaction.user.username}\nYour id: ${interaction.user.id}`);
	},
};