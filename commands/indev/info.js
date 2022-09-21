const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Khajit has info, if you have coin.')
		.addSubcommand(subcommand => subcommand
			.setName('user')
			.setDescription('Dirty secrets on a user.')
			.addUserOption(option => option.setName('victim').setDescription('The user.')))
		.addSubcommand(subcommand => subcommand
			.setName('server')
			.setDescription('What is the admin hiding from you?')),
	async execute(interaction) {
		
	},
};