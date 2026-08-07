<!-- agent-kit:core-dev:start -->
## Shared site workflow

The parent Pi session handles coding and copy by default. Every child is manual
and runs only when the current user explicitly requests that role:

- coding: `default -> architect|builder|reviewer`;
- page copy: `website-copy -> writer|editor`.

Call a role with `nano_agent_spawn(team="<team>", role="<role>", task="<bounded task>")`.
Never infer delegation from task size, risk, or another role's output. Never
invoke the next role automatically; multi-role work requires an explicit
current-user request naming each role.

Pass only the task, evidence, relevant paths, and unresolved decisions. Use
`rtk` for supported noisy console commands, with direct commands for unsupported
or unfiltered evidence. Children never publish or deploy. The parent owns scope,
product and offer decisions, integration, external actions, and final delivery.
<!-- agent-kit:core-dev:end -->
