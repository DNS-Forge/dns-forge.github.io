# Engineering Standards

DNS Forge enforces a **Zero-Regression Mandate** via strict architectural isolation and automated verification. Our standards ensure that the extension remains stable, secure, and performant as it scales.

---

## 🏗️ Architectural Isolation

### Modular Domains
Logic is strictly decoupled into distinct layers to prevent "spaghetti code" and side effects:
- **I/O Parsers:** Handle data transformation from the DOM or external sources.
- **API Clients:** Centralized, resilient communication with the NextDNS API.
- **UI Formatters:** Pure functions that transform raw data for display.

### ES Module Architecture
The extension uses a modern ES module layout:
- `src/background/`: Modular background logic (API, Handlers, State).
- `src/ui/`: Componentized popup and dashboard logic.
- `src/content/`: Isolated content script injections.

---

## 🛡️ Security & Integrity

### AMO Compliance
We maintain 100% compliance with Mozilla's Add-on (AMO) standards:
- **XSS Prevention:** All DOM manipulations use a hardened `setSafeHTML` helper powered by `DOMParser`.
- **Strict Content Security Policy (CSP):** Manifest v3 compliant script and resource handling.

### Source Integrity
- **GPG Signing:** All commits to the repository must be GPG-signed.
- **Hardware Backed:** Development workflows often involve hardware security keys (FIDO2) for identity verification.

---

## 🚀 Performance Heuristics

### Optimized UI Injections
The extension uses a high-performance `MutationObserver` to inject elements into the NextDNS dashboard, ensuring that UI enhancements are applied seamlessly as the dashboard updates dynamically.

### Resilient Storage
A centralized `StorageManager` implements a synchronous memory cache and automatic "healing" (syncing `sync` storage to `local` fallback) to prevent data loss.
