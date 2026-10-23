# Smoke evidence: sdd-engineering@1.0.0 in this repository

- Date: 2026-10-23T07:55:49Z
- Command: `claude -p "Name the subagents available from installed plugins in this repository, and name the skill that drives the implement -> verify -> review pipeline. Answer briefly, as a list."`
- Context: this repository shares no files with the marketplace's source project — every agent and skill below ships inside the installed plugins.
- Install: `claude plugin marketplace add neronasee/dev-digest-ai-marketplace` + `claude plugin install sdd-engineering@dev-digest-ai-marketplace --scope project` (dependencies auto-installed)

## Output

**Subagents from installed plugins:**
- `architecture-review:architecture-reviewer`
- `architecture-review:architecture-reviewer-lite`
- `research-tools:researcher`
- `sdd-engineering:spec-creator`
- `sdd-engineering:implementation-planner`
- `sdd-engineering:implementer`
- `sdd-engineering:plan-verifier`

**Skill driving the implement → verify → review pipeline:**
- `sdd-engineering:implement-plan`
