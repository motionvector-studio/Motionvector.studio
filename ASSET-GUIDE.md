# 🎬 Asset Integration Cheat Sheet

## Quick Reference for Adding Your Media

### 📹 Hero Background Video

**Location:** `motion-vector-studio.jsx` - Line ~180

**Before:**
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20 mix-blend-overlay">
```

**After:**
```jsx
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
  <source src="/assets/hero-background.mp4" type="video/mp4" />
</video>
```

---

### 🖼️ Portfolio Project Images

**Location:** `motion-vector-studio.jsx` - Line ~240 (inside the map function)

**Option A - Static Image:**
```jsx
<img 
  src={`/assets/projects/project-${project.id}.jpg`}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**Option B - Hover Video:**
```jsx
<video 
  muted 
  loop 
  onMouseEnter={(e) => e.target.play()} 
  onMouseLeave={(e) => e.target.pause()}
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={`/assets/projects/project-${project.id}.mp4`} type="video/mp4" />
</video>
```

---

### 🎨 Customizing Project Data

**Location:** `motion-vector-studio.jsx` - Line ~75

```jsx
const projects = [
  { 
    id: 1, 
    title: 'Your Project Name',           // Change this
    category: 'Your Category',            // Change this
    gradient: 'from-cyan-500 to-blue-600', // Keep or change colors
    span: 'col-span-2 row-span-2'         // Grid size (keep as-is for layout)
  },
  // Add more projects...
];
```

---

### 💼 Adding More Services

**Location:** `motion-vector-studio.jsx` - Line ~84

```jsx
const services = [
  {
    icon: <YourIcon className="w-8 h-8" />,  // Import from lucide-react
    title: 'Service Name',
    description: 'Your service description here...',
    color: 'from-cyan-500 to-blue-600'       // Gradient colors
  },
  // Add more services...
];
```

---

### 📁 File Structure for Assets

```
your-project/
├── public/
│   └── assets/
│       ├── hero-background.mp4        (Recommended: 1920x1080, <5MB)
│       ├── projects/
│       │   ├── project-1.jpg          (Recommended: 1200x800)
│       │   ├── project-2.jpg
│       │   ├── project-3.mp4          (Optional: videos instead)
│       │   ├── project-4.jpg
│       │   └── project-5.jpg
│       └── animations/
│           └── hero-animation.json     (Optional: Lottie files)
```

---

### 🎨 Color Customization

**Find & Replace Throughout File:**

Current accent color: `cyan` and `blue`

To change to purple/pink:
- `from-cyan-500 to-blue-600` → `from-purple-500 to-pink-600`
- `cyan-400` → `purple-400`
- `blue-600` → `pink-600`

Or use your custom hex:
- Replace Tailwind classes with: `bg-[#YOUR_HEX]`

---

### 🔤 Text Content to Update

| Section | Line | What to Change |
|---------|------|----------------|
| Hero Headline | ~195 | "Motion That Moves Brands" |
| Hero Subheadline | ~203 | Description text |
| Work Section Title | ~234 | "Featured Work" |
| Services Section | ~84 | Service titles & descriptions |
| Footer | ~380 | Copyright year & text |

---

### ⚡ Quick Tips

1. **Video Format:** Use MP4 (H.264) for best compatibility
2. **Image Format:** Use WebP or JPG (optimized)
3. **File Sizes:** 
   - Hero video: <5MB
   - Project images: <500KB each
   - Total page load: <10MB ideal
4. **Optimization Tools:**
   - Video: HandBrake, FFmpeg
   - Images: TinyPNG, Squoosh
   - Lottie: LottieFiles.com

---

### 🚀 Testing Your Assets

1. Place files in `public/assets/`
2. Run `npm run dev`
3. Check browser console for 404 errors
4. Verify file paths match exactly

**Common Path Issues:**
- ✅ Correct: `/assets/video.mp4`
- ❌ Wrong: `./assets/video.mp4`
- ❌ Wrong: `assets/video.mp4`

---

### 🎬 Optional: Lottie Integration

```bash
npm install lottie-react
```

```jsx
import Lottie from 'lottie-react';
import animationData from '/assets/animations/hero.json';

<Lottie 
  animationData={animationData}
  loop={true}
  className="w-full h-full"
/>
```

---

Need help? Check the full README.md for detailed instructions!
