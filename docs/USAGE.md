# Speck Usage Guide

Welcome to Speck, your browser-based sensor analysis and dust mapping utility. This guide explains how to use the various tools provided by the application.

## 1. Getting Started

### Loading an Image
Click the **Choose File** button under the "Image Source" section in the sidebar. Select a JPEG or PNG image taken of a blank surface (like a clear blue sky or a white wall) with a narrow aperture (e.g., f/16 or f/22) to make dust spots most visible.

### Checking Shutter Count
Once an image is loaded, Speck automatically attempts to read the camera's EXIF and MakerNote data. If available, your camera's **Shutter Count** will appear in the top header next to the application title.

## 2. Navigating the Canvas

Speck provides an infinite canvas for easy inspection of high-resolution files:
*   **Zoom:** Use your mouse wheel to zoom in and out. The zoom centers on your mouse cursor.
*   **Pan:** Click and drag anywhere on the image to move around.
*   **Reset:** Click the "Reset View" button in the bottom right corner to fit the image back to the screen.

## 3. Finding Dust Spots

### Visualize Spots Engine
To make dust spots stand out, toggle **Visualize Spots** to **ON**. This applies a high-contrast, inverted grayscale filter to your image.
*   **Sensitivity Slider:** Adjust the slider (from 200% to 1000%) to increase or decrease the contrast. Higher sensitivity will reveal fainter dust spots but may also highlight sensor noise.

### Grid Overlay
Toggle the **Grid Overlay** checkbox to display a subtle grid over your image. This is highly recommended to help you systematically scan the sensor horizontally or vertically without missing areas.

## 4. Dust Mapping & Exporting

### Dust Mapping Mode
When you locate a dust spot, check the **Dust Mapping Mode** box. 
*   Your cursor will change to a crosshair.
*   Click directly on the dust spots to drop a high-visibility pink marker.
*   *Note: Panning is disabled while Dust Mapping Mode is active.*

### Exporting your Map
Once you have marked all the dust spots:
1.  Click **Export JPEG**.
2.  Speck will generate a downloadable image that bakes in your current visualizer filters and all the markers you dropped.
3.  Open this saved image on your phone or computer to use as a reference map while physically cleaning your camera sensor.

*To start over, click the **Clear Map** button to remove all markers.*

## 5. Utilities

### Light Screen Mode
This mode turns your monitor into a custom-colored light panel, useful for inspecting physical camera components or checking lenses for fungus/dust.
Click **Light Screen Mode** in the sidebar to open it.

**Keyboard Shortcuts in Light Screen Mode:**
*   `W`: Pure White
*   `B`: Pure Black
*   `R`: Pure Red
*   `G`: Pure Green
*   `Shift + B`: Pure Blue
*   `Esc`: Exit Light Screen Mode

Hover your mouse near the bottom of the screen to reveal manual RGB sliders.

## 6. General Features

*   **Theming:** Click the **Dawn (Light) / Moon (Dark)** button in the top right to toggle the UI theme. Your preference is saved automatically.
*   **Offline Use:** Speck is a Progressive Web App (PWA). Once loaded in your browser, it will continue to work completely offline. You can also install it as a standalone app via your browser's address bar.
*   **Updates:** Speck checks for updates automatically. If a new version is available, an "Update Available!" banner will appear in the header. Click it to reload the app. You can also manually check for updates by pressing `Ctrl/Cmd + U`.