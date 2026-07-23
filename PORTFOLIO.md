# Photon — Digital Image Processing Studio

> A full-stack, browser-based Digital Image Processing (DIP) platform built from scratch with real-time image manipulation, computer vision algorithms, histogram analysis, AI-powered object detection, and custom compression codecs.

---

## 🎯 Project Overview

**Photon** is a professional-grade web application that brings the power of desktop image editors like Photoshop into the browser. It combines a **pixel-level JavaScript image processing engine** with a **Python/OpenCV backend** for advanced computer vision operations — all wrapped in a polished, desktop-class UI with menus, toolbars, panels, and keyboard shortcuts.

The project was developed as a **Digital Image Processing (Pengolahan Citra Digital / PCD)** course project, implementing virtually every core DIP algorithm from scratch while also providing a production-quality user experience.

---

## ✨ Complete Feature List

### 1. Project Management & Dashboard
- **Project Dashboard** — Grid-based project browser with thumbnail previews, timestamps, and dimensions
- **New Project Modal** — Create projects with preset resolutions (HD, Full HD, 2K, 4K, Square) or custom dimensions
- **Auto-naming System** — Smart sequential naming (Untitled, Untitled-1, Untitled-2…) that finds the lowest available number
- **Auto-Save** — Projects auto-save every 30 seconds and on browser close/refresh
- **Refresh Recovery** — Automatically restores the last-edited project after page refresh via localStorage tracking
- **Project CRUD** — Full Create, Read, Update, Delete with confirmation dialogs

### 2. Image I/O & Clipboard
- **Open Image** — Load images from disk via file dialog (Ctrl+O)
- **Paste from Clipboard** — Paste images directly from clipboard (Ctrl+V), including screenshots and copied images
- **Drag & Drop** — Drag image files directly onto the canvas
- **Export System** — Advanced export modal with 5 compression methods and multiple output formats (see Compression section below)
- **Save Project** — Persist project state including canvas, image transforms, and metadata (Ctrl+S)

### 3. Geometric Transformations
- **Resize / Scale** — Resize with width, height, and interpolation method selection (Nearest, Bilinear, Bicubic)
- **Crop** — Interactive crop tool with draggable region, corner handles, and live dimension display
- **Rotation (Free)** — Arbitrary angle rotation with live slider preview
- **Rotation (Preset)** — 90° CW, 90° CCW, and 180° rotation
- **Flip** — Horizontal and Vertical flip
- **Translation (Shift)** — Move the image by X/Y pixel offset
- **Interactive Move & Resize** — Direct manipulation on canvas: drag to move, corner handles to resize

### 4. Image Enhancement
- **Brightness & Contrast** — Dual-slider real-time adjustment with live preview and reset
- **Histogram Equalization** — Automatic contrast enhancement using cumulative distribution function (CDF)
- **Sharpen** — Convolution-based sharpening with configurable intensity slider
- **Live Preview Snapshots** — Non-destructive editing: adjustments preview on a snapshot; only committed on "Apply"

### 5. Color Processing
- **Hue / Saturation / Lightness** — HSL-based color adjustment with triple sliders and live preview
- **Grayscale Conversion** — Weighted luminance conversion (0.299R + 0.587G + 0.114B)
- **Channel Isolation** — Extract individual Red, Green, or Blue channels
- **Color Space Conversion** — RGB ↔ HSL transformations for color manipulation

### 6. Filtering & Smoothing
- **Gaussian Blur** — Configurable kernel size (3–31) with real-time preview
- **Box Blur** — Uniform averaging filter with adjustable radius
- **Median Filter** — Non-linear noise reduction filter preserving edges
- **Bilateral Filter** — Edge-preserving smoothing with spatial + range parameters
- **Salt & Pepper Noise** — Add controllable impulse noise for testing
- **Gaussian Noise** — Add random Gaussian noise with adjustable sigma

### 7. Edge Detection (6 Algorithms)
All edge detection algorithms are implemented from scratch in JavaScript (with Python/OpenCV backend fallback):

| Algorithm | Type | Description |
|-----------|------|-------------|
| **Canny** | Multi-stage | Gradient magnitude + Non-max suppression + Hysteresis thresholding (configurable low/high thresholds) |
| **Sobel** | First-order | 3×3 gradient operator in X and Y directions, magnitude computed via √(Gx² + Gy²) |
| **Prewitt** | First-order | Similar to Sobel but with uniform gradient kernel weights |
| **Robert** | First-order | 2×2 cross-gradient operator for diagonal edge detection |
| **Laplacian** | Second-order | Detects edges via second derivative (zero crossings), using 3×3 Laplacian kernel |
| **Laplacian of Gaussian (LoG)** | Second-order | Gaussian smoothing + Laplacian — reduces noise sensitivity |

