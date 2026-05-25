import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display help information about bot commands'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('📖 Bot Commands Help')
      .setDescription('Here are all available commands:')
      .addFields(
        {
          name: '/ping',
          value: 'Check if the bot is online',
          inline: false,
        },
        {
          name: '/shift',
          value: 'Manage work shifts\n• `schedule` - Schedule a new shift\n• `list` - View all shifts\n• `cancel` - Cancel a shift',
          inline: false,
        },
        {
          name: '/training-sessions',
          value: 'Manage training sessions\n• `create` - Create a new session\n• `list` - View all sessions\n• `attend` - Mark attendance\n• `details` - View session details',
          inline: false,
        },
        {
          name: '/stats',
          value: 'View your statistics and performance',
          inline: false,
        },
        {
          name: '/profile',
          value: 'View your user profile',
          inline: false,
        },
      )
      .setFooter({
        text: 'Use the commands to manage your shifts and training sessions!',
      })
      .setTimestamp();

    await interaction.reply({ embeds: [embed], ephemeral: false });
  },
};
