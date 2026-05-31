---
title: main
description: Technical reference for src/ui/main.js
---

<a name="module_ui/main"></a>

## ui/main
DNS Forge - Main Popup Entry Point (ES Module)
This module orchestrates the initialization and event management for the extension popup.
It coordinates theme management, tab navigation, and service initialization.


* [ui/main](#module_ui/main)
    * [~initWindowMode()](#module_ui/main..initWindowMode)
    * [~initThemeEngine()](#module_ui/main..initThemeEngine)
    * [~applyTheme(id)](#module_ui/main..applyTheme)
    * [~populateThemeDropdown()](#module_ui/main..populateThemeDropdown)
    * [~initGlobalEventListeners()](#module_ui/main..initGlobalEventListeners)
    * [~initTabNavigation()](#module_ui/main..initTabNavigation)
    * [~initializeApp()](#module_ui/main..initializeApp)
    * [~initMirrorModeUI()](#module_ui/main..initMirrorModeUI)
    * [~toggleAutoRefresh(enable)](#module_ui/main..toggleAutoRefresh)

<a name="module_ui/main..initWindowMode"></a>

### ui/main~initWindowMode()
Detects and applies CSS classes based on the current window mode (Popout vs Sidebar).
Adjusts body classes to enable mode-specific styling.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
<a name="module_ui/main..initThemeEngine"></a>

### ui/main~initThemeEngine()
Initializes the theme engine by loading the active theme and custom themes from storage.
Synchronizes the internal state and triggers theme application and dropdown population.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
<a name="module_ui/main..applyTheme"></a>

### ui/main~applyTheme(id)
Applies a specific theme ID to the document body.
Handles both standard light/dark modes and custom CSS variable-based themes.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The unique identifier of the theme to apply. |

<a name="module_ui/main..populateThemeDropdown"></a>

### ui/main~populateThemeDropdown()
Populates the theme selector dropdown with preset and custom user themes.
Utilizes setSafeHTML for AMO compliance during initial dropdown population.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
<a name="module_ui/main..initGlobalEventListeners"></a>

### ui/main~initGlobalEventListeners()
Binds global event listeners for UI interactions.
Covers tab switching, dashboard actions, tool triggers, and background message listeners.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
<a name="module_ui/main..initTabNavigation"></a>

### ui/main~initTabNavigation()
Determines the initial tab to display based on URL parameters.
Defaults to the 'dashboard' tab.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
<a name="module_ui/main..initializeApp"></a>

### ui/main~initializeApp()
Primary application bootstrap logic.
Fetches the active profile, starts the log stream, and initializes all sub-modules.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
<a name="module_ui/main..initMirrorModeUI"></a>

### ui/main~initMirrorModeUI()
Initializes the Mirror Mode UI, allowing users to select profiles for synchronization.
Fetches the list of all available profiles and binds the save handler.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  
<a name="module_ui/main..toggleAutoRefresh"></a>

### ui/main~toggleAutoRefresh(enable)
Toggles the auto-refresh mechanism for native dashboard logs.
Sets or clears an interval based on user preference and storage settings.

**Kind**: inner method of [<code>ui/main</code>](#module_ui/main)  

| Param | Type | Description |
| --- | --- | --- |
| enable | <code>boolean</code> | Whether to enable or disable auto-refresh. |

