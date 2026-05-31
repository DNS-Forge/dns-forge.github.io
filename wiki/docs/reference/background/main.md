---
title: main
description: Technical reference for src/background/main.js
---

<a name="module_background/main"></a>

## background/main
DNS Forge - Background Engine (ES Module)
This is the main entry point for the background service worker.
It initializes storage, registers network request listeners, manages context menus, 
and handles background alarms and messaging.


* [background/main](#module_background/main)
    * _static_
        * [.initializeBackground()](#module_background/main.initializeBackground)
    * _inner_
        * [~setupContextMenus()](#module_background/main..setupContextMenus)

<a name="module_background/main.initializeBackground"></a>

### background/main.initializeBackground()
Bootstraps the background engine.
Initializes storage, sets up context menus, registers request and message listeners, 
and starts periodic tasks (alarms).

**Kind**: static method of [<code>background/main</code>](#module_background/main)  
<a name="module_background/main..setupContextMenus"></a>

### background/main~setupContextMenus()
Creates the extension's context menu entries for allowing/denying domains.

**Kind**: inner method of [<code>background/main</code>](#module_background/main)  
