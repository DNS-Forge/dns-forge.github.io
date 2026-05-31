# Changelog

All notable changes to the **DNS Forge Wiki** will be documented in this file.

## [1.2.1] - 2025-05-31
### Added
- **Mobile Optimization Feature:** Documented the latest dashboard responsiveness and section collapsing improvements.
- **Improved JSDoc Coverage:** Added comprehensive documentation for `ui/blocks`, `ui/presets`, `ui/scheduler`, `ui/tools`, `background/requestListener`, `background/scheduler`, and `background/logStream`.
- **Installation Status:** Updated installation guide to reflect pending AMO review status.

### Changed
- **Flattened URL Structure:** Removed numbered subdirectories (`01-getting-started`, `02-architecture`, `03-technical-reference`) in favor of cleaner paths like `/installation/` and `/reference/`.

## [1.2.0] - 2025-05-30
### Added
- **Comprehensive Technical Reference:** Integrated 20+ auto-generated pages covering all core ES modules.
- **Deep JSDoc Integration:** Extracted function signatures, parameter types, and module summaries directly from source code.
- **System Overview:** Added interactive Mermaid.js sequence diagrams detailing extension-to-API data flows.
- **Enhanced Navigation:** Implemented directory-based auto-discovery for the API Reference section.

### Changed
- **Visual Overhaul:** Redesigned the landing page with a technical "Bare Metal" terminal block and Material design cards.
- **Terminology Update:** Renamed "Key Value Propositions" to **Core Capabilities** for a more professional tone.
- **Content Restructuring:** Reorganized documentation into distinct User (Features) and Technical (Standards, Pipeline) tracks.

### Added
- **Dark/Light Mode:** Added a sticky header with theme toggles and primary indigo color palette.
- **Engineering Standards:** New section detailing the "Zero-Regression Mandate" and AMO compliance protocols.

## [1.0.0] - 2025-05-29
### Added
- **Initial Infrastructure:** Migrated from Docusaurus 3 to **ProperDocs** (Material for MkDocs) for improved deployment stability.
- **Automated Content Generator:** Implementation of `.tools/generate-wiki-content.js` for manifest parsing and technical reference extraction.
- **GitHub Actions Deployment:** Configured automated build and deploy workflow using artifact-based delivery to GitHub Pages.
- **Domain Launch:** Wiki live at [dns-forge.github.io](https://dns-forge.github.io).
