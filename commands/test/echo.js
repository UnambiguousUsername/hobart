const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with your input!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back.')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(`Your username: ${interaction.user.username}\nYour id: ${interaction.user.id}`)
			.then(() => console.log('Replied to message.'))
			.catch(console.error);
	},
};