### 8. Morphological Operations
- **Erosion** — Shrinks bright regions; removes small noise with configurable kernel size and iterations
- **Dilation** — Expands bright regions; fills small holes with configurable kernel size and iterations

### 9. Thresholding
- **Binary Threshold** — Fixed threshold with adjustable level (0–255)
- **Configurable Parameters** — Threshold value slider with real-time preview
- **Live Preview** — Non-destructive preview before applying

### 10. Image Segmentation (3 Methods)
| Method | Description |
|--------|-------------|
| **Threshold-based** | Segments image into foreground/background using a configurable threshold value |
| **Edge-based** | Uses Canny edge detection to identify region boundaries, then segments |
| **Region-based** | Region-growing approach with adjustable tolerance for pixel grouping, color-coded segments |

### 11. AI Object Recognition (CNN)
- **YOLOv4-tiny Model** — Real-time object detection using the COCO dataset (80 object classes)
- **Category Filtering** — Detect specific categories: People, Vehicles, Animals, Food, Furniture, Electronics, Kitchen items, Accessories
- **Confidence Threshold** — Adjustable minimum confidence (0.0–1.0) for detection filtering
- **Visual Bounding Boxes** — Color-coded detection boxes overlaid on the canvas with class labels and confidence scores
- **Non-Maximum Suppression (NMS)** — Eliminates redundant overlapping detections

### 12. Histogram Analysis & Visualization
- **Real-time Histogram** — Live RGB and Luminance histogram rendered on canvas, updated on every image change
- **Channel Toggles** — Toggle individual R, G, B, and Luminance (L) channels on/off
- **Statistics Panel** — Displays Mean, Standard Deviation, Min, and Max pixel values
- **Debounced Updates** — Efficient rendering with timer-based refresh to avoid excessive redraws

### 13. Image Compression & Export (5 Codecs)
The export system implements **5 compression algorithms** with educational descriptions and format-specific encoding:

| Compression Method | Type | Output Formats | Description |
|-------------------|------|----------------|-------------|
| **Quantization** | Lossy | JPEG, PNG, BMP | Reduces precision of pixel values; quality slider controls quantization table |
| **Huffman Coding** | Lossless | TIFF, Custom (.huff) | Variable-length coding — shorter codes for frequent pixel values using binary tree |
| **Arithmetic Coding** | Lossless | Custom (.arith) | Encodes entire image as a single fractional number between 0 and 1 |
| **LZW** | Lossless | GIF, TIFF, Custom (.lzw) | Dictionary-based compression — builds pattern table during encoding |
| **RLE (Run-Length Encoding)** | Lossless | BMP, TIFF, Custom (.rle) | Replaces consecutive runs of identical values with value + count pairs |

- **Custom File Format** — PHOTON custom binary format with 16-byte header (magic bytes, method ID, dimensions)
- **Size Estimation** — Real-time estimated file size display before export
- **Compression Ratio** — Shows original vs. compressed size comparison

### 14. User Interface & UX
- **Desktop-class UI** — Menu bar, toolbar, canvas workspace, and right panels (Properties, Histogram, Layers)
- **Context-sensitive Properties Panel** — Panel content dynamically changes based on the active tool
- **Keyboard Shortcuts** — Full shortcut system (Ctrl+O, Ctrl+S, Ctrl+E, Ctrl+Z, Ctrl+Y, Ctrl+V, Delete, Ctrl+B, Ctrl+=/-)
- **Undo / Redo** — Full history stack with state snapshots for non-destructive editing
- **Zoom Controls** — Zoom In/Out (25%–500%), Fit to Screen, Actual Size (100%)
- **Before/After Compare** — Split view to compare original and processed image
- **Collapsible Panels** — Toggle right panel visibility (Ctrl+B)
- **Status Bar** — Real-time status messages, zoom level, and image dimensions display
- **Splash Screen** — Animated welcome screen with feature overview cards
- **Interactive Feature Guide** — Step-by-step page tour for onboarding new users
- **Confirm Dialogs** — Styled confirmation modals for destructive actions (delete, reset)

### 15. Authentication & Multi-user
- **User Registration & Login** — Username/password authentication via Flask backend
- **Guest Mode** — "Continue as Guest" option for local-only usage without account
- **Session Management** — Server-side session with Flask; client-side auth state via sessionStorage
- **Unified Project Store** — Automatically routes to server (MySQL) when logged in, or local (IndexedDB) for guests

