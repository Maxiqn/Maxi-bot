# 🤖 Maxi Bot

A feature-rich Discord bot built with Discord.js 14 and Node.js 24 LTS. Manage shifts, training sessions, and track team statistics all in one place!

## ✨ Features

- **Shift Management** - Schedule, list, and cancel work shifts
- **Training Sessions** - Create and manage training sessions with attendance tracking
- **User Statistics** - View performance metrics and achievement points
- **User Profiles** - Display user information and server roles
- **Help System** - Easy-to-use help commands
- **Modern Slash Commands** - Interactive command interface

## 📋 Prerequisites

- **Node.js 24 LTS** or higher
- **npm** or **yarn**
- Discord bot token (from [Discord Developer Portal](https://discord.com/developers/applications))
- Discord server for testing

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Maxi-bot.git
cd Maxi-bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here  # Optional, for testing
```

### 4. Deploy Slash Commands

Before running the bot for the first time, deploy the slash commands:

```bash
node deploy-commands.js
```

You should see:
```
✓ Successfully registered X command(s)!
✅ Slash commands deployed successfully!
```

### 5. Start the Bot

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

You should see:
```
✓ Bot logged in as BotName#0000
✓ Watching over X guilds
```

## 🚄 Railway Cloud Deployment

Railway can host the bot without managing a server. A `railway.json` file is included so Railway detects Node.js and starts the app with `npm start`.

1. Create a new Railway project and connect your GitHub repository, or run `railway init` locally.
2. Add environment variables in Railway Dashboard:
   - `DISCORD_TOKEN`
   - `CLIENT_ID`
   - `GUILD_ID`
3. Run `node deploy-commands.js` locally before first deploy to register slash commands.
4. Deploy the project on Railway.

> Railway will use `npm start` to run your bot.

## 📚 Available Commands

### Utility
- `/ping` - Check bot status
- `/help` - Display all available commands

### Shift Management
- `/shift schedule` - Schedule a new work shift
- `/shift list` - View all scheduled shifts
- `/shift cancel` - Cancel an existing shift

### Training Sessions
- `/training-sessions create` - Create a new training session
- `/training-sessions list` - View all training sessions
- `/training-sessions attend` - Mark yourself as attending
- `/training-sessions details` - View session details

### User Information
- `/stats` - View your statistics and performance
- `/profile` - Display your user profile

## 🛠️ Project Structure

```
Maxi-bot/
├── src/
│   ├── index.js              # Main bot entry point
│   └── commands/             # Slash command files
│       ├── ping.js
│       ├── help.js
│       ├── shift.js
│       ├── training-sessions.js
│       ├── stats.js
│       └── profile.js
├── deploy-commands.js        # Command deployment script
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## 🔧 How to Add New Commands

1. Create a new file in `src/commands/` named `commandname.js`

2. Use this template:

```javascript
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('commandname')
    .setDescription('Command description')
    .addStringOption(option =>
      option
        .setName('option-name')
        .setDescription('Option description')
        .setRequired(true)
    ),

  async execute(interaction) {
    // Your command logic here
    await interaction.reply('Command executed!');
  },
};
```

3. Run the deployment script:
```bash
node deploy-commands.js
```

## 🔑 Getting Your Discord Bot Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Go to "Bot" → "Add Bot"
4. Copy the token under "TOKEN"
5. Paste it in your `.env` file

## 📖 Documentation

- [discord.js Documentation](https://discord.js.org/)
- [Discord API Documentation](https://discord.com/developers/docs/intro)
- [Node.js Documentation](https://nodejs.org/docs/)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this project for personal and commercial purposes.

## 💡 Support

If you encounter any issues or need help, please open an issue on GitHub.
