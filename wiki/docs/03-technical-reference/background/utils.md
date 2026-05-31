---
title: utils
description: Technical reference for src/background/utils.js
---

<a name="module_background/utils"></a>

## background/utils
DNS Forge - Background Utilities


* [background/utils](#module_background/utils)
    * [.getMatch(domain, listSet)](#module_background/utils.getMatch) ⇒ <code>string</code> \| <code>null</code>
    * [.handleBlockNotification(domain)](#module_background/utils.handleBlockNotification)

<a name="module_background/utils.getMatch"></a>

### background/utils.getMatch(domain, listSet) ⇒ <code>string</code> \| <code>null</code>
Checks if a domain or its parent domains are present in a given list (allowlist/denylist).
Implements recursive parent domain matching.

**Kind**: static method of [<code>background/utils</code>](#module_background/utils)  
**Returns**: <code>string</code> \| <code>null</code> - The matched domain from the set, or null if no match.  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>string</code> | The domain to check. |
| listSet | <code>Set.&lt;string&gt;</code> | The set of domains to match against. |

<a name="module_background/utils.handleBlockNotification"></a>

### background/utils.handleBlockNotification(domain)
Handles the logic for showing a browser notification when a request is blocked.
Implements a 10-second debouncing per domain to prevent notification spam.

**Kind**: static method of [<code>background/utils</code>](#module_background/utils)  

| Param | Type | Description |
| --- | --- | --- |
| domain | <code>string</code> | The blocked domain. |

