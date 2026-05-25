import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('training-sessions')
    .setDescription('Manage training sessions')
    .addSubcommand(subcommand =>
      subcommand
        .setName('create')
        .setDescription('Create a new training session')
        .addStringOption(option =>
          option
            .setName('name')
            .setDescription('Training session name')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('topic')
            .setDescription('Training topic')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('date')
            .setDescription('Training date (YYYY-MM-DD)')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('time')
            .setDescription('Training time (HH:MM)')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription('List all training sessions')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('attend')
        .setDescription('Mark yourself as attending a training session')
        .addStringOption(option =>
          option
            .setName('session_id')
            .setDescription('ID of the training session')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('details')
        .setDescription('View details of a training session')
        .addStringOption(option =>
          option
            .setName('session_id')
            .setDescription('ID of the training session')
            .setRequired(true)
        )
    ),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();

    if (subcommand === 'create') {
      const name = interaction.options.getString('name');
      const topic = interaction.options.getString('topic');
      const date = interaction.options.getString('date');
      const time = interaction.options.getString('time');

      await interaction.reply({
        content: `✓ Training session created!\n📚 **${name}**\n🎯 Topic: ${topic}\n📅 Date: ${date}\n⏰ Time: ${time}`,
        ephemeral: false,
      });
    } else if (subcommand === 'list') {
      await interaction.reply({
        content: '📚 **Training Sessions**\nNo training sessions scheduled yet.',
        ephemeral: false,
      });
    } else if (subcommand === 'attend') {
      const sessionId = interaction.options.getString('session_id');
      await interaction.reply({
        content: `✓ You are now attending training session ${sessionId}!`,
        ephemeral: false,
      });
    } else if (subcommand === 'details') {
      const sessionId = interaction.options.getString('session_id');
      await interaction.reply({
        content: `📚 **Training Session ${sessionId}**\nNo details found for this session.`,
        ephemeral: false,
      });
    }
  },
};
