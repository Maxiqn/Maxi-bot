import { Client, GatewayIntentBits, Collection, ActivityType } from 'discord.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Validate environment variables
if (!process.env.DISCORD_TOKEN) {
  console.error('❌ Error: DISCORD_TOKEN is not set in .env file');
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

// Collection to store commands
client.commands = new Collection();

// Load commands from the commands directory
console.log('📂 Loading commands...');
const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = join(commandsPath, file);
  try {
    const command = await import(`file://${filePath}`);
    
    if (command.default.data && command.default.execute) {
      client.commands.set(command.default.data.name, command.default);
      console.log(`  ✓ ${command.default.data.name}`);
    }
  } catch (error) {
    console.error(`  ❌ Failed to load ${file}:`, error.message);
  }
}

console.log(`\n✓ Loaded ${client.commands.size} command(s)\n`);

// Bot ready event
client.once('ready', () => {
  console.log('━'.repeat(50));
  console.log(`✓ Bot logged in as ${client.user.tag}`);
  console.log(`✓ Watching over ${client.guilds.cache.size} guild(s)`);
  console.log(`✓ Ready to serve ${client.users.cache.size} user(s)`);
  console.log('━'.repeat(50));

  // Set bot activity
  client.user.setActivity('/help for commands', { type: ActivityType.Watching });
});

// Handle slash commands
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`❌ No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    console.log(`📋 ${interaction.user.tag} used /${interaction.commandName}`);
    await command.execute(interaction);
  } catch (error) {
    console.error(`❌ Error executing /${interaction.commandName}:`, error);
    
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: '❌ There was an error while executing this command!',
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: '❌ There was an error while executing this command!',
        ephemeral: true,
      });
    }
  }
});

// Error handling
client.on('error', error => {
  console.error('❌ Client error:', error);
});

process.on('unhandledRejection', error => {
  console.error('❌ Unhandled promise rejection:', error);
});

// Login to Discord
console.log('🔐 Connecting to Discord...');
client.login(process.env.DISCORD_TOKEN);
