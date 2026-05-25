/**
 * Utility functions for the bot
 */

/**
 * Format date to YYYY-MM-DD format
 * @param {Date} date - The date to format
 * @returns {string} Formatted date
 */
export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Format time to HH:MM format
 * @param {Date} date - The date to format
 * @returns {string} Formatted time
 */
export function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

/**
 * Check if user has admin permissions
 * @param {GuildMember} member - The guild member to check
 * @returns {boolean} True if user is admin
 */
export function isAdmin(member) {
  return member.permissions.has('Administrator');
}

/**
 * Get time until next date
 * @param {Date} futureDate - The future date
 * @returns {Object} Time difference object
 */
export function getTimeUntil(futureDate) {
  const now = new Date();
  const diff = futureDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
}

/**
 * Validate date string format (YYYY-MM-DD)
 * @param {string} dateStr - Date string to validate
 * @returns {boolean} True if valid
 */
export function isValidDateFormat(dateStr) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateStr)) return false;

  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date);
}

/**
 * Validate time string format (HH:MM)
 * @param {string} timeStr - Time string to validate
 * @returns {boolean} True if valid
 */
export function isValidTimeFormat(timeStr) {
  const regex = /^\d{2}:\d{2}$/;
  if (!regex.test(timeStr)) return false;

  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}

/**
 * Create a success message embed
 * @param {string} message - Success message
 * @returns {Object} Embed object
 */
export function createSuccessEmbed(message) {
  return {
    color: 0x00ff00,
    description: `✓ ${message}`,
  };
}

/**
 * Create an error message embed
 * @param {string} message - Error message
 * @returns {Object} Embed object
 */
export function createErrorEmbed(message) {
  return {
    color: 0xff0000,
    description: `❌ ${message}`,
  };
}

/**
 * Create an info message embed
 * @param {string} title - Embed title
 * @param {string} description - Embed description
 * @returns {Object} Embed object
 */
export function createInfoEmbed(title, description) {
  return {
    color: 0x0099ff,
    title,
    description,
  };
}
