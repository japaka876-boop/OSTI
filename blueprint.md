
# OSTI - Ocean Springs Tech Inc. Website Blueprint

## Overview

A modern, visually appealing, and mobile-responsive website for "Ocean Springs Tech Inc.", a pool construction and maintenance company. The website is designed to attract new clients, showcase the company's services and expertise, and provide a seamless user experience.

## Project Outline & Features

### **Global Design & Style**

*   **Framework:** Next.js with App Router.
*   **Styling:** Tailwind CSS for a utility-first approach.
*   **Typography:** A clean and modern `font-sans` is used throughout. A bold `font-heading` is used for major titles.
*   **Color Palette:**
    *   `primary-blue`: A deep, professional blue for main sections and text.
    *   `accent-cyan`: A vibrant cyan for buttons, links, and highlights.
    *   `dark-gray`: For the footer background and some text.
    *   `medium-gray`: For secondary text.
    *   `light-gray`: For section backgrounds.
    *   `white`: For text on dark backgrounds and main page background.
*   **Iconography:** `lucide-react` for clean and modern icons.
*   **Interactivity:** Hover effects (scaling, color transitions), animations (`animate-fadeInUp`), and interactive buttons.

### **Component & Section Breakdown**

1.  **Header (`<header>`):**
    *   **Top Bar:** A dark blue bar containing contact information (Phone, Email) and a "Licensed & Insured" notice. Sticky to the top.
    *   **Main Navigation:**
        *   **Logo:** A gradient-backed, stylized logo for "Ocean Springs Tech Inc".
        *   **Navigation Links:** Home, About, Services, Gallery, Blog, FAQ, Reviews, Contact.
        *   **"Get a Quote" Button:** A prominent, cyan-colored call-to-action button.

2.  **Hero Section (`<section>`):**
    *   **Background:** A full-screen, high-quality image of a luxurious pool, implemented using the Next.js `<Image>` component with `layout="fill"` for optimal performance and responsiveness.
    *   **Overlay:** A semi-transparent `primary-blue` overlay to ensure text readability.
    *   **Content:**
        *   **Headline:** "Building Your Personal Oasis" in a large, bold, heading font.
        *   **Tagline:** "Where luxury meets tranquility, we create the backyard of your dreams."
        *   **Buttons:**
            *   "Get a Free Estimate": Primary CTA, cyan background.
            *   "Explore Our Gallery": Secondary CTA, semi-transparent with a blur effect.

3.  **Features Bar (`<section>`):**
    *   A simple, clean section below the hero.
    *   Displays four key selling points with icons: "Licensed & Insured", "Expert Team", "On-Time Delivery", and "Quality Materials".

4.  **Our Services Section (`<section id="services">`):**
    *   **Headline:** "Our Services".
    *   **Content:** Three service cards presented in a grid.
    *   **Service Cards:**
        *   Each card features a high-quality image related to the service (Pool Construction, Renovation, Maintenance).
        *   Includes the service title, a brief description, and a "Learn More" link.
        *   Cards have a hover effect (lift and scale).

5.  **Why Choose Us Section (`<section id="why-choose-us">`):**
    *   **Layout:** Two-column grid.
    *   **Left Column (Text):**
        *   **Headline:** "Why Choose Ocean Springs Tech?"
        *   **Feature List:** A bulleted list highlighting key benefits (e.g., "Over 20 years of experience"). Each item is preceded by a checkmark icon.
        *   **Button:** "Discover the OSTI Difference" - an engaging CTA.
    *   **Right Column (Image):** A large, compelling image of a stunning modern pool to build trust and aspiration.

6.  **Footer Section (`<footer id="contact">`):**
    *   **Background:** `dark-gray` for a classic, professional look.
    *   **Layout:** A multi-column grid for organized information.
    *   **Content:**
        *   **Column 1 (Brand):** "OSTI" logo/name and a brief tagline.
        *   **Column 2 (Sitemap):** Quick links to major sections of the site (Home, About, Services, Gallery, Contact).
        *   **Column 3 (Contact Info):** Address, Phone, and Email with corresponding icons.
        *   **Column 4 (Social Media):** Icons linking to social profiles (Facebook, Twitter, Instagram, LinkedIn).
    *   **Bottom Bar:** A copyright notice (`© [Year] OSTI Pool Services. All Rights Reserved.`) with a top border for separation.

## **Current Action Plan**

*   **Objective:** Create the final footer section.
*   **Steps:**
    1.  **[COMPLETED]** Read the current `app/page.tsx` file.
    2.  **[COMPLETED]** Modify the footer in `app/page.tsx` to include the branding, a sitemap, detailed contact info, and social media links.
    3.  **[COMPLETED]** Add the finalized footer design to this blueprint.
    4.  **[PENDING]** Commit the changes to version control.
    5.  **[PENDING]** Push the final changes to the remote repository.
