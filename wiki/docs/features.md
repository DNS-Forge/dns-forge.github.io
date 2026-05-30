# Core Features

DNS Forge provides a comprehensive suite of tools for NextDNS users, ranging from diagnostic aids to advanced configuration management.

---

## 🧠 Intelligence & Diagnostics

### SSE Live Feed
Zero-latency log streaming via **Server-Sent Events (SSE)**. Monitor DNS queries in real-time within the Dashboard and Debugger without the delay of traditional polling.

### Forge Debugger
Identifies exactly which blocklist (OISD, NextDNS, etc.) is breaking a website. It correlates active tab requests with live DNS logs to pinpoint blocking rules instantly.

### Security Auditor
Proactively scans your NextDNS profile for security gaps and deprecated blocklists. It provides an actionable "Health Score" and suggestions for hardening your configuration.

---

## ⚡ Advanced Management

### Mirror Mode
Automatically replicate setting changes across multiple selected profiles in real-time. Change a setting once, and DNS Forge ensures all your profiles stay in sync.

### DNS Rewrites Manager
Full CRUD support for custom domain-to-IP mappings (e.g., `nas.local` → `192.168.1.50`) directly from the extension popup.

### Config Presets
One-click deployment of optimized settings via the Presets engine. Choose from:
- **Max Privacy:** Aggressive blocking and security hardening.
- **Family Safe:** Balanced protection for all ages.
- **Performance Boost:** Optimized for speed and low resolution latency.

---

## 🔍 Unified Dashboard & UI

### Analytics Trends
Visual activity trend indicators (e.g., "📈 15% increase") based on time-series analysis of your query volume, providing immediate insight into network activity changes.

### Real-Time Request Tracking
Visualizes every request made by the active tab with parent-domain matching and privacy grading, helping you understand what happens behind the scenes of every page load.

### Network Error Suppressor
Replaces intrusive "Network Error" modals on the NextDNS dashboard with non-intrusive toast notifications, preventing workflow interruptions during stream timeouts.
