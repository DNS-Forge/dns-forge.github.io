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

## 🚀 Core Capabilities

### 🧠 Intelligence & Diagnostics
DNS Forge provides deep visibility into your DNS traffic and automates the identification of configuration issues.

*   **SSE Live Feed:** Zero-latency log streaming via Server-Sent Events for real-time monitoring.
*   **Forge Debugger:** Correlates active tab requests with live logs to pinpoint breaking blocklists.
*   **Security Auditor:** Scans profiles for security gaps and deprecated lists with an actionable Health Score.

### ⚡ Advanced Management
Built for power users who require precise control over multiple NextDNS profiles and complex rulesets.

*   **Mirror Mode:** Synchronize setting changes across multiple profiles automatically in real-time.
*   **DNS Rewrites Manager:** Direct CRUD management for custom domain-to-IP mappings.
*   **Config Presets:** One-click deployment of optimized security and privacy templates.

### 📡 Reliability & Architecture
Engineered with a focus on stability, performance, and security compliance.

*   **Modular Componentization:** Fully decoupled ES modules for background and UI logic.
*   **Centralized Storage Manager:** Synchronous memory cache with automatic data healing.
*   **AMO Compliance:** Hardened against XSS via strict sanitization and scoped manifest permissions.

---

## 🛠️ Engineering Philosophy

We enforce a **Zero-Regression Mandate** through architectural isolation, ensuring every component is independent and testable.

*   **Modular Domains:** Logic is isolated into specialized I/O Parsers, API Clients, and UI Formatters.
*   **Automated Verification:** Integrated Mozilla `addons-linter` verification for every build artifact.
*   **Performance Optimization:** Efficient `MutationObserver` implementation for seamless DOM injections.

---

<div class="grid cards" markdown>

-   :material-clock-fast: **Quick Setup**

    ---

    Get up and running in seconds.

    [:octicons-arrow-right-24: Installation Guide](01-getting-started/installation.md)

-   :material-file-tree: **Architecture**

    ---

    Deep dive into the modular system.

    [:octicons-arrow-right-24: System Overview](architecture/overview.md)

-   :material-test-tube: **Reliability**

    ---

    Learn about our ESM-native test suite.

    [:octicons-arrow-right-24: Development](technical/development.md)

-   :material-api: **API Reference**

    ---

    Automated technical documentation.

    [:octicons-arrow-right-24: API Overview](03-technical-reference/index.md)

</div>
