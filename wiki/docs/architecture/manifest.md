# Extension Architecture: Manifest

The `manifest.json` defines the core configuration, permissions, and background processes of DNS Forge.

## Core Metadata
| Property | Value |
| --- | --- |
| **Name** | DNS Forge |
| **Version** | 0.9.3 |
| **Manifest Version** | 3 |

## Security Permissions
The following permissions are required for the extension to operate correctly.

| Permission | Description |
| --- | --- |
| `storage` | Access required for core functionality. |
| `alarms` | Access required for core functionality. |
| `tabs` | Access required for core functionality. |
| `menus` | Access required for core functionality. |
| `webRequest` | Access required for core functionality. |
| `webRequestBlocking` | Access required for core functionality. |
| `https://api.nextdns.io/*` | Host access for NextDNS API. |
| `https://test.nextdns.io/*` | Host access for NextDNS API. |
| `<all_urls>` | Host access for NextDNS API. |

## Background & Content Scripts
- **Background Scripts:** `src/background/main.js`
- **Content Scripts:** https://my.nextdns.io/*
