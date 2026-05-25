import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('shift')
    .setDescription('Manage work shifts')
    .addSubcommand(subcommand =>
      subcommand
        .setName('schedule')
        .setDescription('Schedule a new shift')
        .addStringOption(option =>
          option
            .setName('date')
            .setDescription('Shift date (YYYY-MM-DD)')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('time')
            .setDescription('Shift time (HH:MM)')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('duration')
            .setDescription('Shift duration in hours')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription('List all scheduled shifts')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('cancel')
        .setDescription('Cancel a shift')
        .addStringOption(option =>
          option
            .setName('shift_id')
            .setDescription('ID of the shift to cancel')
            .setRequired(true)
        )
    ),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();

    if (subcommand === 'schedule') {
      const date = interaction.options.getString('date');
      const time = interaction.options.getString('time');
      const duration = interaction.options.getString('duration');

      await interaction.reply({
        content: `✓ Shift scheduled!\n📅 Date: ${date}\n⏰ Time: ${time}\n⏱️ Duration: ${duration} hours`,
        ephemeral: false,
      });
    } else if (subcommand === 'list') {
      await interaction.reply({
        content: '📋 **Your Scheduled Shifts**\nNo shifts scheduled yet.',
        ephemeral: false,
      });
    } else if (subcommand === 'cancel') {
      const shiftId = interaction.options.getString('shift_id');
      await interaction.reply({
        content: `✓ Shift ${shiftId} has been cancelled.`,
        ephemeral: false,
      });
    }
  },
};
