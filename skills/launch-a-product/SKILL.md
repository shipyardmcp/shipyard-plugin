---
name: launch-a-product
description: Use when the user wants to launch, deploy or go live with a new product or SaaS, or asks to set up a domain, hosting, database, email or payments for one. Plans the launch with Shipyard, shows the cost, and runs it only after the user agrees.
---

# Launch a product with Shipyard

Shipyard is a program on the user's own computer. It sets up the domain, DNS, repository, hosting, database, sending email and payments for a new product, using the user's own provider accounts. You drive it through Shipyard's own MCP tools, which appear once the user has connected Shipyard (see below).

## Before anything else

1. Check whether you have tools whose names start with `shipyard_`. If you do, call `shipyard_overview`: it says whether Shipyard is licensed, which accounts are connected, and what to do next.
2. If you have no `shipyard_` tools, Shipyard is not connected to this Claude yet. Tell the user the two things to do, and wait for them:
   - **Install Shipyard**, if they have not: create an account at https://shipyardmcp.com and paste the two install lines from their account page into a terminal. Do not try to install it yourself.
   - **Connect it once.** In Claude Code that is one line in a terminal: `claude mcp add shipyard -- shipyard mcp`. Then start a new session.
3. If accounts are not connected yet, use the `connect-accounts` skill. You cannot add tokens: the user pastes them into Shipyard's own page.

## The launch, in order

1. Ask for three things if you do not have them: a short lower-case name, the web address they want, and one paragraph on what the product is and who it is for.
2. Call `shipyard_init` with those.
3. Call `shipyard_plan` and show the user the whole result: every step, what it creates, and what their providers charge. Read out the `before` list, which is what must be set up at the providers first.
4. Offer a rehearsal: `shipyard_apply` with the dry run option walks every step and changes nothing.
5. Run the real launch with `shipyard_apply` only after the user says yes to the plan.

## Rules you must keep

- **Money.** The only purchase in a launch is the domain. Shipyard stops and asks the user to confirm it themselves. Never confirm a purchase on the user's behalf, and never raise the spend cap unless they ask.
- **Secrets.** Never ask the user to paste a provider token into the chat. Tokens go into Shipyard's page and stay in the computer's keychain. Never print a secret.
- **Failures.** If a step stops, read the message and its "what to do" line to the user. Most stops are a missing setup item at a provider. After the user fixes it, run `shipyard_apply` again: it resumes from the step that stopped and does not create anything twice.
- **Waiting.** Some steps take minutes, such as the certificate and the email records. Tell the user how long, using `shipyard_status`, instead of retrying.

## When it finishes

Call `shipyard_prompt` and use the result as your brief for building the product: it names the real stack, the environment variable names and the conventions. Then use the `after-launch` skill.
