# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Exclusive Errands by Coco" - an errand service business in Kenya targeting diaspora clients. The site is a single-page application built with vanilla HTML, CSS, and JavaScript.

## Architecture

**Static Site Structure:**
- `index.html` - Main HTML structure with all sections (hero, services, rates, quote form, about, testimonials, contact)
- `style.css` - Complete styling including responsive design with mobile-first approach
- `script.js` - Interactive functionality (navigation, slideshow, forms, scroll effects)
- `logo.png` - Business logo asset

**Key Features:**
1. **Hero Slideshow**: Auto-rotating image slideshow with manual controls (prev/next/play-pause)
2. **Mobile Navigation**: Hamburger menu with toggle functionality for mobile devices
3. **Quote Form**: Submits inquiries directly to WhatsApp (phone: 254701644277)
4. **Scroll Animations**: IntersectionObserver-based fade-in effects for sections
5. **Back-to-Top Button**: Appears after scrolling 300px down

## Development Commands

**Running the Site:**
```bash
# Open directly in browser
xdg-open index.html

# Or use VSCode launch configuration
# Press F5 in VSCode to launch with Chrome debugger
```

**Validation/Linting:**
```bash
# No build tools configured - this is vanilla HTML/CSS/JS
# Validate HTML: Use W3C validator or browser DevTools
# Check CSS: Use browser DevTools or online validators
```

## Important Implementation Details

**WhatsApp Integration:**
- Quote form sends formatted messages to WhatsApp (254701644277)
- Message format: "Hello Coco, I am {name}. Email: {email}. Service: {service}. Message: {message}"
- Opens in new tab via `window.open()`

**CSS Variables (`:root` in style.css):**
- `--primary-pink: #fce4ec` - Light background pink
- `--accent-color: #e91e63` - Strong pink for CTAs and accents
- `--dark-text: #333` - Primary text color
- `--light-text: #555` - Secondary text color

**Responsive Breakpoint:**
- Mobile layout triggers at `max-width: 768px`
- Navbar becomes fixed side drawer
- Touch-friendly minimum sizes (44px) for interactive elements

**External Dependencies:**
- Google Fonts: Poppins (weights: 400, 600, 700)
- Unsplash images (CDN links for service images and slideshow)

**Security:**
- Content Security Policy defined in HTML meta tag
- External links use `rel="noopener noreferrer"`

## Code Organization

**script.js structure:**
1. Navigation handling (lines 1-33)
2. Scroll animations with IntersectionObserver (lines 36-59)
3. Back-to-top button (lines 62-77)
4. Quote form WhatsApp submission (lines 80-102)
5. Hero slideshow controls (lines 105-163)

**style.css structure:**
1. Global variables and resets (lines 1-27)
2. Header and navigation (lines 29-88)
3. Hero section and slideshow (lines 90-165)
4. Card components (lines 255-317)
5. Section-specific styles (rates, contact, testimonials)
6. Animations (fade-in, hover effects)
7. Footer (lines 481-506)
8. Mobile responsive styles (lines 509-550)

## Testing Checklist

When making changes, verify:
- [ ] Mobile menu toggles correctly on hamburger click
- [ ] Slideshow auto-plays and manual controls work
- [ ] Quote form redirects to WhatsApp with correct message format
- [ ] All navigation links scroll to correct sections
- [ ] Fade-in animations trigger on scroll
- [ ] Back-to-top button appears after scrolling down
- [ ] Responsive layout works at mobile breakpoint (768px)
- [ ] All external links open in new tabs
