# Agent Safeguards & Performance

## Safeguards Implemented

### 1. Iteration Limit
- **Maximum iterations**: 20 tool calls per request
- **Purpose**: Prevents infinite loops
- **Behavior**: Agent will stop after 20 iterations and return a response

### 2. Timeout Protection
- **Timeout**: 90 seconds per request
- **Purpose**: Prevents hanging on long operations
- **Behavior**: Returns timeout message if request exceeds 90 seconds

### 3. Progress Indicators
- **Status updates**: Shows "Thinking..." message while processing
- **Purpose**: Lets you know the agent is working, not stuck
- **Location**: Displayed in Streamlit UI above the response area

### 4. System Prompt Efficiency Rules
- Agent is instructed to be concise
- Avoids unnecessary tool calls
- Tries different approaches if stuck after 2-3 attempts

## What You'll See

**Normal operation:**
- Status shows "🤔 Thinking... (this may take a moment)"
- Response appears when complete

**If agent gets stuck:**
- After 20 iterations: Agent stops and returns response
- After 90 seconds: Timeout message appears
- You can refresh if needed (conversation history is preserved)

## Tuning (if needed)

If you find the limits are too restrictive:

**Increase iteration limit:**
- Edit `agent.py`, line ~248: `max_iterations = 20` → higher number

**Increase timeout:**
- Edit `agent.py`, line ~336: `timeout_seconds = 90` → higher number

**Note**: These limits balance responsiveness with preventing hangs. Adjust carefully.

