# Shipyard for Claude

Launch a product without leaving Claude. This plugin connects Claude to Shipyard, a program that runs on your own computer and sets up everything between a working idea and a live product: the domain, DNS, repository, hosting, database, sending email and payments.

## What you need

- **Shipyard installed on your computer.** This plugin does not contain the program. Get it at [shipyardmcp.com](https://shipyardmcp.com): after you create an account, your account page shows two lines to paste into a terminal. Shipyard is paid software and needs a licence.
- **Your own provider accounts**, such as GitHub, a host, Cloudflare, Resend and Stripe. You connect each once.

## What the plugin adds

- **An MCP server entry** that runs `server.js`, a short readable file in this plugin. All it does is start `shipyard mcp`, the program you installed, and pass messages through. Nothing is downloaded by the plugin.
- **Three skills** that teach Claude the safe way to use it: `launch-a-product`, `connect-accounts` and `after-launch`.

Try: "Launch a product called tidetable at tidetable.app", "Which accounts does Shipyard still need?", or "Is tidetable healthy?"

## What it runs, sends and fetches

- It runs one file, `server.js`, with Node. That file starts one command: `shipyard mcp`, from the Shipyard program on your computer. If Shipyard is not installed it says so and stops.
- Shipyard calls the APIs of the providers you chose, with tokens you created, to create the resources shown in the plan. Costs go to your providers. The only purchase in a launch is the domain: Shipyard shows the price and waits for you to confirm it yourself, and a spend cap refuses anything above your limit.
- The plugin itself sends nothing anywhere and has no hooks.

## Privacy Policy

Your provider tokens are stored in your computer's keychain. They are not sent to shipyardmcp.com or to anyone else, and Claude never sees them: you paste them into Shipyard's own page, which runs on your computer. Shipyard checks your licence offline. The website stores only your account email, your stack choice and your licence. The full policy is at [shipyardmcp.com/privacy](https://shipyardmcp.com/privacy).

## Support

Write to hello@shipyardmcp.com. Docs are at [shipyardmcp.com/docs](https://shipyardmcp.com/docs).

## Licence

The files in this plugin are under the MIT licence. The Shipyard program is licensed separately.
