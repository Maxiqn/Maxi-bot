/**
 * Command Template - Copy this file and customize it
 * 
 * To create a new command:
 * 1. Copy this file to src/commands/yourcommandname.js
 * 2. Update the SlashCommandBuilder with your command details
 * 3. Implement your command logic in the execute function
 * 4. Run: node deploy-commands.js
 */

import { SlashCommandBuilder } from 'discord.js';

export default {
  // Define the command structure
  data: new SlashCommandBuilder()
    .setName('template')
    .setDescription('This is a template command')
    
    // Example: Add a required option
    .addStringOption(option =>
      option
        .setName('option-name')
        .setDescription('Description of the option')
        .setRequired(true)
    )
    
    // Example: Add an optional option
    .addIntegerOption(option =>
      option
        .setName('optional-option')
        .setDescription('Optional option description')
        .setRequired(false)
    ),

  // Command execution
  async execute(interaction) {
    // Get options from the command
    const requiredOption = interaction.options.getString('option-name');
    const optionalOption = interaction.options.getInteger('optional-option') || 0;

    try {
      // Your command logic here
      console.log(`Template command executed by ${interaction.user.tag}`);

      // Send response
      await interaction.reply({
        content: `✓ Template command executed!\nOption: ${requiredOption}\nOptional: ${optionalOption}`,
        ephemeral: false, // Set to true to hide response from others
      });
    } catch (error) {
      console.error('Error in template command:', error);
      await interaction.reply({
        content: '❌ An error occurred while executing this command.',
        ephemeral: true,
      });
    }
  },
};
