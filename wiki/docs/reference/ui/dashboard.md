---
title: dashboard
description: Technical reference for src/ui/dashboard.js
---

<a name="module_ui/dashboard"></a>

## ui/dashboard
DNS Forge - Dashboard UI Module
Handles log rendering, analytics, and tab-specific request tracking for the dashboard view.


* [ui/dashboard](#module_ui/dashboard)
    * [.handleLiveLog(log)](#module_ui/dashboard.handleLiveLog)
    * [.renderLogs([logsOverride])](#module_ui/dashboard.renderLogs)
    * [.loadAnalytics()](#module_ui/dashboard.loadAnalytics)
    * [.loadNativeLogs()](#module_ui/dashboard.loadNativeLogs)
    * [.updateDashboardTabInfo()](#module_ui/dashboard.updateDashboardTabInfo)
    * [.updateDynamicLinks()](#module_ui/dashboard.updateDynamicLinks)

<a name="module_ui/dashboard.handleLiveLog"></a>

### ui/dashboard.handleLiveLog(log)
Handles incoming live log events from the background SSE stream.
Updates the internal log cache and prepends the log to the UI if the dashboard is active.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  

| Param | Type | Description |
| --- | --- | --- |
| log | <code>Object</code> | The DNS log object received from the stream. |

<a name="module_ui/dashboard.renderLogs"></a>

### ui/dashboard.renderLogs([logsOverride])
Renders the full list of logs to the dashboard container.
Applies active filters for search queries, device selection, and status (allowed/blocked).

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [logsOverride] | <code>Array</code> \| <code>null</code> | <code></code> | Optional override for the log array to render. |

<a name="module_ui/dashboard.loadAnalytics"></a>

### ui/dashboard.loadAnalytics()
Fetches and displays analytics summary and trend data for the active profile.
Calculates percentage change in activity based on time-series data.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  
<a name="module_ui/dashboard.loadNativeLogs"></a>

### ui/dashboard.loadNativeLogs()
Fetches recent historical logs from the NextDNS API.
Updates the state cache and triggers a full UI re-render of the log list.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  
<a name="module_ui/dashboard.updateDashboardTabInfo"></a>

### ui/dashboard.updateDashboardTabInfo()
Updates the "Tab Requests" panel with network request data specific to the active browser tab.
Calculates a privacy grade based on the ratio of blocked to total requests.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  
<a name="module_ui/dashboard.updateDynamicLinks"></a>

### ui/dashboard.updateDynamicLinks()
Updates the href attributes of deep-links to the official NextDNS web GUI.
Ensures that links point to the correct active profile.

**Kind**: static method of [<code>ui/dashboard</code>](#module_ui/dashboard)  
