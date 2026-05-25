import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('View your user profile'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#9b59b6')
      .setTitle('👤 User Profile')
      .setAuthor({
        name: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setThumbnail(interaction.user.displayAvatarURL())
      .addFields(
        {
          name: 'Username',
          value: interaction.user.username,
          inline: true,
        },
        {
          name: 'User ID',
          value: interaction.user.id,
          inline: true,
        },
        {
          name: 'Account Created',
          value: interaction.user.createdAt.toLocaleDateString(),
          inline: true,
        },
        {
          name: 'Status',
          value: '🟢 Active',
          inline: true,
        },
        {
          name: 'Role',
          value: interaction.member?.roles.highest.name || 'Member',
          inline: true,
        },
        {
          name: 'Joined Server',
          value: interaction.member?.joinedAt?.toLocaleDateString() || 'Unknown',
          inline: true,
        },
      )
      .setFooter({
        text: 'Member Profile',
      })
      .setTimestamp();

    await interaction.reply({ embeds: [embed], ephemeral: false });
  },
};
