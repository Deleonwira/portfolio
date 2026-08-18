import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  Star,
  X,
  ChevronRight,
  Layers,
  Code2,
  Cpu,
  ImageIcon,
  Palette,
  Eye,
  Zap,
  Database,
  Shield,
  BarChart3,
  FileArchive,
  Monitor,
  BrainCircuit,
  ShoppingCart,
  Smartphone,
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';

/* ── Real Project Data ── */
const projects = [
  {
    id: 1,
    title: 'Photon — Digital Image Processing Studio',
    shortDesc:
      'A full-stack, browser-based Digital Image Processing platform with real-time image manipulation, computer vision, AI object detection, and custom compression codecs.',
    tags: ['JavaScript', 'Python', 'Flask', 'OpenCV', 'Canvas API', 'Vite'],
    image: '/images/photon-preview.png',
    liveUrl: 'https://photon-project-pcd-tm31.vercel.app/#/login',
    githubUrl: 'https://github.com/Deleonwira/Photon-Project--PCD-',
    details: {
      overview:
        'Photon is a professional-grade web application that brings the power of desktop image editors like Photoshop into the browser. It combines a pixel-level JavaScript image processing engine with a Python/OpenCV backend for advanced computer vision operations — all wrapped in a polished, desktop-class UI with menus, toolbars, panels, and keyboard shortcuts.',
      features: [
        {
          icon: 'Monitor',
          title: 'Project Management & Dashboard',
          desc: 'Grid-based project browser with thumbnail previews, auto-save every 30 seconds, refresh recovery via localStorage, and smart sequential naming system.',
        },
        {
          icon: 'ImageIcon',
          title: 'Image I/O & Clipboard',
          desc: 'Open from disk (Ctrl+O), paste from clipboard (Ctrl+V), drag & drop, and advanced export with 5 compression methods and multiple output formats.',
        },
        {
          icon: 'Layers',
          title: 'Geometric Transformations',
          desc: 'Resize with interpolation selection (Nearest, Bilinear, Bicubic), interactive crop with draggable handles, free rotation, flip, and translation.',
        },

        {
          icon: 'Zap',
          title: 'Image Enhancement',
          desc: 'Brightness & contrast adjustment, histogram equalization using CDF, convolution-based sharpening, and non-destructive live preview snapshots.',
        },
        {
          icon: 'Palette',
          title: 'Color Processing',
          desc: 'HSL-based hue/saturation/lightness adjustment, weighted luminance grayscale conversion, individual RGB channel isolation, and RGB↔HSL transforms.',
        },
        {
          icon: 'Eye',
          title: 'Edge Detection (6 Algorithms)',
          desc: 'Canny, Sobel, Prewitt, Robert, Laplacian, and Laplacian of Gaussian — all implemented from scratch in JavaScript with Python/OpenCV backend fallback.',
        },
        {
          icon: 'BrainCircuit',
          title: 'AI Object Recognition (CNN)',
          desc: 'YOLOv4-tiny model with COCO dataset (80 classes), category filtering, adjustable confidence threshold, color-coded bounding boxes, and NMS.',
        },
        {
          icon: 'BarChart3',
          title: 'Histogram Analysis',
          desc: 'Real-time RGB and Luminance histogram with channel toggles, statistics panel (Mean, StdDev, Min, Max), and debounced efficient rendering.',
        },
        {
          icon: 'FileArchive',
          title: 'Image Compression (5 Codecs)',
          desc: 'Quantization, Huffman Coding, Arithmetic Coding, LZW, and RLE — with custom PHOTON binary format, size estimation, and compression ratio display.',
        },
        {
          icon: 'Cpu',
          title: 'Morphology & Segmentation',
          desc: 'Erosion/dilation with configurable kernels, and 3 segmentation methods: threshold-based, edge-based (Canny), and region-growing with color-coded output.',
        },
        {
          icon: 'Shield',
          title: 'Auth & Multi-user',
          desc: 'User registration/login via Flask, guest mode for local-only usage, server-side sessions, and unified project storage (MySQL or IndexedDB).',
        },
        {
          icon: 'Code2',
          title: 'Architecture & State',
          desc: 'Custom reactive pub/sub state management, hash-based SPA router, lazy component mounting, and modular service architecture — zero framework dependency.',
        },
      ],
      techStack: {
        frontend: [
          'JavaScript (ES Modules)',
          'HTML5 Canvas API',
          'CSS3 (Custom Properties)',
          'Vite',
          'IndexedDB',
          'Web APIs (Clipboard, File, Drag & Drop)',
        ],
        backend: [
          'Python 3.10+',
          'Flask',
          'OpenCV (cv2)',
          'NumPy',
          'Pillow (PIL)',
          'YOLOv4-tiny + OpenCV DNN',
          'PyMySQL',
        ],
        database: ['IndexedDB (Guest)', 'MySQL (Authenticated)'],
        devops: ['Vercel (Frontend + Serverless)', 'Git / GitHub'],
      },
      stats: [
        { label: 'Frontend Modules', value: '38' },
        { label: 'Backend Modules', value: '16' },
        { label: 'CSS Stylesheets', value: '17' },
        { label: 'UI Components', value: '20' },
        { label: 'API Endpoints', value: '12' },
        { label: 'Edge Detection Algos', value: '6' },
        { label: 'Compression Codecs', value: '5' },
        { label: 'AI Classes (COCO)', value: '80' },
      ],
      highlights: [
        'Hybrid Processing — JS engine for instant client-side operations, Python/OpenCV backend for advanced accuracy.',
        'From-Scratch Algorithms — Edge detection, segmentation, histogram equalization, and compression codecs built from the ground up.',
        'Custom Binary File Format — PHOTON format with 16-byte header structure for RLE, Huffman, LZW, and Arithmetic compressed images.',
        'Reactive State Architecture — Custom publish/subscribe system driving the entire UI without any framework.',
        'Non-Destructive Editing — Snapshot-based preview: sliders adjust a copy; only "Apply" commits. Full undo/redo history.',
        'Unified Storage Layer — Seamlessly switches between IndexedDB (guest) and MySQL (authenticated) with the same API surface.',
      ],
    },
  },
  {
    id: 2,
    title: 'Industrial Machine Selection DSS — MOORA Method',
    shortDesc:
      'A full-stack Decision Support System for selecting the best industrial machine from multiple alternatives using the MOORA method (Multi-Objective Optimization on the basis of Ratio Analysis).',
    tags: ['React', 'Vite', 'PHP', 'MySQL', 'Tailwind CSS'],
    image: '/images/moora-preview.png',
    liveUrl: 'https://moorasystem.netlify.app/',
    githubUrl: 'https://github.com/Deleonwira/Project-MOORA',
    details: {
      overview:
        'This is a full-stack web application that helps decision makers select the most optimal industrial machine from a set of alternatives, evaluated against 10 predefined criteria. The system implements the MOORA method step-by-step and interactively, so users can follow and understand every stage of the calculation.',
      features: [
        {
          icon: 'Shield',
          title: 'User Authentication',
          desc: 'Session-based registration & login.',
        },
        {
          icon: 'Database',
          title: 'Alternative Management',
          desc: 'Full CRUD for industrial machine data with validation.',
        },
        {
          icon: 'Cpu',
          title: 'Step-by-Step MOORA',
          desc: 'Transparent visualization of each calculation step (Decision Matrix, Normalization, Weighting, Yi Optimization).',
        },
        {
          icon: 'BarChart3',
          title: 'Final Ranking',
          desc: 'Visual ranking display with highlighted top recommendation based on Yi score.',
        },
        {
          icon: 'FileArchive',
          title: 'Calculation History',
          desc: 'Save and review previous calculation results.',
        },
        {
          icon: 'Monitor',
          title: 'PDF Export',
          desc: 'Download a full ranking report as a PDF file using jsPDF & AutoTable.',
        },
      ],
      techStack: {
        frontend: [
          'React ^19',
          'Vite ^8',
          'React Router DOM ^7',
          'Lucide React',
          'jsPDF + AutoTable',
        ],
        backend: [
          'PHP 8.0+ (REST API)',
          'MySQL 8.0+',
          'PDO',
          'PHP Session',
        ],
        database: ['MySQL'],
      },
      stats: [
        { label: 'Evaluation Criteria', value: '10' },
        { label: 'MOORA Steps', value: '5' },
        { label: 'Core Formulas', value: '3' },
        { label: 'Team Members', value: '4' },
      ],
      highlights: [
        'MOORA Calculation Flow — Implements 5 sequential MOORA steps interactively: Decision Matrix, Normalization, Weighting, Yi Optimization, and Ranking.',
        'Data Seeding — Default data seed to load 10 sample machines directly from the database.',
        'Elegant UI — Splash screen and interactive dashboard with full calculation history.',
      ],
    },
  },
  {
    id: 3,
    title: 'Ogani — Fullstack E-Commerce Capstone',
    shortDesc:
      'A production-grade, multi-platform e-commerce system featuring a Flutter mobile app, a Spring Boot REST API, and a CodeIgniter 4 admin panel — all powered by a shared MySQL database.',
    tags: ['Flutter', 'Spring Boot', 'CodeIgniter 4', 'MySQL', 'Java', 'Dart'],
    image: '/images/ogani-preview.jpg',
    liveUrl: '#',
    githubUrl: '#',
    details: {
      overview:
        'Ogani is a full-stack e-commerce capstone that simulates a real-world grocery/organic goods marketplace. Three interconnected components form a unified ecosystem: a Flutter mobile app for customers, a Spring Boot REST API for business logic & security, and a CodeIgniter 4 admin panel for back-office store management — all sharing a single MySQL database.',
      features: [
        {
          icon: 'Smartphone',
          title: 'Flutter Mobile App',
          desc: 'Cross-platform (Android/iOS) customer shopping app with JWT auth, home screen, categories, product detail, cart, checkout, order history & tracking.',
        },
        {
          icon: 'Shield',
          title: 'JWT Authentication',
          desc: 'Secure register & login flow with JWT bearer tokens persisted via Shared Preferences, protecting all authenticated API routes via Spring Security.',
        },
        {
          icon: 'ShoppingCart',
          title: 'Shopping Cart & Checkout',
          desc: 'Full cart management with add/remove, quantity control, live totals, and a multi-step checkout flow with address and payment method selection.',
        },
        {
          icon: 'Database',
          title: 'Spring Boot REST API',
          desc: '10 controller groups (Auth, Products, Categories, Orders, Wishlist, Promos, Reviews, Notifications, Users, Dashboard) secured with JWT bearer tokens.',
        },
        {
          icon: 'Monitor',
          title: 'CodeIgniter 4 Admin Panel',
          desc: 'Server-rendered MVC dashboard for product/category/order/user/promo management with direct MySQL access and session-based admin authentication.',
        },
        {
          icon: 'BarChart3',
          title: 'Dashboard & Analytics',
          desc: 'Admin dashboard with sales overview, recent orders, key metrics, and a dedicated Spring Boot DashboardController for aggregate statistics.',
        },
        {
          icon: 'Eye',
          title: 'Wishlist & Reviews',
          desc: 'Users can save favourite products to a persistent wishlist and submit/read product reviews. Review moderation available in the admin panel.',
        },
        {
          icon: 'Zap',
          title: 'Promos & Notifications',
          desc: 'Promotional offers and discount code management with a dedicated PromoController, plus an in-app notification center for real-time user alerts.',
        },
      ],
      techStack: {
        'Mobile (Flutter)': [
          'Flutter SDK ^3.11.4',
          'Dart',
          'Provider ^6.1.5',
          'HTTP ^1.6.0',
          'Google Fonts ^8.1.0',
          'Shared Preferences ^2.5.5',
          'Cached Network Image ^3.4.1',
        ],
        'Backend API (Spring Boot)': [
          'Spring Boot 4.1.0',
          'Java 17',
          'Spring Security',
          'Spring Data JPA',
          'JJWT 0.11.5',
          'Lombok',
          'MySQL Connector/J',
          'Maven',
        ],
        'Admin Panel (CodeIgniter 4)': [
          'CodeIgniter 4 ^4.7',
          'PHP ^8.2',
          'Composer',
        ],
        database: ['MySQL 8.0+'],
      },
      stats: [
        { label: 'API Controllers', value: '10' },
        { label: 'App Screens', value: '13+' },
        { label: 'Platforms', value: '3' },
        { label: 'Tech Stack Layers', value: '4' },
      ],
      highlights: [
        'Multi-Platform Ecosystem — Flutter mobile, Spring Boot API, and CodeIgniter 4 admin panel operating as a unified, production-grade system.',
        'JWT Security Layer — Spring Security + JJWT protecting all API routes; tokens persisted on-device via Shared Preferences.',
        'Shared MySQL Database — Single source of truth for all three components, with the admin panel accessing it directly for back-office efficiency.',
        'State Management — Provider package drives reactive UI across all Flutter screens without relying on heavy third-party solutions.',
        'Complete E-Commerce Flow — From product browsing and wishlist to multi-step checkout, order tracking, reviews, and promos.',
        'Postman Collection Included — Full API test collection with pre-configured request bodies and headers for all 10 endpoint groups.',
      ],
    },
    screenshots: [
      { url: '/images/ogani-screenshot-92-1.jpeg', title: 'Home Screen', desc: 'Main landing page with categories, featured products, and special offers carousel.' },
      { url: '/images/ogani-screenshot-93-1.jpeg', title: 'Product Categories', desc: 'Browse products by category with grid layout and search functionality.' },
      { url: '/images/ogani-screenshot-94-1.jpeg', title: 'Shopping Cart', desc: 'Cart management with quantity control, item removal, and live total calculation.' },
      { url: '/images/ogani-screenshot-95-1.jpeg', title: 'User Profile', desc: 'Profile page with order history, wishlist access, and account settings.' },
      { url: '/images/ogani-screenshot-96-1.jpeg', title: 'Product Detail', desc: 'Detailed product view with images, description, reviews, and add-to-cart action.' },
      { url: '/images/ogani-screenshot-97-1.jpeg', title: 'Checkout', desc: 'Multi-step checkout flow with address input and payment method selection.' },
      { url: '/images/ogani-screenshot-98-1.jpeg', title: 'Order Tracking', desc: 'Real-time order status tracking with timeline and delivery updates.' },
      { url: '/images/ogani-screenshot-99-1.jpeg', title: 'Promos & Coupons', desc: 'Browse active promotional offers and apply discount codes.' },
      { url: '/images/ogani-screenshot-100-1.jpeg', title: 'Reviews & Ratings', desc: 'Product review system with star ratings and user feedback.' },
      { url: '/images/ogani-screenshot-101-1.jpeg', title: 'My Orders', desc: 'Order history with status filters and reorder functionality.' },
    ],
  },
  {
    id: 4,
    title: 'Notare — Notes & Activity Manager',
    shortDesc:
      'A clean, minimal, and fully offline Flutter mobile app combining note-taking and task management, with SQLite local storage, a Cupertino-inspired UI, and rich productivity features.',
    tags: ['Flutter', 'Dart', 'SQLite', 'sqflite', 'intl'],
    image: '/images/notare-preview-mockup.jpg',
    liveUrl: '#',
    githubUrl: '#',
    details: {
      overview:
        'Notare is a personal productivity mobile app that merges note-taking and task management into a single, elegant experience. All data is stored locally using SQLite (sqflite), ensuring full offline support with no account required. The UI is built on a minimalist, Apple-inspired dark-neutral design system using Montserrat and Color(0xFF091413) as the primary brand color.',
      features: [
        {
          icon: 'Layers',
          title: 'Notes with Categories',
          desc: 'Create, edit, and delete notes with title, content, color, and category. 6 predefined categories (Work, Personal, Ideas, Study, Shopping, Health) each with unique color and icon.',
        },
        {
          icon: 'Eye',
          title: 'Search & Filter',
          desc: 'Real-time search by title or content, plus interactive chip selectors to filter notes by category. Notes displayed in a responsive 2-column grid.',
        },
        {
          icon: 'Zap',
          title: 'Undo Deletions',
          desc: 'Accidental note deletions can be instantly recovered via a snackbar undo action, preventing data loss.',
        },
        {
          icon: 'Smartphone',
          title: 'Activity / Task Manager',
          desc: 'Manage activities as To-Do, Event, or Reminder types with priority levels (None/Low/Medium/High), description, start & end time, and subtasks with individual completion tracking.',
        },
        {
          icon: 'BarChart3',
          title: 'Subtask Progress',
          desc: 'Computed progress indicator tracks subtask completion per activity. Swipe to delete with confirmation dialog; mark activities complete with a single toggle.',
        },
        {
          icon: 'Monitor',
          title: 'Calendar View',
          desc: 'Dedicated calendar screen for viewing activities by date. Navigate between days to see all scheduled tasks, events, and reminders.',
        },
        {
          icon: 'Palette',
          title: 'Animated UI & Splash Screen',
          desc: 'Custom animated splash screen, time-aware greeting (Morning/Afternoon/Evening), elastic spring FAB animation, side drawer navigation, and smooth CupertinoPageRoute transitions.',
        },
        {
          icon: 'Database',
          title: 'SQLite Local Database',
          desc: 'Singleton DatabaseHelper with versioned migrations managing 4 tables: notes, activities, subtasks (CASCADE), and categories — full offline, no account needed.',
        },
      ],
      techStack: {
        'Mobile (Flutter)': [
          'Flutter SDK ^3.11.4',
          'Dart',
          'sqflite',
          'path_provider',
          'intl',
          'cupertino_icons',
          'Montserrat (Variable Font)',
        ],
        database: ['SQLite (local, on-device)'],
      },
      stats: [
        { label: 'App Screens', value: '6' },
        { label: 'DB Tables', value: '4' },
        { label: 'Note Categories', value: '6' },
        { label: 'Activity Types', value: '3' },
        { label: 'Priority Levels', value: '4' },
        { label: 'Platforms', value: '5' },
      ],
      highlights: [
        'Fully Offline — All data stored locally via SQLite (sqflite); no internet connection or user account required.',
        'Unified Productivity — Notes and task management combined in a single app with a seamless, consistent design system.',
        'Rich Activity Model — Activities support type (To-Do/Event/Reminder), priority, subtasks, start/end time, and cascade-delete subtasks.',
        'Animated UX — Elastic spring FAB, CupertinoPageRoute transitions, animated splash screen, and time-aware greeting messages.',
        'Category System — 6 predefined note categories with unique colors and icons; chip-based filtering for instant navigation.',
        'Versioned DB Migrations — Singleton DatabaseHelper with schema versioning for safe future database evolution.',
      ],
    },
    screenshots: [
      { url: '/images/notare-screenshot-9-1.jpeg', title: 'Splash Screen', desc: 'Sleek digital note-taking and productivity tool entry.' },
      { url: '/images/notare-screenshot-9-2.jpeg', title: 'Main Dashboard', desc: 'Centralized workspace to organize categorized notes.' },
      { url: '/images/notare-screenshot-10-1.jpeg', title: 'Category Selection Menu', desc: 'Filter notes easily by topic like work, study, or health.' },
      { url: '/images/notare-screenshot-10-2.jpeg', title: 'Select Category Screen', desc: 'Menu to assign specific labels to notes or tasks.' },
      { url: '/images/notare-screenshot-11-1.jpeg', title: 'New Note Creation', desc: 'Rich text editor to write and save notes under categories.' },
      { url: '/images/notare-screenshot-11-2.jpeg', title: 'Edit Note Screen', desc: 'Interface to modify notes, change categories, or delete them.' },
      { url: '/images/notare-screenshot-12-1.jpeg', title: 'Slide-out Navigation', desc: 'Quick access panel to switch between dashboard and calendar.' },
      { url: '/images/notare-screenshot-12-2.jpeg', title: 'Calendar Interface', desc: 'Scheduling tool to view and add daily events.' },
      { url: '/images/notare-screenshot-13-1.jpeg', title: 'Date Selection Menu', desc: 'Quick navigation tool to jump to a specific month/year.' },
      { url: '/images/notare-screenshot-13-2.jpeg', title: 'Context Menu', desc: 'Quick-action panel to add tasks, events, or reminders.' },
      { url: '/images/notare-screenshot-14-1.jpeg', title: 'New Todo Screen', desc: 'Form to create tasks with schedules, priorities, and subtasks.' },
      { url: '/images/notare-screenshot-14-2.jpeg', title: 'Add Subtask Dialog', desc: 'Pop-up to break down tasks into smaller steps.' },
      { url: '/images/notare-screenshot-15-1.jpeg', title: 'Time Picker Dialog', desc: 'Interface to set precise start or end times.' },
      { url: '/images/notare-screenshot-15-2.jpeg', title: 'Manual Time Entry', desc: 'Direct keyboard input alternative to type times quickly.' },
      { url: '/images/notare-screenshot-16-1.jpeg', title: 'New Event Screen', desc: 'Form to schedule and detail upcoming calendar events.' },
      { url: '/images/notare-screenshot-16-2.jpeg', title: 'New Reminder Screen', desc: 'Form to create reminders with notification timing.' }
    ]
  },
];

