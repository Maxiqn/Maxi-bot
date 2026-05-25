import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('View your statistics and performance'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('📊 Your Statistics')
      .setAuthor({
        name: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .addFields(
        {
          name: '🕐 Total Work Hours',
          value: '0 hours',
          inline: true,
        },
        {
          name: '📚 Training Sessions Attended',
          value: '0 sessions',
          inline: true,
        },
        {
          name: '✅ Completed Shifts',
          value: '0 shifts',
          inline: true,
        },
        {
          name: '📈 Performance Score',
          value: '100%',
          inline: true,
        },
        {
          name: '🎖️ Achievement Points',
          value: '0 points',
          inline: true,
        },
        {
          name: '📅 Member Since',
          value: new Date().toLocaleDateString(),
          inline: true,
        },
      )
      .setFooter({
        text: 'Keep up the great work!',
      })
      .setTimestamp();

    await interaction.reply({ embeds: [embed], ephemeral: false });
  },
};
