/**
 * Bot Configuration
 * Centralized configuration for the Discord bot
 */

export default {
  // Bot settings
  bot: {
    name: 'Maxi Bot',
    version: '1.0.0',
    prefix: '/',
  },

  // Colors for embeds
  colors: {
    success: '#00ff00',
    error: '#ff0000',
    info: '#0099ff',
    warning: '#ffff00',
    primary: '#9b59b6',
  },

  // Default embed footer
  footer: {
    text: '🤖 Powered by Maxi Bot',
    icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
  },

  // Features
  features: {
    shifts: true,
    training: true,
    statistics: true,
    profiles: true,
  },
};
