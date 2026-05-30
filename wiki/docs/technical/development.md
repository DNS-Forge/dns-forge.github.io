# Development & Testing

DNS Forge is built with a focus on developer experience and comprehensive test coverage. Our ESM-native test suite ensures that logic is verified at every level of the application.

---

## 🧪 Testing Suite

We use Jest for our unit and integration tests. The suite has been fully migrated to **ESM-Native** to match the core engine.

### Key Test Domains:
- **Core Logic:** Verification of the Debugger, Scheduler, Auditor, and SSE streaming.
- **Resilience:** Testing storage auto-heal mechanisms and API exponential backoff.
- **UI Injections:** Verifying that dashboard elements are injected correctly and safely.
- **API Client:** Mocking NextDNS API responses to test rate-limiting and error handling.

```bash
# Run the full test suite
npm test
```

---

## 🛠️ Local Development

To set up a local development environment:

1.  **Clone the Repo:** `git clone https://github.com/DNS-Forge/firefox-addon.git`
2.  **Install Dependencies:** `npm install`
3.  **Load in Firefox:**
    - Open `about:debugging` in Firefox.
    - Click **"This Firefox"** -> **"Load Temporary Add-on"**.
    - Select the `manifest.json` file.
4.  **Configure API Key:** Open the extension options and enter your NextDNS API key.

---

## 📝 Coding Style

- **Modules:** Use ES modules exclusively.
- **Documentation:** Every public function must have a JSDoc comment.
- **Privacy:** Never log API keys or sensitive user data to the console.
- **Hardening:** Always use `setSafeHTML` when injecting data into the DOM.
