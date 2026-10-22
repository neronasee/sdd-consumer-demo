# sdd-consumer-demo

Acceptance project for the L08 lab: a standalone consumer repository that installs the **sdd-engineering** plugin (and its dependencies) from the [dev-digest-ai-marketplace](https://github.com/neronasee/dev-digest-ai-marketplace) Claude Code plugin marketplace.

It shares no files with the marketplace's source project — everything the plugin needs ships inside the plugin itself. This repository exists to prove that.

## What is installed

| Plugin | Why |
|---|---|
| `sdd-engineering` | Spec-driven development pipeline: spec-creator → implementation-planner → implement-plan (implementer → plan-verifier → architecture-reviewer) → workflow-retro |
| `research-tools` | dependency — `researcher` agent |
| `architecture-review` | dependency — `architecture-reviewer` agents |
| `engineering-paved-path` | dependency — 12 best-practice skills |

## Install (already applied here)

```bash
claude plugin marketplace add neronasee/dev-digest-ai-marketplace
claude plugin install sdd-engineering@dev-digest-ai-marketplace --scope project
```

The project-scoped install is recorded in [`.claude/settings.json`](.claude/settings.json) (committed — that is part of the evidence).

## The fixture

`src/calculator.ts` is a deliberately tiny module used as the workpiece for smoke runs: small enough to keep agent runs cheap, real enough for the pipeline to have something to read and change.

## Evidence

[`docs/evidence/`](docs/evidence/) holds the acceptance trail, one artifact per lab stage:

- `install-1.0.0.json` — `claude plugin list --json` snapshot after the initial install
- `smoke-1.0.0.md` — functional proof without any local marketplace files
- `update-1.1.0.json` — snapshot after the update drill
- `rollback-*-before/after.json` — rollback rehearsal snapshots
