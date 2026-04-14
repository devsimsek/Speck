# Speck - Sensor Analysis & Dust Mapping

Speck is a web-based utility designed for photographers to analyze camera sensors, map dust spots, and perform routine maintenance. It runs entirely in your browser with no build step required, replicating tools like Lightroom's "Visualize Spots" while adding hardware-focused utilities.

Copyright (C) devsimsek

## Features

- **Visualize Spots Engine:** Real-time CSS filtering (grayscale, invert, contrast) to highlight sensor dust. Adjustable sensitivity from 200% to 1000%.
- **Dust Mapping:** Click to drop high-visibility markers on identified dust spots.
- **Export Map:** Bake your visualization filters and dust markers into a downloadable JPEG map to use as a reference while cleaning your sensor.
- **Shutter Count Reader:** Automatically extracts EXIF/MakerNotes data to display your camera's shutter count upon image load.
- **Infinite Canvas:** Pan (click and drag) and zoom (mouse wheel) smoothly around high-resolution images.
- **Light Screen Mode:** Turn your monitor into a custom RGB light panel for inspecting physical camera components. Includes preset colors and keyboard shortcuts.
- **PWA & Offline Ready:** Installs as a standalone application and works completely offline after the first load.
- **OTA Updates:** Automatically checks for new versions via a semver-based `VERSION` file and prompts the user to refresh.
- **Theming:** Switch between "Rosé Pine Moon" (Dark) and "Rosé Pine Dawn" (Light) themes.

## Quick Start

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. (Optional) Install as a Progressive Web App (PWA) via your browser's address bar for offline desktop/mobile access.

## Keyboard Shortcuts

**Global:**
- `Ctrl/Cmd + U`: Check for updates (triggers OTA check)

**Light Screen Mode:**
- `Esc`: Exit Light Screen Mode
- `W`: Set Pure White (RGB 255, 255, 255)
- `B`: Set Pure Black (RGB 0, 0, 0)
- `R` / `G` / `B`: Maximize Red, Green, or Blue channels respectively.

## Documentation

For more detailed information, please refer to the documentation in the `docs/` directory:
- [Architecture](docs/ARCHITECTURE.md)
- [Usage Guide](docs/USAGE.md)
- [Changelog](docs/CHANGELOG.md)