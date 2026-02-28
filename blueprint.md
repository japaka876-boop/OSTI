# Blueprint: OSTI Pool Services

## 1. Overview

OSTI Pool Services is a premier provider of pool construction, renovation, and maintenance services in Ocean Springs, Mississippi. This blueprint outlines the design and features of our Next.js web application, which aims to provide a visually stunning and user-friendly experience for our clients.

## 2. Design and Features

### 2.1. Visual Design

*   **Aesthetics:** Modern, clean, and professional. The design will evoke a sense of luxury, trust, and relaxation.
*   **Color Palette:**
    *   Primary: `#0a2540` (deep blue)
    *   Accent: `#00d4ff` (vibrant cyan)
    *   Grays: `#f7fafc` (light), `#718096` (medium), `#1a202c` (dark)
*   **Typography:**
    *   Headings: A clean, modern serif font (e.g., Playfair Display).
    *   Body: A highly readable sans-serif font (e.g., Inter).

### 2.2. Header and Footer

*   **Header:**
    *   A two-tiered header design for a professional and informative first impression.
    *   **Top Bar:** A dark blue bar containing contact information (phone and email) and a "Licensed & Insured" notice.
    *   **Main Header:** A white, sticky header containing:
        *   A new, stylized logo with the text "Ocean Springs Tech Inc" and "Pool Construction & Maintenance".
        *   An expanded navigation menu: Home, About, Services, Gallery, Blog, FAQ, Reviews, Contact.
        *   A prominent "Get a Quote" button.
*   **Footer:**
    *   A comprehensive footer with contact information, social media links, and a sitemap.
    *   The footer will be designed to be both informative and visually appealing.

### 2.3. Homepage (`app/page.tsx`)
*   **Hero Section:**
        *   A large, impactful hero section with a stunning background image of a luxurious pool.
        *   A semi-transparent overlay to ensure text readability.
        *   Headline: "Building Your Personal Oasis".
        *   Sub-headline: "Where luxury meets tranquility, we create the backyard of your dreams.".
        *   Two call-to-action buttons: "Get a Free Estimate" and "Explore Our Gallery".
*   **Features Section:**
        *   A section below the hero to build immediate trust.
        *   Displays four key features in cards: "Licensed & Insured", "Expert Team", "On-Time Delivery", and "Quality Materials".
        *   Uses icons from `lucide-react` to visually represent each feature.
*   **Complete Homepage:**
        *   The homepage has been fully built out with all sections, including Services, About Us, Testimonials, and a Contact Form.
        *   **Animations:** Subtle fade-in animations have been added to all sections for a more dynamic user experience.
*   **Testimonial Images:** Corrected image URLs and configured `next.config.mjs` to allow remote images, fixing a critical build error.

### 2.4. Image Configuration (`next.config.mjs`)

*   The `next.config.mjs` file has been configured to allow images from `images.unsplash.com`, ensuring that all images are displayed correctly.

## 3. Current Task: Implement Two-Tiered Header

*   **Objective:** To replace the existing header with a more professional, two-tiered header that matches the provided design.
*   **Tasks:**
    1.  Create the top bar with contact details.
    2.  Design the new logo component.
    3.  Update the navigation links.
    4.  Integrate the new header into `app/page.tsx`.
