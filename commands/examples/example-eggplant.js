const { SlashCommandBuilder } = require('discord.js');
const { eggplant } = require('./../../emojis.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eggplant')
		.setDescription('Eggplant.')
		.setDefaultMemberPermissions(0),
	async execute(interaction) {
		const message = await interaction.reply({ content: 'Eggplant.', fetchReply: true });
		await message.react(eggplant);
	},
};