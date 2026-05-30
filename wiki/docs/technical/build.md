# Build & Pipeline

DNS Forge utilizes a fully automated CI/CD pipeline to ensure every release meets our high standards for security and reliability.

---

## 🏗️ Build Lifecycle

Every push to the `main` branch triggers a multi-stage GitHub Actions workflow:

1.  **Environment Setup:** Node.js 20 environment with cached `npm` dependencies.
2.  **Linting:** Runs `npm run lint` to enforce project-specific coding styles.
3.  **Unit Testing:** Executes the full 35-test Jest suite (`npm test`).
4.  **AMO Verification:** Builds the production `.xpi` and runs the official Mozilla `addons-linter` (`npm run lint:addon`).
5.  **Artifact Generation:** Packages the production-ready extension.

---

## 🛡️ AMO Compliance Scan

A critical step in our pipeline is the automated compliance scan. We use a custom-built integration of the `addons-linter` that:
- Targets the actual compiled `.xpi` artifact.
- Enforces strict rules for Manifest v3.
- Flags potential XSS or security vulnerabilities before they reach the user.

```bash
# Run the compliance scan locally
npm run lint:addon
```

---

## 📡 Automated Documentation

This wiki itself is part of the build pipeline!
- Technical references are extracted directly from source JSDoc.
- Architecture docs are generated from `manifest.json`.
- The site is built with `ProperDocs` and deployed via GitHub Actions.
