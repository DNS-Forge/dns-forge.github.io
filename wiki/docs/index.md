# 🛡️ DNS Forge (for NextDNS)

<div class="terminal-block">
  <span class="prompt">guest@dns-forge:~$</span> ./status<br/>
  [SYSTEM] DNS Forge Node v0.9.3<br/>
  [STATUS] AMO Compliance: 100% Verified<br/>
  [STATUS] Security: Hardened<br/>
  [SYSTEM] Modular architecture active. Ready for diagnostics.
</div>

**DNS Forge** is a high-performance Firefox extension designed for advanced [NextDNS](https://nextdns.io) users. It provides a modular architecture, intelligent automation, and deep diagnostic tools to empower your DNS security posture.

---

## 🚀 Key Value Propositions

### 🧠 Intelligence & Diagnostics
DNS Forge goes beyond simple UI tweaks. It provides deep visibility into your DNS traffic:
- **SSE Live Feed:** Zero-latency log streaming via Server-Sent Events. Monitor DNS queries in real-time.
- **Forge Debugger:** Correlates active tab requests with live logs to identify exactly which blocklist is breaking a site.
- **Security Auditor:** Proactively scans for security gaps and deprecated lists with an actionable Health Score.

### ⚡ Advanced Management
Built for power users who manage multiple profiles and complex rulesets:
- **Mirror Mode:** Automatically replicate setting changes across multiple profiles in real-time.
- **DNS Rewrites Manager:** Full CRUD support for custom domain-to-IP mappings directly from the browser.
- **Config Presets:** One-click deployment of optimized settings like "Max Privacy" or "Family Safe".

### 📡 Reliability & Architecture
Engineered for stability and performance:
- **Modular Componentization:** Fully decoupled ES modules for background and UI logic.
- **Centralized Storage:** Synchronous memory cache with automatic healing.
- **100% AMO Compliance:** Fully hardened against XSS via strict sanitization and manifest permissions.

---

## 🛠️ Engineering Philosophy

We enforce a **Zero-Regression Mandate** via architectural isolation. Every component is designed to be independent, testable, and resilient to changes in the underlying NextDNS dashboard.

- **Modular Domains:** Logic is isolated into I/O Parsers, API Clients, and UI Formatters.
- **Linter Integration:** Integrated Mozilla `addons-linter` verification for every build.
- **Performance Optimized:** High-performance `MutationObserver` for real-time DOM injections.

---

<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } __Quick Setup__

    ---

    Get up and running in seconds. [Installation Guide](01-getting-started/installation.md)

-   :material-file-tree:{ .lg .middle } __Architecture__

    ---

    Deep dive into the modular system. [System Overview](architecture/overview.md)

-   :material-test-tube:{ .lg .middle } __Reliability__

    ---

    Learn about our ESM-native test suite. [Development](technical/development.md)

-   :material-api:{ .lg .middle } __API Reference__

    ---

    Automated technical documentation. [API Overview](03-technical-reference/viewer.md)

</div>
