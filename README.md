# 🛡️ DNS Forge Wiki

This repository contains the source code and documentation for the [DNS Forge Wiki](https://dns-forge.github.io), the official documentation portal for the DNS Forge Firefox Extension.

---

## 🏗️ Architecture

The wiki is built using **ProperDocs (Material for MkDocs)**, providing a high-performance, mobile-responsive documentation experience with a "Bare Metal" technical aesthetic.

### **Documentation Tracks**
1.  **Home & Features:** High-level overview of core capabilities and value propositions.
2.  **Architecture:** Deep dives into the modular engine, security model, and data flow (utilizing Mermaid.js).
3.  **Technical Guide:** Detailed engineering standards, AMO compliance protocols, and build pipeline documentation.
4.  **API Reference:** Automatically generated technical documentation extracted directly from the extension's source code.

---

## 📡 Automated Content Generation

The **Technical Reference** section of this wiki is not edited manually. It is synchronized with the main [DNS Forge Repository](https://github.com/DNS-Forge/firefox-addon) via an automated pipeline:

1.  **JSDoc Extraction:** The main repository contains a script `.tools/generate-wiki-content.js` that parses the `src/` directory.
2.  **Markdown Transformation:** JSDoc comments are transformed into structured Markdown pages.
3.  **Sync:** The generated files are pushed to this repository's `wiki/docs/03-technical-reference/` directory.

To update the technical documentation, please contribute JSDoc comments directly to the source files in the main repository.

---

## 🚀 Deployment

This wiki is deployed automatically to GitHub Pages via **GitHub Actions**:

- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** Every push to the `main` branch.
- **Artifact:** The site is built into a static artifact and served directly from the root of the `main` branch (required for GitHub User Pages).

---

## 🛠️ Local Development

To preview the wiki locally:

1.  Clone this repository.
2.  Install `properdocs` (Material for MkDocs):
    ```bash
    pip install mkdocs-material
    ```
3.  Run the local server:
    ```bash
    properdocs serve -f wiki/properdocs.yml
    ```
4.  Open `http://localhost:8000` in your browser.

---

## 📜 License
This documentation is licensed under the MIT License.
