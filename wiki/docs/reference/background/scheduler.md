---
title: scheduler
description: Technical reference for src/background/scheduler.js
---

<a name="module_background/scheduler"></a>

## background/scheduler
DNS Forge - Background Scheduler

<a name="module_background/scheduler.checkAutomationRules"></a>

### background/scheduler.checkAutomationRules()
Periodically checks the stored automation rules against the current time.
If a rule's trigger matches the current HH:mm, the rule's action is executed.
Rules typically toggle settings or blocklists.

**Kind**: static method of [<code>background/scheduler</code>](#module_background/scheduler)  