/* ── Icon Map ── */
const iconMap = {
  Monitor,
  ImageIcon,
  Layers,
  Zap,
  Palette,
  Eye,
  BrainCircuit,
  BarChart3,
  FileArchive,
  Cpu,
  Shield,
  Code2,
  Database,
  ShoppingCart,
  Smartphone,
};

/* ── Detail Modal Component ── */
function ProjectDetailModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState(project.defaultTab || 'features');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    })
  };

  const tabs = [
    { id: 'features', label: 'Features' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'stats', label: 'Stats' },
  ];

  if (project.screenshots) {
    tabs.push({ id: 'screenshots', label: 'App Previews' });
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-[#020510]/85 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl steam-card border border-cyan-400/30"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          boxShadow:
            '0 0 60px rgba(0, 120, 255, 0.2), 0 0 120px rgba(0, 242, 254, 0.08)',
        }}
      >
        {/* Header Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#040914]/70 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-3 left-4 right-4">
            <h2 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
              {project.title}
            </h2>
            <p className="text-[11px] text-cyan-200/80 mt-1 leading-relaxed">
              {project.details.overview}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-4 pt-3 pb-1 border-b border-cyan-500/15">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all cursor-pointer font-[family-name:var(--font-heading)] uppercase tracking-wider ${activeTab === tab.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30'
                  : 'text-cyan-400/50 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-270px)] p-4 custom-scrollbar">
          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              className="flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Key Highlights */}
              <div className="mb-2">
                <h4 className="text-[10px] font-semibold text-cyan-400/70 uppercase tracking-wider mb-2 font-[family-name:var(--font-heading)]">
                  Key Technical Highlights
                </h4>
                <div className="flex flex-col gap-1.5">
                  {project.details.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-text-secondary leading-relaxed"
                    >
                      <ChevronRight
                        size={12}
                        className="text-cyan-400 mt-0.5 flex-shrink-0"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-cyan-500/15 my-1" />

              {/* Feature Grid */}
              <h4 className="text-[10px] font-semibold text-cyan-400/70 uppercase tracking-wider font-[family-name:var(--font-heading)]">
                Complete Feature Set
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.details.features.map((feature, i) => {
                  const IconComp = iconMap[feature.icon] || Code2;
                  return (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-sky-950/40 border border-cyan-400/10 hover:border-cyan-400/25 transition-all group/feat"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1 rounded bg-cyan-500/10 text-cyan-400">
                          <IconComp size={12} />
                        </div>
                        <span className="text-[11px] font-semibold text-cyan-200 font-[family-name:var(--font-heading)]">
                          {feature.title}
                        </span>
                      </div>
                      <p className="text-[10px] text-text-secondary leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech' && (
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {Object.entries(project.details.techStack).map(
                ([category, items]) => (
                  <div key={category}>
                    <h4 className="text-[10px] font-semibold text-cyan-400/70 uppercase tracking-wider mb-2 font-[family-name:var(--font-heading)]">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 text-[10px] rounded-md bg-sky-950/60 border border-cyan-400/15 text-cyan-200 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </motion.div>
          )}

          {/* Stats Tab */}
          {activeTab === 'stats' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {project.details.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-lg bg-sky-950/40 border border-cyan-400/10 text-center"
                  >
                    <div className="text-lg font-bold text-cyan-300 font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </div>
                    <div className="text-[9px] text-text-secondary mt-0.5 font-mono uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* App Previews Tab */}
          {activeTab === 'screenshots' && project.screenshots && (
            <motion.div
              className="flex flex-col gap-4 items-center py-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Phone Mockup Frame */}
              <div className="relative mx-auto w-[210px] h-[420px] rounded-[36px] border-[5px] border-[#0c192c] bg-[#02050f] shadow-[0_0_30px_rgba(34,211,238,0.25)] flex flex-col items-center justify-between p-2 overflow-hidden group/phone">
                
                {/* Speaker & Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#0a101f] rounded-full border border-sky-950/50" />
                </div>

                {/* Status Bar */}
                <div className="absolute top-1 left-0 right-0 px-6 py-0.5 flex justify-between items-center text-[7px] font-mono text-cyan-400/80 z-20 select-none">
                  <span>12:00</span>
                  <div className="flex items-center gap-1">
                    <span>LTE</span>
                    <span className="w-3 h-1.5 border border-cyan-400/60 rounded-xs relative flex items-center p-[1px]">
                      <span className="h-full w-4/5 bg-cyan-400 rounded-3xs" />
                    </span>
                  </div>
                </div>

                {/* Screen Content Wrapper */}
                <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#040914] relative flex items-center justify-center border border-cyan-400/10">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={project.screenshots[currentSlide].url}
                      alt={project.screenshots[currentSlide].title}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Left / Right Nav Overlays */}
                  <button
                    onClick={() => {
                      setDirection(-1);
                      setCurrentSlide((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
                    }}
                    className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#040914]/85 border border-cyan-500/30 text-cyan-300 flex items-center justify-center opacity-0 group-hover/phone:opacity-100 transition-all duration-300 hover:bg-cyan-500/20 active:scale-90 z-20 cursor-pointer text-sm font-bold"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => {
                      setDirection(1);
                      setCurrentSlide((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#040914]/85 border border-cyan-500/30 text-cyan-300 flex items-center justify-center opacity-0 group-hover/phone:opacity-100 transition-all duration-300 hover:bg-cyan-500/20 active:scale-90 z-20 cursor-pointer text-sm font-bold"
                  >
                    ›
                  </button>

                  {/* Home Indicator Line */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-cyan-400/40 rounded-full z-20" />
                </div>
              </div>

              {/* Text Info (Title & Desc) */}
              <div className="text-center px-4 min-h-[55px]">
                <h5 className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider font-[family-name:var(--font-heading)]">
                  {project.screenshots[currentSlide].title}
                </h5>
                <p className="text-[10px] text-sky-200/70 mt-1 max-w-sm leading-relaxed font-mono">
                  {project.screenshots[currentSlide].desc}
                </p>
              </div>

              {/* Dot Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-[280px]">
                {project.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentSlide ? 1 : -1);
                      setCurrentSlide(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'w-4 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                        : 'w-1.5 bg-cyan-500/20 hover:bg-cyan-500/40'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-4 py-3 border-t border-cyan-500/15 flex items-center justify-between font-mono">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-[9px] rounded bg-sky-950 border border-cyan-400/20 text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold steam-btn"
              >
                <GithubIcon size={12} />
                <span>Source</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold steam-btn"
              >
                <ExternalLink size={12} />
                <span>Live Demo</span>
              </a>
            ) : project.screenshots ? (
              <button
                onClick={() => setActiveTab('screenshots')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold steam-btn cursor-pointer"
              >
                <ImageIcon size={12} />
                <span>App Previews</span>
              </button>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Projects Section ── */
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="flex flex-col gap-4">
        {/* Header */}
        <div className="steam-card rounded-xl p-3.5 flex items-center justify-between">
          <h3 className="text-xs font-semibold text-cyan-300 font-[family-name:var(--font-heading)] uppercase tracking-wider flex items-center gap-2">
            <Sparkles size={14} className="text-cyan-400" />
            <span>Featured Projects Showcase</span>
          </h3>
          <span className="text-[10px] font-mono text-cyan-400/60">
            {projects.length} Featured{' '}
            {projects.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="steam-card steam-card-hover rounded-xl p-3 flex flex-col justify-between relative group cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative h-36 rounded-lg overflow-hidden border border-cyan-400/30 mb-3 bg-[#030812] flex items-center justify-center">
                  {project.screenshots ? (
                    <div className="relative w-[70px] h-[122px] rounded-[18px] border-[3px] border-[#0c192c] bg-black shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center justify-center overflow-hidden z-10 group-hover:scale-105 transition-transform duration-500 mt-2">
                      {/* Speaker Notch */}
                      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-6 h-1 bg-black rounded-full z-20" />
                      <img
                        src={project.screenshots[0].url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-transparent to-transparent opacity-80" />
                    </>
                  )}

                  {/* Click hint badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#040914]/80 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Eye size={11} className="text-cyan-400" />
                    <span>View Details</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="text-sm font-semibold text-e2f1ff group-hover:text-cyan-300 transition-colors font-[family-name:var(--font-heading)] flex items-center justify-between">
                  <span>{project.title}</span>
                </h4>
                <p className="text-[11px] text-text-secondary line-clamp-2 mt-1 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Tags & Action Buttons */}
              <div className="mt-3 pt-2.5 border-t border-cyan-500/20 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 text-[9px] rounded bg-sky-950 border border-cyan-400/20 text-cyan-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded hover:bg-cyan-500/20 text-cyan-300 transition-colors"
                      title="Source Code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon size={13} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 rounded hover:bg-cyan-500/20 text-cyan-300 transition-colors"
                      title="Live Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={13} />
                    </a>
                  ) : project.screenshots ? (
                    <button
                      className="p-1 rounded hover:bg-cyan-500/20 text-cyan-300 transition-colors cursor-pointer"
                      title="App Previews"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject({ ...project, defaultTab: 'screenshots' });
                      }}
                    >
                      <ImageIcon size={13} />
                    </button>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
