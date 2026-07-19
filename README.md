# 🔴 LENZO — Digital Optical Measurement Web Platform

> **Precision Vision Technology for Opticians, Eye Care Clinics & Optical Laboratories**

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Bilingual](https://img.shields.io/badge/Bilingual-EN%20%7C%20AR%20(RTL)-FF2B2B?style=for-the-badge)

LENZO is a state-of-the-art web application and landing page designed for **LENZO**, a digital optical measurement tool designed for opticians and ophthalmic clinics to capture **Pupillary Distance (PD)**, **Segment Fitting Height (FH)**, **Vertex Distance (VD)**, **Pantoscopic Tilt**, and **Frame Parameters** with sub-millimeter precision.

---

## ✨ Features Overview

### 🎨 Design System & Glassmorphism Theme
- **Ultra-Sleek Dark Mode**: Deep Onyx Black backdrop (`#050505` / `#0A0A0A`) with electric primary red (`#FF2B2B`) glowing highlights.
- **Glassmorphism Surfaces**: Frosted glass panels with `backdrop-filter: blur(16px)` and subtle glowing hover borders.
- **Typography**: Google Fonts integration using **`Outfit`** for English LTR script and **`Cairo`** for Arabic RTL script.

### 🌐 Native Bilingual Engine (EN / AR RTL)
- Seamless real-time language switcher toggle in the navigation header.
- Automatic text direction shift (`dir="rtl"` vs `dir="ltr"`), font family updates, and layout realignment across all components, metrics tables, and modals.

### 🔬 Live Interactive 2D Optical Simulator
- **Phase A (Front View)** & **Phase B (Side View Profile)** interactive alignment.
- Draggable / adjustable pupil crosshairs for Left Eye (OS) and Right Eye (OD).
- Real-time telemetry calculations updating **Binocular/Monocular PD**, **Fitting Height**, **Vertex Distance**, and **Pantoscopic Angle** dynamically.
- Instant PDF report export preview dialog.

### 📐 Interactive Optical Parameter Showcase
- Visual parameter tabs for:
  - Monocular & Binocular Pupillary Distance (PD)
  - Segment Fitting Height (FH)
  - Vertex Distance (VD)
  - Pantoscopic Angle
  - Panoramic Wrap Angle
  - ISO Frame Boxing System (A, B, DBL dimensions)
- Includes clinical explanations, typical reference ranges, and interactive SVG diagrams.

### 📱 Exclusive Android APK Download Hub
- Direct **Android APK Package (v2.4.1)** installer download.
- Interactive Android tablet QR code scanner preview.
- Hardware recommendations card for Android tablets and smartphones (Android 8.0+, 3GB RAM, 12MP Camera).

---

## 🛠️ Technical Stack

- **Frontend Core**: React 19 + TypeScript (`.tsx`)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism CSS design system (`src/index.css`)
- **Iconography**: Lucide React (`lucide-react`)
- **Typography**: Google Fonts (`Outfit` & `Cairo`)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/lenzo-web.git
   cd lenzo-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static files will be placed in the `dist/` directory.

---

## 📁 Project Structure

```text
lenzo-web/
├── public/
│   └── lenzo_logo.png           # Custom brand logo asset & favicon
├── src/
│   ├── components/
│   │   ├── DownloadSection.tsx   # Exclusive Android APK download hub
│   │   ├── FeaturesGrid.tsx      # Glassmorphic key features grid
│   │   ├── Footer.tsx            # Footer with logo & quick links
│   │   ├── Hero.tsx              # Hero section with headline & stats
│   │   ├── HowItWorks.tsx        # 4-step workflow timeline
│   │   ├── Modals.tsx            # APK Download, Admin Request, Support modals
│   │   ├── Navbar.tsx            # Header bar with EN/AR language toggle
│   │   ├── OpticalSimulator.tsx  # Interactive 2D pupil measurement simulator
│   │   └── ParameterShowcase.tsx # Optical metric diagrams & clinical definitions
│   ├── context/
│   │   └── LanguageContext.tsx   # React Context for EN/AR translation state
│   ├── data/
│   │   └── translations.ts       # Bilingual English & Arabic dictionary
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Glassmorphism tokens & CSS styles
│   └── main.tsx                  # Application entry point
├── index.html                    # Document root & Google Fonts links
├── vite.config.ts                # Vite & Tailwind configuration
└── package.json
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

*Powered by LENZO Precision Vision Technologies*
