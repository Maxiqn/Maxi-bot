# 🚀 Quick Start - Maxi Bot

Get your Discord bot running in 5 minutes!

## 1️⃣ Create Discord Bot Account

Visit [Discord Developer Portal](https://discord.com/developers/applications):
1. Click **"New Application"** → name it (e.g., "Maxi Bot") → **"Create"**
2. Go to **"Bot"** section → Click **"Add Bot"**
3. Under **TOKEN**, click **"Copy"** and save it somewhere safe
4. Go to **"OAuth2"** → **"URL Generator"**
   - Select scopes: `bot`
   - Select permissions: `Send Messages`, `Use Slash Commands`, `Read Messages`, `Embed Links`
5. Copy the generated URL, paste in browser → invite bot to your server

## 2️⃣ Clone & Install

```bash
git clone https://github.com/yourusername/Maxi-bot.git
cd Maxi-bot
npm install
```

## 3️⃣ Configure Bot

```bash
cp .env.example .env
# Edit .env and add:
# DISCORD_TOKEN=your_bot_token
# CLIENT_ID=your_client_id
```

Get `CLIENT_ID` from Developer Portal → General Information → Application ID

## 4️⃣ Deploy Commands

```bash
node deploy-commands.js
```

Should see:
```
✓ Successfully registered 6 command(s)!
✅ Slash commands deployed successfully!
```

## 5️⃣ Start Bot

```bash
npm start
```

Or for development:
```bash
npm run dev
```

## ✅ Test It!

In your Discord server, type:
- `/ping` → Should respond "🏓 Pong!"
- `/help` → Should show available commands
- `/profile` → Should show your profile

## 📚 Available Commands

| Command | Description |
|---------|-------------|
| `/ping` | Check bot status |
| `/help` | List all commands |
| `/shift schedule` | Schedule a work shift |
| `/shift list` | View scheduled shifts |
| `/shift cancel` | Cancel a shift |
| `/training-sessions create` | Create training session |
| `/training-sessions list` | View sessions |
| `/training-sessions attend` | Mark attendance |
| `/stats` | View your statistics |
| `/profile` | View your profile |

## 🆘 Troubleshooting

**Bot doesn't show up online**
- Verify token in `.env` is correct
- Check bot is invited to server with correct permissions

**Commands not working**
- Run `node deploy-commands.js` again
- Wait a minute for Discord to sync
- Check `CLIENT_ID` is correct in `.env`

**Dependencies not installing**
- Ensure Node.js 24+ is installed: `node --version`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## 📖 Full Documentation

See [SETUP.md](SETUP.md) for detailed setup instructions  
See [README.md](README.md) for full documentation

## 💡 Next Steps

- **Customize commands** - Edit files in `src/commands/`
- **Add database** - Connect MongoDB or other storage
- **Deploy** - Host on Replit, Heroku, VPS, or cloud platform
- **Extend features** - Create more slash commands

Happy coding! 🎉
