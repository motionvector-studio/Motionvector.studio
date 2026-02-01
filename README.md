# Motion Vector Studio - Premium Portfolio Landing Page

A modern, dark-themed single-page application built with React, Tailwind CSS, and Lucide React icons.

## 🎨 Design Features

- **Ultra-modern Dark Aesthetic**: Background #050505, Text #F5F5F5
- **Electric Gradient Accents**: Cyan to Blue vibrant highlights
- **Glassmorphism Navigation**: Sticky navbar with blur effects
- **Bento Grid Portfolio**: Asymmetric layout with hover play states
- **Smooth Scroll Animations**: Reveal-on-scroll with custom intersection observers
- **Fully Responsive**: Mobile-first design approach

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 📁 Project Structure

```
motion-vector-studio/
├── index.html                 # HTML entry point
├── main.jsx                   # React entry point
├── motion-vector-studio.jsx   # Main component
├── index.css                  # Tailwind CSS + custom styles
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## 🎬 Adding Your Assets

### 1. **Hero Background Video**

Replace the placeholder in `motion-vector-studio.jsx` (around line 180):

```jsx
{/* Current placeholder */}
<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20 mix-blend-overlay">
</div>

{/* Replace with your video */}
<video 
  autoPlay 
  muted 
  loop 
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30"
>
  <source src="/assets/hero-background.mp4" type="video/mp4" />
</video>
```

**Video Recommendations:**
- Format: MP4 (H.264)
- Resolution: 1920x1080 (Full HD)
- Duration: 10-30 seconds looping
- File size: Under 5MB (optimize for web)
- Style: Abstract motion graphics, particle systems, or geometric animations

### 2. **Portfolio Project Images/Videos**

Replace the gradient backgrounds in each project card (around line 240):

```jsx
{/* Current gradient placeholder */}
<div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}>
</div>

{/* Replace with project image */}
<img 
  src={`/assets/projects/${project.id}.jpg`}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* OR use video thumbnails */}
<video 
  muted 
  loop 
  onMouseEnter={(e) => e.target.play()} 
  onMouseLeave={(e) => e.target.pause()}
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={`/assets/projects/${project.id}.mp4`} type="video/mp4" />
</video>
```

### 3. **Lottie Animations** (Optional Enhancement)

Install Lottie:
```bash
npm install lottie-react
```

Add to your component:
```jsx
import Lottie from 'lottie-react';
import animationData from './assets/animation.json';

// Use in hero or elsewhere
<Lottie 
  animationData={animationData} 
  loop={true}
  className="w-64 h-64"
/>
```

### 4. **Folder Structure for Assets**

Create an `assets` folder in your project root:

```
motion-vector-studio/
├── assets/
│   ├── hero-background.mp4
│   ├── projects/
│   │   ├── 1.jpg (or 1.mp4)
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   └── 5.jpg
│   └── animations/
│       └── hero-lottie.json
```

**Important:** Place assets in the `public` folder for Vite, or import them directly:

```
public/
├── assets/
│   ├── hero-background.mp4
│   └── projects/
```

Then reference as `/assets/filename.mp4` in your code.

## 🎨 Customization Guide

### Colors

The color scheme uses CSS variables and Tailwind classes. Main colors:

- **Primary Background**: `#050505`
- **Text**: `#F5F5F5`
- **Accent Gradient**: `from-cyan-500 to-blue-600`

To change the accent color, find and replace:
- `cyan-500` → your color
- `blue-600` → your color
- Update all gradient classes throughout

### Typography

The design uses system fonts for performance. To use custom fonts:

1. Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Content

Update these sections in `motion-vector-studio.jsx`:

- **Hero Headline**: Line ~195
- **Project Data**: Line ~75 (`projects` array)
- **Services**: Line ~84 (`services` array)
- **Footer**: Line ~380

## 🎯 Features Breakdown

### Sticky Glassmorphism Navbar
- Transparent on load
- Blurs and adds background on scroll
- Smooth scroll to sections

### Parallax Hero
- Background moves on scroll
- Animated grid pattern
- Scroll indicator

### Bento Grid Portfolio
- Asymmetric responsive grid
- Hover play button animations
- Gradient overlays with noise texture

### Services Cards
- Gradient icon backgrounds
- Hover border glow effects
- Staggered reveal animations

### Smooth Scroll
- Custom intersection observer hook
- Fade-in and slide-up animations
- Progressive reveal timing

## 📱 Responsive Breakpoints

- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

## ⚡ Performance Tips

1. **Optimize Videos**: Use tools like HandBrake to compress
2. **Lazy Load Images**: Add `loading="lazy"` to images
3. **Use WebP Format**: For better compression
4. **Enable Gzip**: On your hosting server
5. **Minimize JavaScript**: Vite handles this in production

## 🚫 Platform Compliance Notes

This design intentionally excludes:
- External social media links
- Contact forms with backend submission
- Third-party tracking scripts
- Newsletter signup integrations

This ensures compliance with freelance platform guidelines while maintaining full functionality.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Custom Hooks** - Intersection Observer for animations

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

For customization help or questions, refer to:
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

---

**Built with precision for Motion Vector Studio** 🎬✨
