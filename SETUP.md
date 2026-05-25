# 📖 Setup Guide - Maxi Bot

Complete step-by-step guide to get your Maxi Bot up and running!

## Prerequisites Checklist

- [ ] Node.js 24 LTS installed (`node --version` should show v24.x.x)
- [ ] npm installed (`npm --version`)
- [ ] Discord account with administrator privileges
- [ ] A Discord server for testing

## Step 1: Install Node.js 24 LTS

### macOS
```bash
# Using Homebrew
brew install node@24
brew link node@24 --force
```

### Windows
Download from https://nodejs.org/ (LTS version)

### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify installation:
```bash
node --version  # Should show v24.x.x
npm --version
```

## Step 2: Create Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Enter bot name (e.g., "Maxi Bot")
4. Accept terms and click **"Create"**

### Get Bot Token
1. Go to **"Bot"** section on the left
2. Click **"Add Bot"**
3. Under **TOKEN**, click **"Copy"**
4. Save this token securely (keep it private!)

### Configure Bot Permissions
1. Go to **"OAuth2"** → **"URL Generator"**
2. Select scopes:
   - ✓ `bot`
3. Select permissions:
   - ✓ `Send Messages`
   - ✓ `Read Messages/View Channels`
   - ✓ `Use Slash Commands`
   - ✓ `Embed Links`
   - ✓ `Read Message History`

4. Copy the generated URL and open it in your browser to invite bot to server

## Step 3: Get Application/Client ID

1. In Developer Portal, go to **"General Information"**
2. Copy the **"Application ID"** under APPLICATION
3. This is your `CLIENT_ID`

## Step 4: Clone and Setup Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/Maxi-bot.git
cd Maxi-bot

# Install dependencies
npm install
```

## Step 5: Configure Environment Variables

1. Create `.env` file in root directory:
```bash
cp .env.example .env
```

2. Edit `.env` with your credentials:
```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here
```

## Step 6: Deploy Slash Commands

Run the deployment script to register all commands with Discord:

```bash
node deploy-commands.js
```

Expected output:
```
📂 Loading 6 command(s)...
✓ Loaded: ping.js
✓ Loaded: help.js
✓ Loaded: shift.js
✓ Loaded: training-sessions.js
✓ Loaded: stats.js
✓ Loaded: profile.js

🔄 Registering 6 command(s) globally...
✓ Successfully registered 6 command(s)!
✅ Slash commands deployed successfully!
```

## Step 7: Deploy to Railway Cloud

Railway is a convenient cloud host for Node.js apps.

1. Sign in to Railway and create a new project.
2. Connect this repository or run `railway init` locally.
3. Set environment variables in Railway:
   - `DISCORD_TOKEN`
   - `CLIENT_ID`
   - `GUILD_ID`
4. Deploy the project.

Railway will detect Node.js and use `npm start` to run the bot.

> Run `node deploy-commands.js` locally before the first Railway deploy to register slash commands.

## Step 8: Start the Bot

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Expected output:
```
✓ Bot logged in as Maxi Bot#0000
✓ Watching over 1 guilds
```

## Step 8: Test the Bot

In your Discord server, type:
- `/ping` - Should respond with "🏓 Pong!"
- `/help` - Should display available commands
- `/profile` - Should show your profile

## Troubleshooting

### Bot doesn't appear online
- ✓ Check token in `.env` is correct
- ✓ Check bot has correct intents in Developer Portal
- ✓ Ensure bot is invited to the server

### Commands don't work
- ✓ Run `node deploy-commands.js` again
- ✓ Wait a few minutes for Discord to sync
- ✓ Check `CLIENT_ID` is correct

### "Cannot find module" errors
- ✓ Run `npm install` to install dependencies
- ✓ Ensure Node.js 24 is installed

### Permission errors
- ✓ Bot must have necessary permissions in server
- ✓ Check OAuth2 scopes in Developer Portal
- ✓ Ensure bot role is above user roles (for moderation features)

## Next Steps

1. **Customize Commands** - Edit files in `src/commands/` to customize
2. **Add Database** - Connect to MongoDB or other database
3. **Deploy** - Host on platforms like Replit, Heroku, or VPS
4. **Add More Features** - Extend with more slash commands

## Resources

- [Discord.js Guide](https://discordjs.guide/)
- [Discord Developer Docs](https://discord.com/developers/docs)
- [Node.js Docs](https://nodejs.org/docs/)

## Getting Help

If you encounter issues:
1. Check the troubleshooting section above
2. Review console error messages
3. Check [discord.js support](https://discord.gg/djs)

## Security Notes

⚠️ **IMPORTANT:**
- Never commit `.env` file to git
- Keep your bot token private
- Use environment variables for sensitive data
- Enable 2FA on Discord Developer Account
