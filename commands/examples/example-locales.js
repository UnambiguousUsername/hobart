const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('polyglot')
		.setDescription('I speak many tongues.'),
	async execute(interaction) {
		const locales = {
			de: 'Hallo Welt!',
			sp: 'Hola mundo!',
			'en-US': 'Testing',
		};

		await interaction.reply(locales[interaction.locale] ?? 'Hello World!');
	},
};