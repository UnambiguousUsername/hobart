const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Khajit has info, if you have coin.')
		.setDMPermission(false)
		.addSubcommand(subcommand => subcommand
			.setName('user')
			.setDescription('Dirty secrets on a user.')
			.addUserOption(option => option.setName('victim').setDescription('The user.')))
		.addSubcommand(subcommand => subcommand
			.setName('server')
			.setDescription('What is the admin hiding from you?')),
	async execute(interaction) {

		let response = '';

		switch (interaction.options.getSubcommand()) {
		case 'user':
			response = `Victims username: ${interaction.options.getUser('victim').username}\nVictims id: ${interaction.options.getUser('victim').id}`;
			break;
		case 'server':
			response = `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`;
			break;
		default:
			response = 'wtf';
			break;
		}

		await interaction.reply(response);
	},
};