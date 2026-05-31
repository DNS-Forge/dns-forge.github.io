# Changelog

All notable changes to the **DNS Forge Wiki** will be documented in this file.

## [1.2.0] - 2026-06-25
### Added
- **Comprehensive Technical Reference:** Integrated 20+ auto-generated pages covering all core ES modules.
- **Deep JSDoc Integration:** Extracted function signatures, parameter types, and module summaries directly from source code.
- **System Overview:** Added interactive Mermaid.js sequence diagrams detailing extension-to-API data flows.
- **Enhanced Navigation:** Implemented directory-based auto-discovery for the API Reference section.

### Fixed
- **JSDoc Parser Errors:** Resolved type expression conflicts in `apiClient.js` ensuring 100% build stability.
- **Icon Rendering:** Fixed broken Material for MkDocs icons by enabling the `pymdownx.emoji` extension.

## [1.1.0] - 2026-06-25
### Changed
- **Visual Overhaul:** Redesigned the landing page with a technical "Bare Metal" terminal block and Material design cards.
- **Terminology Update:** Renamed "Key Value Propositions" to **Core Capabilities** for a more professional tone.
- **Content Restructuring:** Reorganized documentation into distinct User (Features) and Technical (Standards, Pipeline) tracks.

### Added
- **Dark/Light Mode:** Added a sticky header with theme toggles and primary indigo color palette.
- **Engineering Standards:** New section detailing the "Zero-Regression Mandate" and AMO compliance protocols.

## [1.0.0] - 2026-06-24
### Added
- **Initial Infrastructure:** Migrated from Docusaurus 3 to **ProperDocs** (Material for MkDocs) for improved deployment stability.
- **Automated Content Generator:** Implementation of `.tools/generate-wiki-content.js` for manifest parsing and technical reference extraction.
- **GitHub Actions Deployment:** Configured automated build and deploy workflow using artifact-based delivery to GitHub Pages.
- **Domain Launch:** Wiki live at [dns-forge.github.io](https://dns-forge.github.io).
