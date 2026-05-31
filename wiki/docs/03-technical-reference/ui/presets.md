---
title: presets
description: Technical reference for src/ui/presets.js
---

<a name="module_ui/presets"></a>

## ui/presets
DNS Forge - Presets UI Module


* [ui/presets](#module_ui/presets)
    * _static_
        * [.loadPresets()](#module_ui/presets.loadPresets)
    * _inner_
        * [~applyPreset(preset)](#module_ui/presets..applyPreset)

<a name="module_ui/presets.loadPresets"></a>

### ui/presets.loadPresets()
Loads the available configuration presets from data/presets.json and renders them in the UI.
Attaches click listeners to the "Apply" buttons.

**Kind**: static method of [<code>ui/presets</code>](#module_ui/presets)  
<a name="module_ui/presets..applyPreset"></a>

### ui/presets~applyPreset(preset)
Applies a selected preset by sending multiple TOGGLE_SETTING messages to the background.
Invalidates the blocks data cache upon completion.

**Kind**: inner method of [<code>ui/presets</code>](#module_ui/presets)  

| Param | Type | Description |
| --- | --- | --- |
| preset | <code>Object</code> | The preset object containing settings, blocklists, etc. |

