---
title: handlers
description: Technical reference for src/background/handlers.js
---

<a name="module_background/handlers"></a>

## background/handlers
DNS Forge - Message Handlers
This module defines the core message dispatcher for the background script.
It handles all incoming messages from the popup, options page, and viewer window, 
coordinating API calls, storage updates, and real-time streaming logic.

<a name="module_background/handlers.messageHandlers"></a>

### background/handlers.messageHandlers : <code>Object.&lt;string, function()&gt;</code>
Registry of message handlers keyed by message type.
Each handler is an asynchronous function that processes a specific request.

**Kind**: static constant of [<code>background/handlers</code>](#module_background/handlers)  
