# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
