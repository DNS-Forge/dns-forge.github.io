---
title: metadataManager
description: Technical reference for src/metadataManager.js
---

<a name="module_metadataManager"></a>

## metadataManager
Metadata Manager Utility
Handles loading and caching of TLD, Blocklist, and Service metadata.
Implements a robust fallback chain: Local Storage -> Remote GitHub -> Local Bundle.

<a name="module_metadataManager.loadMetadata"></a>

### metadataManager.loadMetadata() ⇒ <code>Promise.&lt;Object&gt;</code>
Loads metadata from the best available source.
Updates local storage if a remote fetch is successful.

**Kind**: static method of [<code>metadataManager</code>](#module_metadataManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The metadata object containing blocklists, tlds, etc.  
