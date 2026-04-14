# Architecture of Speck

Speck is built as a lightweight, zero-build-step client-side web application. It leverages modern browser APIs and external CDNs to deliver a seamless, installable desktop-like experience without needing a complex backend or build pipeline.

## Tech Stack

*   **Alpine.js**: Used for all reactive state management, event handling, and DOM manipulations.
*   **Tailwind CSS**: Used via its CDN compiler for rapid, utility-first styling.
*   **Exifr**: A robust library used to extract EXIF and MakerNote data (specifically for Shutter Count) directly in the browser.

## File Structure

*   `index.html`: The core of the application. Contains the UI structure, Tailwind configurations, and the `Alpine.data` object managing the application's state.
*   `sw.js`: A simple Service Worker that caches static assets and external CDN scripts, enabling offline functionality.
*   `manifest.json`: The Web App Manifest defining the app's metadata for PWA installation.
*   `VERSION`: A plain text file containing the current semantic version of the app, used by the Over-The-Air (OTA) update system.
*   `docs/`: Contains project documentation (Architecture, Changelog).

## Core Mechanisms

### State Management
All state is localized within a single Alpine.js component (`speckApp`). This includes UI toggles (visualize spots, light screen mode), image metadata (width, height, shutter count), navigation coordinates (panX, panY, zoom), and user preferences (theme).

### Image Rendering & Visualization
Instead of heavily manipulating a `<canvas>` element for the live preview, Speck uses a standard `<img>` tag wrapped in a transform-enabled container. 
*   **Panning/Zooming**: Handled via CSS `transform: translate() scale()` on the container, calculated by Alpine.js based on mouse wheel and drag events.
*   **Visualizer**: Handled via dynamic CSS `filter` properties (`grayscale`, `invert`, `contrast`), which are hardware-accelerated and highly performant.

### Map Export
When the user requests an export, the application dynamically generates an offscreen `<canvas>`, draws the original image, applies the CSS filters via the canvas context (`ctx.filter`), manually draws the dropped vector markers on top, and outputs a downloadable JPEG.

### OTA Updates
The application checks the `VERSION` file via a `fetch()` call (which can be triggered automatically on load or manually via keyboard shortcut). If the fetched version differs from the hardcoded `currentVersion` in the Alpine state, it prompts the user to apply the update. Applying the update clears the Service Worker cache and forces a hard reload.