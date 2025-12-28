# Setting Up Daily Knowledge Base Updates

This guide will help you set up automatic daily updates to your knowledge base.

## Option 1: Using macOS launchd (Recommended for macOS)

### Step 1: Create a Launch Agent

Create a plist file for launchd:

```bash
mkdir -p ~/Library/LaunchAgents
```

Then create the file: `~/Library/LaunchAgents/com.vonga.kbupdate.plist`

### Step 2: Create the plist file

Run this command (replace `/Users/riesner/vonga-website` with your actual path if different):

```bash
cat > ~/Library/LaunchAgents/com.vonga.kbupdate.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.vonga.kbupdate</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/riesner/vonga-website/update_knowledge_base.sh</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>2</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>/Users/riesner/vonga-website/knowledge_base_update.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/riesner/vonga-website/knowledge_base_update_error.log</string>
    <key>RunAtLoad</key>
    <false/>
</dict>
</plist>
EOF
```

### Step 3: Load the Launch Agent

```bash
launchctl load ~/Library/LaunchAgents/com.vonga.kbupdate.plist
```

### Step 4: Verify it's loaded

```bash
launchctl list | grep com.vonga.kbupdate
```

### To Unload (if needed):

```bash
launchctl unload ~/Library/LaunchAgents/com.vonga.kbupdate.plist
```

## Option 2: Using Cron (Universal)

### Step 1: Edit your crontab

```bash
crontab -e
```

### Step 2: Add this line (runs daily at 2 AM)

```cron
0 2 * * * /Users/riesner/vonga-website/update_knowledge_base.sh >> /Users/riesner/vonga-website/knowledge_base_update.log 2>&1
```

### Step 3: Save and exit

The cron job will run daily at 2:00 AM.

## Option 3: Quick Setup Script

I can create a setup script that does this automatically. Would you like me to create one?

## Changing the Schedule

### For launchd (macOS):
Edit the plist file and change the `Hour` and `Minute` values:
- `Hour`: 0-23 (2 = 2 AM)
- `Minute`: 0-59 (0 = top of the hour)

Then reload:
```bash
launchctl unload ~/Library/LaunchAgents/com.vonga.kbupdate.plist
launchctl load ~/Library/LaunchAgents/com.vonga.kbupdate.plist
```

### For cron:
Edit crontab: `crontab -e`

Format: `Minute Hour Day Month DayOfWeek Command`
- `0 2 * * *` = 2:00 AM every day
- `0 3 * * 1` = 3:00 AM every Monday
- `0 */6 * * *` = Every 6 hours

## Checking Logs

View the update log:
```bash
tail -f /Users/riesner/vonga-website/knowledge_base_update.log
```

## Manual Update

You can always run a manual update:
```bash
./update_knowledge_base.sh
```

Or directly:
```bash
python3 index_knowledge_base.py 1
```

