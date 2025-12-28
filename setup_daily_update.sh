#!/bin/bash
# Setup script for daily knowledge base updates on macOS

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PLIST_FILE="$HOME/Library/LaunchAgents/com.vonga.kbupdate.plist"

echo "Setting up daily knowledge base updates..."
echo ""

# Check if launchd directory exists
if [ ! -d "$HOME/Library/LaunchAgents" ]; then
    mkdir -p "$HOME/Library/LaunchAgents"
    echo "Created LaunchAgents directory"
fi

# Ask for schedule
echo "What time should the update run daily? (24-hour format)"
echo "Example: 2 for 2 AM, 14 for 2 PM"
read -p "Hour (0-23) [default: 2]: " HOUR
HOUR=${HOUR:-2}

read -p "Minute (0-59) [default: 0]: " MINUTE
MINUTE=${MINUTE:-0}

echo ""
echo "Creating launch agent plist file..."

# Create the plist file
cat > "$PLIST_FILE" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.vonga.kbupdate</string>
    <key>ProgramArguments</key>
    <array>
        <string>$SCRIPT_DIR/update_knowledge_base.sh</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>$HOUR</integer>
        <key>Minute</key>
        <integer>$MINUTE</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>$SCRIPT_DIR/knowledge_base_update.log</string>
    <key>StandardErrorPath</key>
    <string>$SCRIPT_DIR/knowledge_base_update_error.log</string>
    <key>RunAtLoad</key>
    <false/>
</dict>
</plist>
EOF

echo "✓ Plist file created at: $PLIST_FILE"
echo ""

# Check if already loaded
if launchctl list | grep -q com.vonga.kbupdate; then
    echo "Unloading existing agent..."
    launchctl unload "$PLIST_FILE" 2>/dev/null
fi

# Load the agent
echo "Loading launch agent..."
launchctl load "$PLIST_FILE"

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ Successfully set up daily knowledge base updates!"
    echo "  Schedule: Daily at $HOUR:$(printf %02d $MINUTE)"
    echo "  Log file: $SCRIPT_DIR/knowledge_base_update.log"
    echo ""
    echo "To verify it's loaded:"
    echo "  launchctl list | grep com.vonga.kbupdate"
    echo ""
    echo "To unload (disable):"
    echo "  launchctl unload $PLIST_FILE"
    echo ""
    echo "To test manually:"
    echo "  $SCRIPT_DIR/update_knowledge_base.sh"
else
    echo "✗ Failed to load launch agent"
    exit 1
fi

