# Juliana Marie T. Dador - Professional Portfolio Website

A modern, elegant, and responsive personal portfolio website showcasing professional background, education, work experience, certifications, and achievements in the hospitality industry.

## 🌟 Features

- **Modern Design**: Clean, minimalist design with warm color palette (beige, teal, mocha, cream)
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Interactive Navigation**: Fixed navigation with active section highlighting
- **Contact Form**: Functional contact form with client-side validation
- **Professional Sections**:
  - Hero/Home section with profile photo
  - About Me with personal details
  - Educational timeline
  - Work experience
  - Certificates & achievements gallery
  - Skills showcase
  - Contact form
  - Character references
  - Professional footer

## 📁 Project Structure

```
juliana-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── responsive.css      # Responsive design media queries
│   └── animations.css      # Animation definitions
├── js/
│   ├── main.js             # Core functionality
│   ├── navigation.js       # Navigation and smooth scrolling
│   ├── animations.js       # Scroll-triggered animations
│   └── form.js             # Contact form handling
├── assets/
│   └── images/
│       ├── profile.jpg     # Profile photo (add your own)
│       └── hero-bg.jpg     # Hero background (optional)
└── README.md               # This file
```

## 🚀 Getting Started

### 1. Add Your Images

Place your images in the `assets/images/` folder:
- **profile.jpg**: Your professional photo (recommended: 600x600px)
- **hero-bg.jpg**: Background image for hero section (optional)

### 2. Open the Website

Simply open `index.html` in your web browser. No server or build process required!

### 3. Customize Content

All content is in `index.html`. You can easily update:
- Personal information
- Education details
- Work experience
- Certificates and achievements
- Skills
- Contact information
- Character references

## 🎨 Design System

### Color Palette
- **Beige**: #F5E9DA
- **Teal**: #3BA6A0
- **Mocha**: #6B4B3E
- **Cream**: #FFF9F3

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Lato (Google Fonts)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Features Breakdown

### Navigation
- Fixed navigation bar with smooth scrolling
- Active section highlighting
- Mobile hamburger menu
- Backdrop blur effect

### Hero Section
- Full viewport height
- Circular profile photo with border
- Professional introduction
- Call-to-action button

### About Me
- Two-column layout (responsive)
- Professional biography
- Detailed personal information
- Clickable email and phone links
- Inspirational quote

### Education Timeline
- Vertical timeline with icons
- Alternating left-right layout
- All education levels from grade school to college

### Work Experience
- Professional card layout
- Detailed responsibilities
- Company information
- Inspirational quote

### Certificates Gallery
- Responsive grid (3 columns → 2 → 1)
- Color-coded borders (gold, silver, teal)
- Hover effects
- All 11+ certificates displayed

### Skills Section
- Grid layout with icons
- Hover effects with color change
- Professional caption

### Contact Section
- Two-column layout
- Contact information with icons
- Functional contact form
- Client-side validation
- Success/error messages

### References
- Three-column grid (responsive)
- Professional card design
- Complete contact information

### Footer
- Teal background
- Inspirational quote
- Copyright information
- Back-to-top button

## 🔧 Customization

### Changing Colors

Edit the CSS custom properties in `css/styles.css`:

```css
:root {
    --color-beige: #F5E9DA;
    --color-teal: #3BA6A0;
    --color-mocha: #6B4B3E;
    --color-cream: #FFF9F3;
}
```

### Adding More Certificates

In `index.html`, duplicate a certificate card and update the content:

```html
<div class="certificate-card teal-border">
    <div class="certificate-icon">🎓</div>
    <h3 class="certificate-title">Your Event Name</h3>
    <p class="certificate-award">Your Award</p>
    <p class="certificate-details">Venue</p>
    <p class="certificate-date">Date</p>
</div>
```

### Connecting Contact Form to Backend

In `js/form.js`, replace the setTimeout simulation with actual fetch call:

```javascript
fetch('your-backend-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message })
})
.then(response => response.json())
.then(data => {
    showFormMessage('success', 'Thank you for your message!');
    document.getElementById('contactForm').reset();
})
.catch(error => {
    showFormMessage('error', 'Something went wrong. Please try again.');
});
```

## 📦 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly

### Option 3: Vercel
1. Import your GitHub repository
2. Deploy with one click

## 📄 License

© 2025 Juliana Marie T. Dador – All Rights Reserved

## 🤝 Support

For questions or support, contact:
- Email: dadorjuliana@gmail.com
- Mobile: (+63) 955 796 4965

---

**Built with ❤️ and ☕ - Reflecting the warmth and professionalism of the hospitality industry**
