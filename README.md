# AquaPure RO Water Purifier Website

A complete, production-ready website for RO water purifier sales and home services.

## 📁 File Structure

```
aquapure-website/
├── index.html          # Home page with hero, services, trust indicators
├── products.html       # Product catalog with 6 RO purifiers
├── services.html       # Services page with AMC plans
├── book-service.html   # Service booking form
├── about.html          # Company information
├── contact.html        # Contact page with form
├── style.css           # Complete responsive styling
└── script.js           # Interactive functionality
```

## ✨ Features

### 🎨 Design Highlights
- **Modern Blue Gradient Theme**: Professional color scheme with #0066FF to #00D4FF gradients
- **Custom Typography**: Poppins for body text, Playfair Display for headers
- **Smooth Animations**: Fade-up, slide-in, and hover effects throughout
- **Fully Responsive**: Mobile-first design that works on all devices
- **Clean Layout**: Spacious, organized sections with clear hierarchy

### 📱 Pages Included

#### 1. Home Page (index.html)
- Hero section with compelling call-to-action
- Trust badges (Certified Technicians, Fast Service, Affordable Pricing)
- Service highlights grid
- "Why Choose Us" section
- Call-to-action section
- Complete footer with links

#### 2. Products Page (products.html)
- 6 product cards with detailed specifications:
  - AquaPure Elite (Domestic RO)
  - AquaPure Pro (Premium Domestic)
  - AquaPure Basic (Entry Level)
  - AquaPure Commercial (50LPH)
  - AquaPure Industrial (100LPH)
  - AquaPure Smart (IoT Enabled)
- Product badges (Bestseller, New Arrival, Commercial)
- Feature tags and pricing
- "Why Buy From Us" section

#### 3. Services Page (services.html)
- Four main service categories:
  - RO Installation
  - Repair & Maintenance
  - AMC Plans (3 tiers: Basic, Standard, Premium)
  - Filter Replacement
- Detailed service descriptions
- Pricing information
- Filter replacement price list
- "How It Works" process steps

#### 4. Book Service Page (book-service.html)
- Professional booking form with validation
- Fields: Name, Mobile, Email, Address, Service Type, Date, Time Slot, Message
- Success message display
- "Why Book With Us" information panel
- Emergency contact section

#### 5. About Us Page (about.html)
- Company introduction
- Mission & Vision statements
- Core values grid
- Team commitment section
- Statistics showcase (10,000+ customers, 50+ technicians)

#### 6. Contact Page (contact.html)
- Contact information display (Phone, Email, Address, WhatsApp)
- Contact form with validation
- Google Maps placeholder
- Multiple contact methods

### 🎯 Interactive Features

#### Navigation
- Sticky navbar with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting
- Gradient CTA button in nav

#### Floating Action Buttons
- WhatsApp chat button (bottom right)
- Click-to-call button (mobile)
- Pulsing animation for attention

#### Form Validation
- Real-time field validation
- Custom error messages
- Mobile number format validation (10 digits)
- Email format validation
- Required field checking
- Date validation (future dates only)
- Success message display

#### Animations
- Fade-up animations on scroll
- Hover effects on cards and buttons
- Smooth transitions throughout
- Intersection Observer for scroll-triggered animations

### 🎨 Design System

#### Colors
- Primary: #0066FF (Blue)
- Secondary: #00D4FF (Cyan)
- Accent: #00A8FF
- Text Dark: #1a1a1a
- Text Medium: #4a4a4a
- Text Light: #6a6a6a
- Backgrounds: White, #f8f9fa, #f0f7ff

#### Typography
- Headers: Playfair Display (700, 800)
- Body: Poppins (300, 400, 500, 600, 700)
- Base size: 16px
- Line height: 1.6

#### Spacing
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 4rem
- XL: 6rem

### 📱 Responsive Breakpoints
- Desktop: 992px+
- Tablet: 768px - 991px
- Mobile: < 768px
- Small Mobile: < 480px

## 🚀 Deployment Instructions

### Option 1: Simple File Upload
1. Upload all files to your web hosting via FTP/cPanel
2. Ensure all files are in the root directory or same folder
3. Access via your domain: `https://yourdomain.com`

### Option 2: GitHub Pages
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select main branch and save
5. Access via: `https://yourusername.github.io/repo-name`

### Option 3: Netlify (Recommended)
1. Go to [Netlify](https://www.netlify.com)
2. Drag and drop the folder containing all files
3. Your site will be live instantly with a free URL
4. Optional: Connect custom domain in settings

### Option 4: Vercel
1. Go to [Vercel](https://vercel.com)
2. Import the project folder
3. Deploy with one click
4. Access via provided URL

## 🔧 Customization Guide

### Updating Contact Information
1. Open all HTML files
2. Find: `+91 1234567890` and replace with your number
3. Find: `info@aquapure.com` and replace with your email
4. Find: `123 Main Street, City` and replace with your address
5. Update WhatsApp link: `https://wa.me/1234567890` (use your number)

### Changing Colors
Edit `style.css` in the `:root` section:
```css
:root {
    --primary-color: #0066FF;     /* Change main blue */
    --secondary-color: #00D4FF;   /* Change cyan accent */
}
```

### Adding Products
Edit `products.html`:
1. Copy an existing `.product-card` div
2. Update product name, features, price
3. Update SVG image placeholder
4. Save and refresh

### Modifying Services
Edit `services.html`:
1. Find the service section you want to modify
2. Update pricing, features, or descriptions
3. AMC plans are in `.amc-plan` divs

### Updating Images
The website uses SVG placeholders. To add real images:
1. Replace SVG with: `<img src="path/to/image.jpg" alt="Description">`
2. Add images to an `images/` folder
3. Update all image paths

## 📝 Form Integration

The forms currently display success messages. To connect to a backend:

### Option 1: Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Google Forms
1. Create a Google Form
2. Get the form action URL
3. Update form action attribute

### Option 3: Custom Backend
```javascript
// In script.js, modify handleBookingSubmit:
fetch('/api/booking', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {'Content-Type': 'application/json'}
})
```

## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO Features
- Semantic HTML5 structure
- Meta descriptions on all pages
- Proper heading hierarchy (H1, H2, H3)
- Alt text placeholders for images
- Mobile-friendly design
- Fast loading times
- Structured data ready

## 🔍 Testing Checklist
- [x] All links work correctly
- [x] Forms validate properly
- [x] Mobile menu opens/closes
- [x] Responsive on all devices
- [x] No console errors
- [x] Smooth animations
- [x] Contact buttons work
- [x] All pages accessible

## 🎯 Performance Tips
1. **Optimize Images**: Use WebP format, compress to <100KB
2. **Minify Files**: Use tools like terser (JS) and cssnano (CSS)
3. **Enable Caching**: Add cache headers in server config
4. **Use CDN**: Serve static files via Cloudflare or similar
5. **Lazy Loading**: Add `loading="lazy"` to images

## 📞 Support
For technical support or customization requests:
- Create an issue on GitHub
- Contact: support@aquapure.com
- Documentation: Check inline comments in code

## 📄 License
This website template is provided as-is for commercial use.

## 🎉 Credits
- Design System: Custom built
- Icons: Inline SVG
- Fonts: Google Fonts (Poppins, Playfair Display)
- Framework: Vanilla HTML, CSS, JavaScript

## 🔄 Version History
- v1.0.0 (Jan 2026): Initial release
  - Complete 6-page website
  - Responsive design
  - Form validation
  - Interactive features

---

Built with ❤️ for AquaPure RO Water Purifiers
