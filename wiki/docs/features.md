# Core Features

DNS Forge provides a comprehensive suite of tools for NextDNS users, ranging from real-time diagnostic aids to advanced multi-profile management.

---

## 🧠 Intelligence & Diagnostics

### SSE Live Feed
Zero-latency log streaming via **Server-Sent Events (SSE)**.
*   **Real-Time Monitoring:** Observe DNS queries as they happen without manual polling.
*   **Performance:** Significantly lower overhead than traditional interval-based API requests.

### Forge Debugger
Correlates active tab requests with live DNS logs to identify issues.
*   **List Attribution:** Pinpoint exactly which blocklist (e.g., OISD, NextDNS) is breaking a specific website.
*   **Accuracy:** Matches tab-level network requests to background DNS resolution events.

### Security Auditor
Proactively scans your NextDNS configuration for vulnerabilities.
*   **Health Score:** Get an immediate assessment of your security posture.
*   **Gap Analysis:** Identifies deprecated blocklists and unconfigured security features.

---

## ⚡ Advanced Management

### Mirror Mode
Replicate setting changes across multiple selected profiles in real-time.
*   **Profile Sync:** Modify a setting once and apply it to all linked profiles.
*   **Efficiency:** Eliminates repetitive configuration tasks for multi-profile users.

### DNS Rewrites Manager
Full CRUD support for custom domain-to-IP mappings directly from the browser extension.
*   **Local Management:** Map `nas.local` or other internal domains without leaving your current tab.
*   **Validation:** Built-in IP and domain format verification.

### Config Presets
Deploy optimized settings templates with a single click.
*   **Max Privacy:** Aggressive security hardening and tracker blocking.
*   **Family Safe:** Balanced protection for all age groups.
*   **Performance Boost:** Low-latency resolution and resolution speed optimization.

---

## 🔍 Unified Dashboard & UI

### Analytics Trends
Visual activity trend indicators integrated into your logs.
*   **Insights:** View percentage increases or decreases in query volume over time.
*   **Forensics:** Identify spikes in malicious activity or device-specific anomalies.

### Real-Time Request Tracking
Deep visibility into the network activity of the current tab.
*   **Privacy Grading:** Every request is graded based on its destination and tracking behavior.
*   **Parent-Domain Matching:** Understand the hierarchy of requests initiated by a page load.

### Network Error Suppressor
Improves the reliability of the NextDNS dashboard.
*   **Non-Intrusive Notifications:** Replaces disruptive error modals with sleek toast notifications.
*   **Workflow Integrity:** Ensures your management session isn't interrupted by temporary stream timeouts.

### Mobile Dashboard Optimization
Enhanced responsiveness for the NextDNS management interface.
*   **Responsive Layout:** Fixes layout breaking on small screens, allowing for on-the-go profile management.
*   **Collapsible Sections:** Adds header-based section collapsing to the NextDNS dashboard for a cleaner mobile experience.