### 16. State Management & Architecture
- **Reactive State System** — Publish/subscribe state management (`setState` / `subscribe`) driving UI updates
- **Hash-based Router** — SPA routing (`#/login`, `#/dashboard`, `#/editor`, `#/editor/:projectId`) with parameter parsing
- **Lazy Component Mounting** — Editor components initialized only on first visit for fast dashboard load
- **Modular Service Architecture** — Each DIP domain (Edge, Filter, Color, Enhance, Segment, AI) in its own service module

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **JavaScript (ES Modules)** | Core application logic, image processing algorithms, reactive state management |
| **HTML5 Canvas API** | Pixel-level image rendering, manipulation, and compositing |
| **CSS3** | Handcrafted UI with CSS custom properties (design tokens), animations, glassmorphism |
| **Vite** | Build tool and development server with hot module replacement |
| **IndexedDB** | Client-side persistent storage for guest-mode project data |
| **Web APIs** | Clipboard API, File API, Drag & Drop API, Blob/URL APIs |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Python 3.10+** | Server-side language |
| **Flask** | Lightweight web framework with Blueprint-based routing |
| **Flask-CORS** | Cross-Origin Resource Sharing for frontend-backend communication |
| **OpenCV (cv2)** | Advanced computer vision: edge detection, morphology, segmentation, color processing |
| **NumPy** | High-performance array operations for pixel data manipulation |
| **Pillow (PIL)** | Image format conversion and I/O (JPEG, PNG, BMP, GIF, TIFF encoding) |
| **YOLOv4-tiny + OpenCV DNN** | Deep learning object detection model (COCO 80-class) |
| **PyMySQL** | MySQL database connector for authenticated user/project storage |

### Database
| Technology | Purpose |
|-----------|---------|
| **IndexedDB** | Browser-local storage for guest users (zero server dependency) |
| **MySQL** | Server-side relational database for authenticated users and projects |

### DevOps & Deployment
| Technology | Purpose |
|-----------|---------|
| **Vercel** | Frontend hosting + Python Serverless Functions for backend API |
| **Git / GitHub** | Version control and CI/CD pipeline |

---

## 🏗 Architecture

