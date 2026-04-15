# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-04-16
### Added
- Export dust map markers as JSON file with image metadata and settings.
- Import dust map markers from previously saved JSON files.
- Full dust map documentation workflow: drop markers, export JSON, and reimport for future reference.
- Support for storing relative marker positions (percentage-based) to survive zoom and pan operations.

### Changed
- Dust Mapping UI now includes "Export JSON" and "Import JSON" options alongside existing export functionality.
- Enhanced dust map workflow to allow users to document, save, and restore dust spots for comparative analysis.

## [1.1.0] - 2026-04-15
### Added
- Color-coded RGB sliders in Light Screen Configuration (Red, Green, Blue thumbs).
- Custom checkbox styling with improved visual feedback and accessibility.
- Nigel Danson's camera sensor cleaning tutorial link in About modal for user reference.

### Changed
- Sensitivity slider now starts at 100% (previously 200%) for better default visibility.
- Sensitivity slider range extended to 0% - 2000% (previously 200% - 1000%).
- Light Screen RGB sliders now use consistent square-thumb styling matching the design system.
- Improved contrast on all UI elements (checkboxes, buttons, borders) for better visibility in both light and dark themes.
- Enhanced ESC key handling for Light Screen Configuration dialog and About modal for better UX.

### Fixed
- Checkboxes now display proper visual feedback with smooth color transitions.
- Light Screen config dialog can now be closed with ESC key.
- About modal can now be closed with ESC key.
- Checkmark color now properly adapts to light and dark themes for visibility.
- Border contrast issues on EXIF info box, buttons, and modals resolved.

## [1.0.0] - 2026-04-14
### Added
- Core image loading and rendering engine.
- Visualize Spots filters and sensitivity slider (200% - 1000%).
- Interactive infinite canvas with panning (click & drag) and zooming (mouse wheel).
- Dust mapping tools with high-visibility markers.
- HTML Canvas-based export map functionality to bake visualization filters and markers into a downloadable JPEG.
- EXIF shutter count and image number extraction upon upload using `exifr`.
- Complete theming system supporting "Rosé Pine Moon" (Dark) and "Rosé Pine Dawn" (Light) via CSS variables.
- Basic PWA manifest and service worker for offline capabilities.
- OTA upgrade logic tracking the `VERSION` file.
- Keyboard shortcuts for Light Screen mode (`Esc`, `W`, `B`, `R`, `G`, `B`).
- Global keyboard shortcut (`Ctrl/Cmd + U`) to check for updates.
- Copyright notice (C) devsimsek.

### Changed
- Improved Light screen RGB setup UI for better usability.
