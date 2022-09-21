const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('options')
		.setDescription('Test out options.')
		.addStringOption(option => option.setName('string').setDescription('String').setRequired(true))
		.addBooleanOption(option => option.setName('bool').setDescription('Boolean'))
		.addUserOption(option => option.setName('user').setDescription('User'))
		.addChannelOption(option => option.setName('channel').setDescription('Channel'))
		.addRoleOption(option => option.setName('role').setDescription('Role'))
		.addIntegerOption(option => option.setName('int').setDescription('Integer'))
		.addNumberOption(option => option.setName('num').setDescription('Number'))
		.addMentionableOption(option => option.setName('mentionable').setDescription('No clue.'))
		.addAttachmentOption(option => option.setName('attachment').setDescription('Attachment')),
	async execute(interaction) {
		const string = interaction.options.getString('input');
		const boolean = interaction.options.getBoolean('bool');
		const user = interaction.options.getUser('target');
		const member = interaction.options.getMember('target');
		const channel = interaction.options.getChannel('destination');
		const role = interaction.options.getRole('role');
		const integer = interaction.options.getInteger('int');
		const number = interaction.options.getNumber('num');
		const mentionable = interaction.options.getMentionable('mentionable');
		const attachment = interaction.options.getAttachment('attachment');

		await interaction.reply(`You said ${[string, boolean, user, member, channel, role, integer, number, mentionable, attachment].join(', ')}`);
	},
};