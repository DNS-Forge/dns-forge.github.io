---
title: viewer
description: Technical reference for src/viewer.js
---

<a name="module_viewer"></a>

## viewer
DNS Forge - viewer.js
Logic for the full-screen Data Manager window.
This module handles advanced features like profile comparison, snapshots, backup/restore, 
and direct management of DNS Rewrites, TLDs, and Blocklists.

Performance & Security Refactor - June 2026


* [viewer](#module_viewer)
    * [~activeTab](#module_viewer..activeTab) : <code>string</code>
    * [~currentData](#module_viewer..currentData) : <code>Object</code>
    * [~profilesList](#module_viewer..profilesList) : <code>Array.&lt;Object&gt;</code>
    * [~activeProfile](#module_viewer..activeProfile) : <code>string</code> \| <code>null</code>
    * [~blocksMeta](#module_viewer..blocksMeta) : <code>Object</code>
    * [~activeTlds](#module_viewer..activeTlds) : <code>Set.&lt;string&gt;</code>
    * [~activeBlocklists](#module_viewer..activeBlocklists) : <code>Set.&lt;string&gt;</code>
    * [~initComparisonTab()](#module_viewer..initComparisonTab)
    * [~runComparison()](#module_viewer..runComparison)
    * [~escapeHTML(str)](#module_viewer..escapeHTML) ⇒ <code>string</code>
    * [~init()](#module_viewer..init)
    * [~initEventListeners()](#module_viewer..initEventListeners)
    * [~refreshView()](#module_viewer..refreshView)
    * [~setSafeHTML(el, html)](#module_viewer..setSafeHTML)
    * [~loadSnapshots()](#module_viewer..loadSnapshots)
    * [~compareSnapshots(id, snapshots)](#module_viewer..compareSnapshots)
    * [~restoreSnapshot(id, snapshots)](#module_viewer..restoreSnapshot)
    * [~setupBackupTab()](#module_viewer..setupBackupTab)
    * [~handleExportProfile()](#module_viewer..handleExportProfile)
    * [~handleImportProfile(e)](#module_viewer..handleImportProfile)
    * [~fetchTldData()](#module_viewer..fetchTldData)
    * [~fetchBlocklistData()](#module_viewer..fetchBlocklistData)
    * [~loadMetadataIfNeeded()](#module_viewer..loadMetadataIfNeeded)
    * [~renderList()](#module_viewer..renderList)
    * [~renderTlds(query)](#module_viewer..renderTlds)
    * [~renderBlocklists(query)](#module_viewer..renderBlocklists)
    * [~openEditModal(key)](#module_viewer..openEditModal)
    * [~openAddModal()](#module_viewer..openAddModal)
    * [~fetchRewritesData()](#module_viewer..fetchRewritesData)
    * [~handleSave()](#module_viewer..handleSave)
    * [~handleDelete(key)](#module_viewer..handleDelete)
    * [~handleApiToggle(btn)](#module_viewer..handleApiToggle)
    * [~getStorageKey()](#module_viewer..getStorageKey) ⇒ <code>string</code>
    * [~fetchProfiles()](#module_viewer..fetchProfiles)

<a name="module_viewer..activeTab"></a>

### viewer~activeTab : <code>string</code>
Currently active sub-tab ('domains', 'profiles', 'filters', 'hostnames', 'tlds', 'blocklists', 'backup', 'snapshots', 'comparison', 'rewrites')

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..currentData"></a>

### viewer~currentData : <code>Object</code>
Cache for the active tab's data (storage-based)

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..profilesList"></a>

### viewer~profilesList : <code>Array.&lt;Object&gt;</code>
List of available NextDNS profiles

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..activeProfile"></a>

### viewer~activeProfile : <code>string</code> \| <code>null</code>
Active profile ID for API calls

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..blocksMeta"></a>

### viewer~blocksMeta : <code>Object</code>
Metadata for TLDs & Blocklists fetched from remote or local bundle

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..activeTlds"></a>

### viewer~activeTlds : <code>Set.&lt;string&gt;</code>
Set of currently blocked TLD identifiers

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..activeBlocklists"></a>

### viewer~activeBlocklists : <code>Set.&lt;string&gt;</code>
Set of currently enabled blocklist identifiers

**Kind**: inner property of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..initComparisonTab"></a>

### viewer~initComparisonTab()
Initializes the Comparison tab UI by populating profile selectors.
Binds the comparison trigger button.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..runComparison"></a>

### viewer~runComparison()
Executes a deep configuration comparison between two selected NextDNS profiles.
Fetches settings for both and generates a visual diff of discrepancies.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..escapeHTML"></a>

### viewer~escapeHTML(str) ⇒ <code>string</code>
Robust HTML escaping to prevent XSS vulnerabilities.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
**Returns**: <code>string</code> - The escaped string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to escape. |

<a name="module_viewer..init"></a>

### viewer~init()
Main Initialization function for the viewer window.
Detects active profile, parses URL parameters for the initial tab, and triggers initial render.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..initEventListeners"></a>

### viewer~initEventListeners()
Binds global UI events for tab navigation, search, modal controls, and delegation for list items.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..refreshView"></a>

### viewer~refreshView()
Central View Refresher.
Updates the UI state, tab visibility, labels, and triggers data fetching for the active tab.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..setSafeHTML"></a>

### viewer~setSafeHTML(el, html)
Helper to safely set HTML from a string (AMO compliance).
Uses DOMParser to sanitize the HTML string before injection.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The element to update. |
| html | <code>string</code> | The HTML string to inject. |

<a name="module_viewer..loadSnapshots"></a>

### viewer~loadSnapshots()
Phase 4.2: Profile Snapshots Logic.
Fetches available snapshots from the background engine and renders them in the list.
Binds Compare, Restore, Delete, and Create Snapshot actions.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..compareSnapshots"></a>

### viewer~compareSnapshots(id, snapshots)
Compares two snapshots and displays a string-based diff of security and privacy settings.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the older snapshot to compare. |
| snapshots | <code>Array.&lt;Object&gt;</code> | The list of available snapshots. |

<a name="module_viewer..restoreSnapshot"></a>

### viewer~restoreSnapshot(id, snapshots)
Triggers a restoration of a profile from a snapshot.
Displays a progress log and notifies the user of completion.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the snapshot to restore. |
| snapshots | <code>Array.&lt;Object&gt;</code> | The list of available snapshots. |

<a name="module_viewer..setupBackupTab"></a>

### viewer~setupBackupTab()
Phase 3.1: Profile Cloning & Backup Logic.
Sets up the UI for exporting configurations and importing them to other profiles.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..handleExportProfile"></a>

### viewer~handleExportProfile()
Handles the export of the current profile's configuration to a JSON file.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..handleImportProfile"></a>

### viewer~handleImportProfile(e)
Handles the import of a configuration file and applies it to a target profile.
Implements step-by-step applying of security, privacy, blocklists, and parental controls.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | The file change event. |

<a name="module_viewer..fetchTldData"></a>

### viewer~fetchTldData()
Fetches the currently blocked TLDs for the active profile from the NextDNS API.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..fetchBlocklistData"></a>

### viewer~fetchBlocklistData()
Fetches the currently enabled blocklists for the active profile from the NextDNS API.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..loadMetadataIfNeeded"></a>

### viewer~loadMetadataIfNeeded()
Robust Metadata Loader.
Attempts to load TLD and Blocklist metadata from local storage, falling back to a remote GitHub URL, 
and finally a local bundle fallback.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..renderList"></a>

### viewer~renderList()
Renders the main content list based on the active tab.
Handles specialized rendering for TLDs and Blocklists, and generic key-value rendering for others.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..renderTlds"></a>

### viewer~renderTlds(query)
Renders the TLD Manager interface with alphabetical jump links and status toggles.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query to filter TLDs. |

<a name="module_viewer..renderBlocklists"></a>

### viewer~renderBlocklists(query)
Renders the Blocklist Manager interface as a responsive grid of descriptive cards.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The search query to filter blocklists. |

<a name="module_viewer..openEditModal"></a>

### viewer~openEditModal(key)
Opens the Edit Modal for an existing entry.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the entry to edit. |

<a name="module_viewer..openAddModal"></a>

### viewer~openAddModal()
Opens the Add Modal for a new entry.
Adjusts labels and input visibility based on the active tab (e.g., selecting a profile vs entering a domain).

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..fetchRewritesData"></a>

### viewer~fetchRewritesData()
Fetches the DNS Rewrite list for the active profile from the NextDNS API.
Maps the response into the local currentData cache.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..handleSave"></a>

### viewer~handleSave()
Handles the saving of an entry (new or edited) to browser storage or the NextDNS API.
Distinguishes between local storage keys (Domains, Filters, Hostnames) and API-managed keys (Rewrites).

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
<a name="module_viewer..handleDelete"></a>

### viewer~handleDelete(key)
Handles the deletion of an entry from browser storage or the NextDNS API.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The identifier of the entry to delete. |

<a name="module_viewer..handleApiToggle"></a>

### viewer~handleApiToggle(btn)
Generic API Toggle Handler for list-based settings (TLDs, Blocklists).
Manages the UI button state and dispatches toggle messages to the background engine.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  

| Param | Type | Description |
| --- | --- | --- |
| btn | <code>HTMLElement</code> | The toggle button element. |

<a name="module_viewer..getStorageKey"></a>

### viewer~getStorageKey() ⇒ <code>string</code>
Utility helper to map the active tab name to its corresponding browser storage key.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
**Returns**: <code>string</code> - The storage key name.  
<a name="module_viewer..fetchProfiles"></a>

### viewer~fetchProfiles()
Fetches the list of all available NextDNS profiles for use in selection dropdowns.

**Kind**: inner method of [<code>viewer</code>](#module_viewer)  
