/**
 * Constants used throughout the bot
 */

export const CONSTANTS = {
  // Embed Colors
  COLORS: {
    SUCCESS: '#00ff00',
    ERROR: '#ff0000',
    INFO: '#0099ff',
    WARNING: '#ffff00',
    PRIMARY: '#9b59b6',
  },

  // Emojis
  EMOJIS: {
    SUCCESS: '✓',
    ERROR: '❌',
    INFO: 'ℹ️',
    WARNING: '⚠️',
    LOADING: '⏳',
    CALENDAR: '📅',
    CLOCK: '⏰',
    TIMER: '⏱️',
    CHART: '📊',
    BOOKS: '📚',
    PERSON: '👤',
    SHIFT: '🕐',
    TRAINING: '📖',
    STATS: '📈',
    PERFORMANCE: '🎖️',
    MEMBERS: '👥',
  },

  // Time Units (in milliseconds)
  TIME: {
    SECOND: 1000,
    MINUTE: 60 * 1000,
    HOUR: 60 * 60 * 1000,
    DAY: 24 * 60 * 60 * 1000,
    WEEK: 7 * 24 * 60 * 60 * 1000,
  },

  // Command Cooldowns (in seconds)
  COOLDOWNS: {
    SHIFT_COMMAND: 5,
    TRAINING_COMMAND: 5,
    STATS_COMMAND: 10,
    PROFILE_COMMAND: 3,
  },

  // Validation
  VALIDATION: {
    MIN_SHIFT_DURATION: 1,      // hours
    MAX_SHIFT_DURATION: 12,     // hours
    MIN_SHIFT_NAME_LENGTH: 3,
    MAX_SHIFT_NAME_LENGTH: 50,
  },

  // Status Messages
  MESSAGES: {
    SHIFT_SCHEDULED: 'Shift scheduled successfully!',
    SHIFT_CANCELLED: 'Shift cancelled.',
    TRAINING_CREATED: 'Training session created!',
    TRAINING_JOINED: 'You are now attending this training session!',
    COMMAND_ERROR: 'There was an error executing this command.',
    NO_DATA: 'No data available yet.',
  },

  // Permissions
  PERMISSIONS: {
    ADMIN: 'Administrator',
    MANAGE_GUILD: 'ManageGuild',
    MANAGE_ROLES: 'ManageRoles',
  },
};

export default CONSTANTS;
