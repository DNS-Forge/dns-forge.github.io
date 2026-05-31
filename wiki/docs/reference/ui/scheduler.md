---
title: scheduler
description: Technical reference for src/ui/scheduler.js
---

<a name="module_ui/scheduler"></a>

## ui/scheduler
DNS Forge - Scheduler UI Module


* [ui/scheduler](#module_ui/scheduler)
    * [.loadRules()](#module_ui/scheduler.loadRules)
    * [.saveAutomationRule()](#module_ui/scheduler.saveAutomationRule)

<a name="module_ui/scheduler.loadRules"></a>

### ui/scheduler.loadRules()
Loads the currently scheduled automation rules from the background and renders them in the UI.
Attaches click listeners to the delete buttons.

**Kind**: static method of [<code>ui/scheduler</code>](#module_ui/scheduler)  
<a name="module_ui/scheduler.saveAutomationRule"></a>

### ui/scheduler.saveAutomationRule()
Reads form data from the scheduler UI and saves a new automation rule via the background script.
Resets the form and reloads the rules list upon success.

**Kind**: static method of [<code>ui/scheduler</code>](#module_ui/scheduler)  
