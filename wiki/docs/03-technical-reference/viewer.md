---
title: viewer
description: Technical reference for src/viewer.js
---

## Functions

<dl>
<dt><a href="#escapeHTML">escapeHTML()</a></dt>
<dd><p>Robust HTML escaping to prevent XSS</p>
</dd>
<dt><a href="#init">init()</a></dt>
<dd><p>Main Initialization</p>
</dd>
<dt><a href="#initEventListeners">initEventListeners()</a></dt>
<dd><p>Bind global UI events</p>
</dd>
<dt><a href="#refreshView">refreshView()</a></dt>
<dd><p>Central View Refresher</p>
</dd>
<dt><a href="#setSafeHTML">setSafeHTML()</a></dt>
<dd><p>Helper to safely set HTML from a string (AMO compliance)</p>
</dd>
<dt><a href="#loadSnapshots">loadSnapshots()</a></dt>
<dd><p>Phase 4.2: Profile Snapshots Logic</p>
</dd>
<dt><a href="#setupBackupTab">setupBackupTab()</a></dt>
<dd><p>Phase 3.1: Profile Cloning &amp; Backup Logic</p>
</dd>
<dt><a href="#fetchTldData">fetchTldData()</a></dt>
<dd><p>Fetch Metadata for TLD Manager (with Fallbacks)</p>
</dd>
<dt><a href="#fetchBlocklistData">fetchBlocklistData()</a></dt>
<dd><p>Fetch Metadata for Blocklist Manager (with Fallbacks)</p>
</dd>
<dt><a href="#loadMetadataIfNeeded">loadMetadataIfNeeded()</a></dt>
<dd><p>Robust Metadata Loader (Matches popup logic)</p>
</dd>
<dt><a href="#renderList">renderList()</a></dt>
<dd><p>Render the main content list</p>
</dd>
<dt><a href="#renderTlds">renderTlds()</a></dt>
<dd><p>Render TLD Manager Tab</p>
</dd>
<dt><a href="#renderBlocklists">renderBlocklists()</a></dt>
<dd><p>Render Blocklist Manager Tab</p>
</dd>
<dt><a href="#openEditModal">openEditModal()</a></dt>
<dd><p>Modal Actions (Add/Edit)</p>
</dd>
<dt><a href="#handleSave">handleSave()</a></dt>
<dd><p>Global Actions (Delete/Save)</p>
</dd>
<dt><a href="#handleApiToggle">handleApiToggle()</a></dt>
<dd><p>Generic API Toggle Handler (TLDs, Blocklists)</p>
</dd>
<dt><a href="#getStorageKey">getStorageKey()</a></dt>
<dd><p>Utility Helpers</p>
</dd>
</dl>

<a name="escapeHTML"></a>

## escapeHTML()
Robust HTML escaping to prevent XSS

**Kind**: global function  
<a name="init"></a>

## init()
Main Initialization

**Kind**: global function  
<a name="initEventListeners"></a>

## initEventListeners()
Bind global UI events

**Kind**: global function  
<a name="refreshView"></a>

## refreshView()
Central View Refresher

**Kind**: global function  
<a name="setSafeHTML"></a>

## setSafeHTML()
Helper to safely set HTML from a string (AMO compliance)

**Kind**: global function  
<a name="loadSnapshots"></a>

## loadSnapshots()
Phase 4.2: Profile Snapshots Logic

**Kind**: global function  
<a name="setupBackupTab"></a>

## setupBackupTab()
Phase 3.1: Profile Cloning & Backup Logic

**Kind**: global function  
<a name="fetchTldData"></a>

## fetchTldData()
Fetch Metadata for TLD Manager (with Fallbacks)

**Kind**: global function  
<a name="fetchBlocklistData"></a>

## fetchBlocklistData()
Fetch Metadata for Blocklist Manager (with Fallbacks)

**Kind**: global function  
<a name="loadMetadataIfNeeded"></a>

## loadMetadataIfNeeded()
Robust Metadata Loader (Matches popup logic)

**Kind**: global function  
<a name="renderList"></a>

## renderList()
Render the main content list

**Kind**: global function  
<a name="renderTlds"></a>

## renderTlds()
Render TLD Manager Tab

**Kind**: global function  
<a name="renderBlocklists"></a>

## renderBlocklists()
Render Blocklist Manager Tab

**Kind**: global function  
<a name="openEditModal"></a>

## openEditModal()
Modal Actions (Add/Edit)

**Kind**: global function  
<a name="handleSave"></a>

## handleSave()
Global Actions (Delete/Save)

**Kind**: global function  
<a name="handleApiToggle"></a>

## handleApiToggle()
Generic API Toggle Handler (TLDs, Blocklists)

**Kind**: global function  
<a name="getStorageKey"></a>

## getStorageKey()
Utility Helpers

**Kind**: global function  