```
┌────────────────────────────────────────────────────────┐
│                    Frontend (Vite + JS)                 │
│                                                        │
│  ┌──────────┐  ┌───────────┐  ┌─────────────────────┐ │
│  │  Router   │  │   State   │  │    Shortcuts        │ │
│  │ (Hash)    │  │ (Pub/Sub) │  │    Manager          │ │
│  └────┬─────┘  └─────┬─────┘  └─────────────────────┘ │
│       │              │                                  │
│  ┌────▼──────────────▼──────────────────────────────┐  │
│  │              UI Components                        │  │
│  │  MenuBar · Toolbar · Canvas · PropertiesPanel    │  │
│  │  HistogramPanel · Dashboard · ExportModal · ...  │  │
│  └────────────────────┬─────────────────────────────┘  │
│                       │                                  │
│  ┌────────────────────▼─────────────────────────────┐  │
│  │            Service Layer (JS)                     │  │
│  │  ImageEngine · EdgeService · FilterService       │  │
│  │  ColorService · EnhanceService · SegmentService  │  │
│  │  AIService · HistoryStack · ClipboardService     │  │
│  │  TransformService · ProjectStore                 │  │
│  └────────────────────┬─────────────────────────────┘  │
│                       │ REST API                        │
└───────────────────────┼────────────────────────────────┘
                        │
┌───────────────────────▼────────────────────────────────┐
│                 Backend (Flask + Python)                │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │              API Routes (Blueprints)              │  │
│  │  /health · /image · /transform · /enhance        │  │
│  │  /color · /filter · /edge · /segment             │  │
│  │  /histogram · /ai · /auth · /projects            │  │
│  └────────────────────┬─────────────────────────────┘  │
│                       │                                 │
│  ┌────────────────────▼─────────────────────────────┐  │
│  │              Services                             │  │
│  │  OpenCV · NumPy · Pillow · Compression Codecs    │  │
│  │  YOLOv4-tiny (DNN) · DB Service                  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Photon/
├── index.html                    # HTML shell (SPA entry point)
├── package.json                  # Node.js dependencies (Vite)
├── vite.config.js                # Vite build configuration
├── vercel.json                   # Vercel deployment config
├── requirements.txt              # Python dependencies (Vercel)
│
├── src/                          # Frontend source code
│   ├── main.js                   # Application entry point & router boot
│   ├── components/               # UI Components (20 modules)
│   │   ├── Canvas.js             # Canvas workspace & rendering
│   │   ├── Dashboard.js          # Project dashboard
│   │   ├── ExportModal.js        # Export with compression methods
│   │   ├── HistogramPanel.js     # Real-time histogram visualization
│   │   ├── InteractionLayer.js   # Image move/resize/crop interaction
│   │   ├── MenuBar.js            # Application menu system
│   │   ├── NewProjectModal.js    # Project creation wizard
│   │   ├── PropertiesPanel.js    # Context-sensitive tool properties
│   │   ├── Toolbar.js            # Tool selection sidebar
│   │   └── ...                   # (+ 11 more components)
│   ├── services/                 # Business logic & algorithms (13 modules)
│   │   ├── ImageEngine.js        # Core image I/O, transforms, rendering
│   │   ├── EdgeService.js        # 6 edge detection algorithms
│   │   ├── FilterService.js      # Blur, noise, median filtering
│   │   ├── ColorService.js       # HSL, grayscale, channel operations
│   │   ├── EnhanceService.js     # Brightness, contrast, equalization
│   │   ├── SegmentService.js     # 3 segmentation methods
│   │   ├── AIService.js          # YOLO object detection client
│   │   ├── HistoryStack.js       # Undo/redo state management
│   │   ├── ProjectStore.js       # Unified local/server storage
│   │   └── ...                   # (+ 4 more services)
│   ├── styles/                   # CSS stylesheets (17 files)
│   └── utils/                    # Utilities (5 modules)
│       ├── state.js              # Reactive pub/sub state management
│       ├── router.js             # Hash-based SPA router
│       ├── shortcuts.js          # Keyboard shortcut manager
│       ├── api.js                # REST API client
│       └── auth.js               # Authentication helpers
│
├── backend/                      # Flask backend
│   ├── app.py                    # Flask app factory & blueprint registration
│   ├── config.py                 # Environment configuration
│   ├── schema.sql                # MySQL database schema
│   ├── requirements.txt          # Python dependencies
│   ├── routes/                   # API endpoint handlers (12 blueprints)
│   │   ├── ai.py                 # YOLOv4-tiny inference endpoint
│   │   ├── edge.py               # OpenCV edge detection
│   │   ├── filter.py             # OpenCV filters & smoothing
│   │   ├── image.py              # Image upload, conversion, processing
│   │   ├── histogram.py          # Matplotlib histogram generation
│   │   └── ...                   # (+ 7 more route files)
│   ├── services/                 # Backend services
│   │   ├── compression.py        # 5 custom compression codec implementations
│   │   └── db.py                 # MySQL connection & auto-migration
│   └── models/                   # AI model weights (YOLOv4-tiny)
│
└── api/                          # Vercel serverless function
    └── index.py                  # Python entry point for Vercel deployment
```

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Frontend Modules** | 38 JavaScript files |
| **Backend Modules** | 16 Python files |
| **CSS Stylesheets** | 17 files |
| **UI Components** | 20 |
| **Service Modules** | 13 (frontend) + 2 (backend) |
| **API Endpoints** | 12 Blueprint route groups |
| **Edge Detection Algorithms** | 6 (Canny, Sobel, Prewitt, Robert, Laplacian, LoG) |
| **Segmentation Methods** | 3 (Threshold, Edge, Region) |
| **Compression Codecs** | 5 (Quantization, Huffman, Arithmetic, LZW, RLE) |
| **AI Classes (COCO)** | 80 object categories |
| **Keyboard Shortcuts** | 12+ registered shortcuts |

---

## 🔑 Key Technical Highlights

1. **Hybrid Processing Architecture** — All image operations run instantly in JavaScript first (Canvas API pixel manipulation), with optional Python/OpenCV backend refinement for higher accuracy.

2. **From-Scratch Algorithm Implementation** — Edge detection (Sobel, Canny, etc.), segmentation, histogram equalization, and compression codecs are all implemented from scratch — not just library calls.

3. **Custom Binary File Format** — The export system includes a PHOTON custom binary format with a 16-byte header structure for RLE, Huffman, LZW, and Arithmetic compressed images.

4. **Reactive State Architecture** — A custom publish/subscribe state management system drives the entire UI without any framework (no React, Vue, or Angular).

5. **Non-Destructive Editing Pipeline** — Snapshot-based preview system: sliders adjust a copy; only "Apply" commits the change. Full undo/redo history stack.

6. **Unified Storage Layer** — Seamlessly switches between IndexedDB (guest) and MySQL (authenticated) with the same API surface.

---

## 👤 Author

**Leon De Wira**

---
