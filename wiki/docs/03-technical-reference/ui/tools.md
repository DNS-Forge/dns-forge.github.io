---
title: tools
description: Technical reference for src/ui/tools.js
---

<a name="module_ui/tools"></a>

## ui/tools
DNS Forge - Tools UI Module (Auditor & Debugger)


* [ui/tools](#module_ui/tools)
    * [.runIntelligentDebugger()](#module_ui/tools.runIntelligentDebugger)
    * [.runSecurityAudit()](#module_ui/tools.runSecurityAudit)

<a name="module_ui/tools.runIntelligentDebugger"></a>

### ui/tools.runIntelligentDebugger()
Executes the "Forge Debugger" logic.
Correlates background web request tracking with live NextDNS API logs to identify which list is blocking a domain.
Renders findings with "Allow" buttons for quick whitelisting.

**Kind**: static method of [<code>ui/tools</code>](#module_ui/tools)  
<a name="module_ui/tools.runSecurityAudit"></a>

### ui/tools.runSecurityAudit()
Executes the "Security Auditor" scan.
Analyzes the active NextDNS profile for security gaps and deprecated blocklists.
Calculates a health score and provides actionable recommendations.

**Kind**: static method of [<code>ui/tools</code>](#module_ui/tools)  
