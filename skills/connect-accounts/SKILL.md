---
name: connect-accounts
description: Use when the user needs to connect or fix a provider account for Shipyard (GitHub, a host, Cloudflare, Resend, Stripe, an AI provider), asks which tokens or permissions are needed, or a launch stopped because an account is missing.
---

# Connect accounts for Shipyard

Shipyard works with the user's own provider accounts. Each is connected once with a token the user creates and pastes into Shipyard's setup page. You never see the token.

## Steps

1. Call `shipyard_credentials`. It lists each account the chosen stack needs, whether it is stored, where to create the token, the exact clicks, and the narrowest permissions that work with the reason for each.
2. Call `shipyard_setup` to open the setup page in the user's browser. That page runs on their computer and is where tokens are pasted and tested.
3. Walk the user through one account at a time, in the order the list gives. Read out the steps for that provider, and the items to set up at the provider first.
4. After each one, call `shipyard_credentials` again to confirm it is stored and passed its test.

## Rules

- Never ask for a token in the chat, and never offer to store one. If the user pastes one into the chat anyway, tell them to revoke it at the provider and create a new one.
- Recommend the permissions exactly as listed. Do not suggest broader ones to save time.
- Optional accounts, such as analytics and error tracking, can be skipped and added after launch. An AI provider and the core accounts cannot.
- To change which provider is used for a job, call `shipyard_stack` to show the options. The stack is changed by the user in the setup page or with `shipyard stack set`.
