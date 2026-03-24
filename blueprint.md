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

### 2.3. Homepage (`app/page.tsx`)
*   **Hero Section:**
        *   A large, impactful hero section with a stunning **background video** of a luxurious pool.
        *   A semi-transparent overlay to ensure text readability.
        *   Headline: "Building Your Personal Oasis".
        *   Sub-headline: "Where luxury meets tranquility, we create the backyard of your dreams.".
        *   Two call-to-action buttons: "Get a Free Estimate" and "Explore Our Gallery".
*   **Features Section:**
        *   A section below the hero to build immediate trust.
        *   Displays four key features in cards: "Licensed & Insured", "Expert Team", "On-Time Delivery", and "Quality Materials".
*   **Complete Homepage:**
        *   The homepage has been fully built out with all sections, including Services, About Us, Testimonials, and a Contact Form.

### 2.4. Image Configuration (`next.config.mjs`)

*   The `next.config.mjs` file has been configured to allow images from `images.unsplash.com`.

## 3. Recently Completed: Implement Hero Video

*   **Objective:** To replace the static hero image with a dynamic, high-quality video to create a more immersive and impressive user experience.
*   **Status:** **[COMPLETED]**
*   **Implementation Details:** 
    * Sourced a free, high-quality pool video from Mixkit.
    * Replaced the static CSS background image in the hero `<section>` with an HTML5 `<video>` element (`autoPlay`, `loop`, `muted`, `playsInline`).
    * Configured proper `z-index` layers to ensure layout elements like the darkening overlay, headers, and call-to-action buttons stay readable and clickable across all devices.

## 4. Phase 2: Site Update & SEO Proposal (Level 2)

El proyecto ha entrado en la Fase 2, enfocada en la modernización profunda, posicionamiento SEO (mercado de Coachella Valley, California) y captura de *leads*.

**Características principales añadidas al alcance:**
1.  **Modernización y Contenido:** Reescritura de copy, corrección de enlaces rotos, creación de `/faq` y `/blog`.
2.  **Integración Multimedia Avanzada:** Expansión del uso de videos (Lazy loading) a secciones como *About Us*, y una mejora completa de la galería y portafolio interactivo (documentación de "Antes/Después" y soluciones).
3.  **Reseñas y Confianza:** Renovación de la página de reseñas e integración con servicios de terceros (Google Reviews).
4.  **Generación de Leads (CRM):** Incorporación de un chatbot con opciones de agente en vivo, conectado de forma nativa al CRM de **HubSpot** (Edición gratuita) para capturar y filtrar clientes potenciales de forma eficiente. *(**PENDIENTE:** Recopilar el `HubSpot ID` del cliente para reemplazar el placeholder en `layout.tsx` y poder empezar a recibir los leads).*
5.  **Despliegue y Rendimiento:** Toda la arquitectura se auditará y preparará para ser servida desde la red global, maximizando el Mobile Responsiveness y las métricas de Core Web Vitals (vital para el SEO local).

### 4.1 Estrategia de Contenido Extraída del Sitio Actual
De acuerdo con el sitio en vivo (`oceanspringstech.com`), el nuevo contenido se estructurará alrededor de los siguientes pilares clave para el *Coachella Valley*:
- **Servicios Principales a Mostrar:** Maintenance Services, New construction, Repairs and Warranty, Remodels, Lighting.
- **Puntos de Venta (USP):** "Expert Technicians", "Complete Projects" y disponibilidad de "Financing Now!".
- **Tono SEO:** Focalizado en ser "la compañía más confiable del Coachella Valley" para embellecer espacios exteriores (Outdoor Living Spaces).

## 5. Phase 3: Premium Interactive UI Elements (Modals & Galleries)

El proyecto ha sido escalado con características de diseño UI/UX de nivel corporativo para maximizar las tasas de conversión (CRO) y mejorar el tiempo en pantalla.

*   **Status:** **[COMPLETED]**
*   **Implementation Details:**
    *   **Premium Estimate Modal (Split-Layout):** Reemplazo del formulario flotante básico por un modal de pantalla completa "High-End". Lado izquierdo: formulario de captura de prospectos impulsado por psicología de colores (azul y cyan). Lado derecho: panel de "Why Choose Us" con badges de confianza (Licensed/Insured, 5-Star Reviews).
    *   **Financing Solutions Modal:** Creación de una experiencia "Dream Now, Pay Later" con un diseño simétrico (`50/50`) a pantalla completa, evitando barras de desplazamiento en escritorio. Contiene información detallada de 4 prestamistas con llamadas a la acción directas para pre-calificación.
    *   **Interactive Portfolio Gallery (Album -> Grid -> Carousel):** Desarrollo de un portafolio fotográfico altamente interactivo animado completamente con `Framer Motion`. 
        *   Nivel 1: Tarjetas grandes simulando "Álbumes" o directorios por categoría.
        *   Nivel 2: Grilla *Masonry* elegante de las imágenes del álbum seleccionado con efectos Hover Premium (Zoom y botón expandir).
        *   Nivel 3: **Lightbox**, pantalla completa inmersiva tipo carrusel para navegar imagen a imagen.

## 6. Phase 4: Premium Preloader & Video Services Integration

El sitio ha recibido una actualización de assets y de experiencia de carga inicial para afianzar el sentimiento "Premium".

*   **Status:** **[COMPLETED]**
*   **Implementation Details:**
    *   **Services Videos (`app/page.tsx`):** Las imágenes estáticas de la sección "Our Services" fueron reemplazadas por videos `*.mp4` (Maintenance, New Construction, Repairs, Remodels, Lighting). Se renderizan usando la etiqueta `<video>` con `autoPlay`, `loop` y `muted`, respetando y manteniendo los mismos efectos CSS preexistentes de hover y escala.
    *   **Animated Preloader (`components/Preloader.tsx`):** Se diseñó un componente 100% código (React, Tailwind, Framer Motion) inyectado al nivel más alto de `app/page.tsx`.
        *   Presenta un efecto visual ultra-realista que simula un "aro de agua" brillante mediante la composición de múltiples div con sombreado dinámico (`box-shadow`, `blur`) y un video base de fondo opacado.
        *   La interfaz de carga congela la pantalla temporalmente durante 2.5 segundos (mientras los assets pesados se inicializan en el DOM) y muestra el texto pulsante "LOADING YOUR RELAXATION EXPERIENCE...", antes de desvanecerse fluidamente de regreso a la interfaz normal, creando un efecto de inicio de aplicación de lujo.
