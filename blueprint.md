# Ocean Springs Tech Inc. - Pool Construction & Maintenance Website

## 1. Project Overview

This project is to build a modern, professional, and visually appealing website for "Ocean Springs Tech Inc.", a pool construction and maintenance company. The goal is to create a strong online presence that builds trust, showcases their work, and generates leads. The website will be built using Next.js and Tailwind CSS, following modern web development best practices.

## 2. Implemented Features & Design

This section documents all the style, design, and features implemented in the application from the initial version to the current version.

### 2.1. Branding & Styling
*   **Color Palette:**
    *   **Primary Blue (`#0D2F4F`):** Used for main headers, footers, and important text. Represents trust and professionalism.
    *   **Accent Cyan (`#22D3EE`):** Used for buttons, links, and highlights. Represents water and modernity.
    *   **Grays:** Used for body text and backgrounds to ensure readability.
*   **Typography:**
    *   Using the default `Inter` font provided by Next.js for a clean and modern look.
*   **Styling Framework:**
    *   **Tailwind CSS:** Configured for a utility-first workflow, enabling rapid and consistent styling.
    *   **`globals.css`:** Cleaned to remove old styles and set up Tailwind CSS base styles.

### 2.2. Core Components
*   **`Header.tsx`:**
    *   A two-level header component.
    *   **Top Bar:** Dark blue background (`primary-blue`) with contact information and "Licensed & Insured" text.
    *   **Main Navigation:** White background with the company logo, a navigation menu (Home, About, Services, etc.), and a prominent "Get a Quote" button (`accent-cyan`).
*   **`Footer.tsx`:**
    *   A comprehensive footer with a dark blue background (`primary-blue`).
    *   Includes sections for "Quick Links", "Contact Us", and a brief company description.
    *   Contains a copyright notice at the bottom.
*   **`layout.tsx`:**
    *   The main application layout.
    *   Integrates the `Header` and `Footer` to ensure they appear on all pages.
    *   Configured with appropriate metadata (title and description) for SEO.
    *   Uses Flexbox to ensure the footer sticks to the bottom of the page.

### 2.3. Homepage (`app/page.tsx`)
*   **Hero Section:**
    *   A large, impactful hero section with a background image of a modern pool.
    *   A semi-transparent black overlay to ensure text readability.
    *   Headline: "Your Dream Pool Awaits".
    *   Sub-headline explaining the company's services.
    *   Two call-to-action buttons: "Get Free Quote" and "View Our Work".
*   **Features Section:**
    *   A section below the hero to build immediate trust.
    *   Displays four key features in cards: "Licensed & Insured", "Expert Team", "On-Time Delivery", and "Quality Materials".
    *   Uses icons from `lucide-react` to visually represent each feature.
*   **Complete Homepage:**
    *   The homepage has been fully built out with all sections, including Services, About Us, Testimonials, and a Contact Form.
    *   **Animations:** Subtle fade-in animations have been added to all sections for a more dynamic user experience.
    *   **Testimonial Images:** Corrected image URLs and configured `next.config.mjs` to allow remote images, fixing a critical build error.

### 2.4. Dependencies
*   **`lucide-react`:** Added for modern and clean icons.

## 3. Deployment

The website has been successfully deployed using Firebase App Hosting.

*   **Live URL:** [https://osti--osti-ff772.us-central1.hosted.app](https://osti--osti-ff772.us-central1.hosted.app)
*   **Deployment Method:** Continuous deployment from the `main` branch of the `japaka876-boop/OSTI` GitHub repository. Any changes pushed to this branch will automatically trigger a new deployment.
*   **Troubleshooting Note:** Experienced and resolved a traffic splitting issue where the deployment was stuck on an older build. Forcing a new deployment by updating this blueprint file should resolve the issue.
