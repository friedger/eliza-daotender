# DaoTender 🤖

## Background

We started with
https://www.quicknode.com/guides/ai/how-to-setup-an-ai-agent-with-eliza-ai16z-framework
to build a bartender for Commons Hub Brussels that makes the experience at the fridge a memorable event.

Ideas was to have a chat bot that has knownledge about the drinks in the fridge, type and price and inventory,
that can suggest alternative beer and has budget to give free drinks

## Workflows

-   Inform users about the menu
-   Send a voucher or tokens to a user for their kind conversation or for loyal customers
-   Tell users how they can tip DaoTender
-   Explain how to use Brussels Pay
-   Tell users and the world about upcoming events
-   Summarize an event once it is over

## 🚀 Quick Start

### Prerequisites

-   [Python 2.7+](https://www.python.org/downloads/)
-   [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [pnpm](https://pnpm.io/installation)

> **Note for Windows Users:** [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install-manual) is required.

### Full steps and documentation can be found in the [Eliza Starter Repository](https://github.com/elizaOS/eliza-starter).

```bash
git clone https://github.com/elizaos/eliza-starter.git
cd eliza-starter
cp .env.example .env
pnpm i && pnpm build && pnpm start
```

### Env Variables

```
DISCORD_APPLICATION_ID=
DISCORD_API_TOKEN=
MISTRAL_API_KEY=
EVM_PRIVATE_KEY=             # Add the "0x" prefix infront of your private key string
EVM_PROVIDER_URL=            # e.g. from quicknode
ETHEREUM_PROVIDER_SEPOLIA=   # e.g. from quicknode

```

## Start Eliza

```bash
pnpm i
pnpm build
pnpm start

# The project iterates fast, sometimes you need to clean the project if you are coming back to the project
pnpm clean
```

### Interact via Browser

Once the agent is running, you should see the message to run "pnpm start:client" at the end.

Open another terminal, move to the same directory, run the command below, then follow the URL to chat with your agent.

```bash
pnpm start:client
```

### Upgrade from upstream

#### Checkout the latest release

```bash
# Clone the repository
git clone https://github.com/elizaos/eliza.git

# This project iterates fast, so we recommend checking out the latest release
git checkout $(git describe --tags --abbrev=0)
# If the above doesn't checkout the latest release, this should work:
# git checkout $(git describe --tags `git rev-list --tags --max-count=1`)
```

If you would like the sample character files too, then run this:

```bash
# Download characters submodule from the character repos
git submodule update --init
```

## 🛠️ System Requirements

### Minimum Requirements

-   CPU: Dual-core processor
-   RAM: 4GB
-   Storage: 1GB free space
-   Internet connection: Broadband (1 Mbps+)

### Software Requirements

-   Python 2.7+ (3.8+ recommended)
-   Node.js 23+
-   pnpm
-   Git

### Optional Requirements

-   GPU: For running local LLM models
-   Additional storage: For document storage and memory
-   Higher RAM: For running multiple agents

## 📁 Project Structure

```
eliza/
├── packages/
│   ├── core/           # Core Eliza functionality
│   ├── clients/        # Client implementations
│   └── actions/        # Custom actions
├── docs/              # Documentation
├── scripts/           # Utility scripts
└── examples/          # Example implementations
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests: `pnpm test`
5. Submit a pull request

### Types of Contributions

-   🐛 Bug fixes
-   ✨ New features
-   📚 Documentation improvements
-   🌍 Translations
-   🧪 Test improvements

### Code Style

-   Follow the existing code style
-   Add comments for complex logic
-   Update documentation for changes
-   Add tests for new features
