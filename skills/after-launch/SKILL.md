---
name: after-launch
description: Use after a product has been launched with Shipyard, when the user asks what is next, whether the site is healthy, how to take real payments, how to improve SEO, how to announce the product, or how to shut a product down.
---

# After a launch

## Check health

Call `shipyard_check`. It tests the live site over HTTPS, the database, a test email and a test payment webhook. Report each result plainly. If one fails, give the user the "what to do" line and check again after they act.

## Build the product

Call `shipyard_prompt` and follow it as the project brief. It lists the environment variable names the app reads. Read variables by name; never write a value into the repository.

## Take real payments

Payments start in test mode. Going live needs the user's payment provider to have verified their business and a live key added in Shipyard's setup page. Then call `shipyard_go_live`. It asks the user to confirm with an exact phrase: let them type it; never supply it for them.

## Improve SEO a little each day

Call `shipyard_seo` for today's task: one small, concrete improvement written for this product, with a different focus each day. Do that one task well instead of a broad rewrite.

## Tell people

Call `shipyard_kit` for draft posts and screenshots of the live site. Shipyard never posts anywhere. Give the drafts to the user to post themselves.

## See everything, or shut it down

`shipyard_summary` lists every resource, where it lives and what it costs each month. `shipyard_destroy` first lists exactly what it would remove and needs the project name typed by the user to proceed. It never deletes a domain registration. Only call it when the user clearly asks to tear a product down.
