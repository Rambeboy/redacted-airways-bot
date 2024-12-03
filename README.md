## REDACTED AIRWAYS BOT

An automation bot for [RedactedAirways Quest](https://quest.redactedairways.com) built with Node.js.

## Features

- Automatic task execution
- Token-based multi-account support
- Dynamic task unlock monitoring
- Telegram auth task skipping
- Colored console output
- Countdown timer display
- Continuous 24-hour operation

## Prerequisites

- Node.js installed
- Active RedactedAirways account
- Twitter account connected to RedactedAirways

## Installation

1. Clone the repository

```bash
git clone https://github.com/Rambeboy/redacted-airways-bot.git && cd redacted-airways-bot
```

2. Install dependencies

```bash
npm install
```

3. Configure `accounts.js` file and add your account tokens

```bash
cp accounts/accounts_tmp.js accounts.js
```

4. Navigate to `accounts.js` file

```bash
nano accounts.js
```

## Usage

Run the bot using:

```bash
npm run start
```

## Features Details

### Task Processing

- Automatically executes unlocked tasks
- Monitors time-locked tasks
- Skips Telegram authentication tasks
- Waits for task unlock times

### Account Management

- Supports multiple accounts via tokens
- Individual account progress tracking
- Session revalidation and authentication

### Display Features

- Colored console output
- Progress tracking
- Countdown timers
- Task status display
- Account information display

### Error Handling

- Failed task retry
- Session revalidation
- Task list refresh
- Network error recovery

## Disclaimer

This bot is for educational purposes only. Use at your own risk. The developer is not responsible for any account bans or penalties resulting from the use of this bot.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
