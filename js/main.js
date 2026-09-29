// ==========================================================================
// INTERACTIVIDAD JS: CANVAS DE ESTRELLAS + FILTROS DE HABILIDADES + TRADUCCIÓN
// ==========================================================================

/* =========================================================
   DICCIONARIO Y LÓGICA DE TRADUCCIÓN (MULTILINGÜE ES / EN)
   ========================================================= */

const translations = {
    es: {
        // Nav
        "nav.inicio": "Inicio",
        "nav.sobreMi": "Sobre mí",
        "nav.habilidades": "Habilidades",
        "nav.proyectos": "Proyectos",
        "nav.redes": "Redes",
        "nav.contacto": "Contacto",

        // Hero
        "hero.disponible": "Disponible para nuevos proyectos",
        "hero.intro": "Especializada en la construcción de APIs REST escalables, arquitectura Backend y aplicaciones web integrales con JavaScript, TypeScript, React, Node.js, Express y Nest.js.",
        "hero.btnProyectos": "Ver proyectos",
        "hero.btnCv": "Descargar CV",

        // Sobre mí
        "sobreMi.titulo": "<Sobre mí />",
        "sobreMi.descripcion": "Desarrolladora Full Stack con especialización en Backend, con sólida formación en Node.js, Express, Nest.js y bases de datos tanto relacionales (MySQL) como no relacionales (MongoDB). Experiencia en el desarrollo de aplicaciones web escalables, APIs REST y arquitecturas modernas con JavaScript/TypeScript. Actualmente cursando Tecnicatura Universitaria en Programación en la UTN, ampliando conocimientos en C++, Java y C# .NET. Orientada a la resolución de problemas técnicos y al aprendizaje continuo de nuevas tecnologías.",
        "sobreMi.ubicacionTitulo": "Ubicación",
        "sobreMi.ubicacionTexto": "CABA, Buenos Aires, Argentina",
        "sobreMi.idiomasTitulo": "Idiomas",
        "sobreMi.idiomaEs": "Español (Nativo)",
        "sobreMi.idiomaEn": "Inglés (B1 Intermedio)",
        "sobreMi.educacionTitulo": "Educación",
        "sobreMi.educacionTexto": "Tecnicatura Univ. en Programación (UTN)",
        "sobreMi.expTitulo": "Experiencia actual",
        "sobreMi.expTexto": "Full Stack Developer Freelance",

        // Timeline
        "timeline.titulo": "Trayectoria y Formación",
        "timeline.item1.fecha": "Julio 2025 – Presente",
        "timeline.item1.puesto": "Desarrolladora Full Stack — Kaizen Cosmetics (Freelance)",
        "timeline.item1.desc": "Desarrollo integral de plataforma e-commerce con stack MERN (React.js, Node.js, Express, MongoDB), autenticación segura mediante Auth0 y pasarela de pagos Mercado Pago.",
        "timeline.item2.fecha": "Marzo 2025 – Presente",
        "timeline.item2.puesto": "Tecnicatura Universitaria en Programación — UTN",
        "timeline.item2.desc": "Formación académica en algoritmos, POO, C++, C#.NET, SQL Server, arquitectura de sistemas y trabajo en equipo con metodologías ágiles.",
        "timeline.item3.puesto": "Programación Backend — Coderhouse",
        "timeline.item3.desc": "Desarrollo en JS asincrónico avanzado del lado del servidor, ecosistema Node.js, Express, Websockets, MongoDB, MongoAtlas y testeo de APIs REST.",
        "timeline.item4.puesto": "SQL — Coderhouse",
        "timeline.item4.desc": "Creación, análisis y mantenimiento de bases de datos relacionales con MySQL, consultas complejas, optimización de índices e indicadores.",
        "timeline.item5.puesto": "React JS — Coderhouse",
        "timeline.item5.desc": "Creación de Single Page Applications (SPA), React Router, manejo de estado global, integración con Firebase y optimización de Virtual DOM.",
        "timeline.item6.puesto": "JavaScript — Coderhouse",
        "timeline.item6.desc": "Desarrollo de software interactivo con JS ES6+, llamadas asincrónicas con AJAX, Fetch API, almacenamiento local y JSON.",
        "timeline.item7.puesto": "Desarrollo Web — Coderhouse",
        "timeline.item7.desc": "Maquetación responsiva, arquitectura de contenidos, HTML5, CSS3, Flexbox, CSS Grid, SASS y Bootstrap.",

        // Skills
        "skills.titulo": "<Mis Habilidades />",
        "skills.filtroTodos": "Todos",
        "skills.filtroBackend": "Backend",
        "skills.filtroFrontend": "Frontend",
        "skills.filtroDatos": "Bases de Datos",
        "skills.filtroLenguajes": "Lenguajes",
        "skills.filtroHerramientas": "Herramientas",

        // Proyectos
        "proyectos.titulo": "<Proyectos Destacados />",
        "proyectos.rolHeader": "Mi Rol:",
        "proyectos.btnGithub": "Ver en GitHub",
        "proyectos.btnSitio": "Ir al sitio",
        "proyectos.btnDemo": "Ver Demo",

        "proyectos.p1.cat": "E-Commerce Full Stack",
        "proyectos.p1.cliente": "Cliente Real",
        "proyectos.p1.desc": "Plataforma e-commerce completa. Incluye catálogo responsivo, gestión de órdenes, autenticación segura con Auth0 e integración de pasarela de pago real.",
        "proyectos.p1.rol": "Full Stack Developer (Liderazgo de arquitectura Backend, DB y UI/UX Frontend).",

        "proyectos.p2.cat": "Base de Datos II / SQL Server",
        "proyectos.p2.titulo": "Sistema de Gestión y Reservas de Cine",
        "proyectos.p2.desc": "Base de datos relacional para la gestión de complejos de cine, funciones, reservas por butaca y pagos con procedimientos almacenados, vistas y triggers.",
        "proyectos.p2.rol": "Responsable del módulo de Infraestructura y Cartelera (DDL, Constraints y reglas de negocio para Complejos, Salas y Funciones).",

        "proyectos.p3.cat": "Programación II / C++ POO",
        "proyectos.p3.titulo": "Sistema de Gestión - Centro de Estética",
        "proyectos.p3.desc": "Software de gestión de agenda, fichas clínicas, caja y liquidación automatizada de comisiones para profesionales con persistencia en disco.",
        "proyectos.p3.rol": "Desarrolladora C++ (Diseño de estructura Cabecera-Detalle para Turnos, lógica financiera y persistencia).",

        "proyectos.subtituloOtros": "Otros Repositorios",
        "proyectos.sec1.cat": "Algoritmos / C++",
        "proyectos.sec1.titulo": "Juego Trey - Consola",
        "proyectos.sec1.desc": "Juego por turnos con estructuras de datos y resolución de eventos (UTN).",

        "proyectos.sec2.cat": "MySQL / Backend",
        "proyectos.sec2.desc": "Arquitectura relacional en MySQL con Stored Procedures, Views y Triggers.",

        "proyectos.sec3.cat": "React.js / SPA",
        "proyectos.sec3.desc": "Single Page Application en React con navegación dinámica y carrito asincrónico.",

        // Redes
        "redes.titulo": "<Conectemos />",

        // Contacto
        "contacto.titulo": "<Contacto />",
        "contacto.lblNombre": "Nombre completo *",
        "contacto.phNombre": "Ej: María Pérez",
        "contacto.lblEmail": "Correo electrónico *",
        "contacto.lblAsunto": "Asunto *",
        "contacto.phAsunto": "Propuesta laboral / Proyecto",
        "contacto.lblMensaje": "Mensaje *",
        "contacto.phMensaje": "Escribí tu mensaje...",
        "contacto.btnEnviar": "Enviar mensaje",

        // Footer
        "footer.derechos": "© 2026 Gisela Lanzillotta. Todos los derechos reservados. 🚀"
    },
    en: {
        // Nav
        "nav.inicio": "Home",
        "nav.sobreMi": "About me",
        "nav.habilidades": "Skills",
        "nav.proyectos": "Projects",
        "nav.redes": "Socials",
        "nav.contacto": "Contact",

        // Hero
        "hero.disponible": "Available for new projects",
        "hero.intro": "Specialized in building scalable REST APIs, Backend architecture, and end-to-end web applications with JavaScript, TypeScript, React, Node.js, Express, and Nest.js.",
        "hero.btnProyectos": "View projects",
        "hero.btnCv": "Download Resume",

        // Sobre mí
        "sobreMi.titulo": "<About me />",
        "sobreMi.descripcion": "Full Stack Developer specialized in Backend development, with a strong background in Node.js, Express, Nest.js, and both relational (MySQL) and non-relational (MongoDB) databases. Experienced in building scalable web applications, REST APIs, and modern architectures using JavaScript/TypeScript. Currently pursuing a University Degree in Programming at UTN, expanding skills in C++, Java, and C# .NET. Focused on solving complex technical problems and continuous learning.",
        "sobreMi.ubicacionTitulo": "Location",
        "sobreMi.ubicacionTexto": "Buenos Aires, Argentina",
        "sobreMi.idiomasTitulo": "Languages",
        "sobreMi.idiomaEs": "Spanish (Native)",
        "sobreMi.idiomaEn": "English (B1 Intermediate)",
        "sobreMi.educacionTitulo": "Education",
        "sobreMi.educacionTexto": "A.S. in Software Programming (UTN)",
        "sobreMi.expTitulo": "Current Role",
        "sobreMi.expTexto": "Freelance Full Stack Developer",

        // Timeline
        "timeline.titulo": "Experience & Education",
        "timeline.item1.fecha": "July 2025 – Present",
        "timeline.item1.puesto": "Full Stack Developer — Kaizen Cosmetics (Freelance)",
        "timeline.item1.desc": "End-to-end development of an e-commerce platform using the MERN stack (React.js, Node.js, Express, MongoDB), Auth0 secure authentication, and Mercado Pago payment gateway.",
        "timeline.item2.fecha": "March 2025 – Present",
        "timeline.item2.puesto": "University Degree in Programming — UTN",
        "timeline.item2.desc": "Academic degree covering algorithms, OOP, C++, C#.NET, SQL Server, software architecture, and agile teamwork.",
        "timeline.item3.puesto": "Backend Programming — Coderhouse",
        "timeline.item3.desc": "Server-side development with advanced asynchronous JS, Node.js ecosystem, Express, Websockets, MongoDB, MongoAtlas, and REST API testing.",
        "timeline.item4.puesto": "SQL — Coderhouse",
        "timeline.item4.desc": "Design, analysis, and maintenance of relational databases using MySQL, complex queries, index optimization, and stored procedure logic.",
        "timeline.item5.puesto": "React JS — Coderhouse",
        "timeline.item5.desc": "Development of Single Page Applications (SPA), React Router, global state management, Firebase integration, and Virtual DOM optimization.",
        "timeline.item6.puesto": "JavaScript — Coderhouse",
        "timeline.item6.desc": "Interactive software development with JS ES6+, asynchronous AJAX calls, Fetch API, local storage, and JSON handling.",
        "timeline.item7.puesto": "Web Development — Coderhouse",
        "timeline.item7.desc": "Responsive web layout, content architecture, HTML5, CSS3, Flexbox, CSS Grid, SASS, and Bootstrap.",

        // Skills
        "skills.titulo": "<My Skills />",
        "skills.filtroTodos": "All",
        "skills.filtroBackend": "Backend",
        "skills.filtroFrontend": "Frontend",
        "skills.filtroDatos": "Databases",
        "skills.filtroLenguajes": "Languages",
        "skills.filtroHerramientas": "Tools",

        // Proyectos
        "proyectos.titulo": "<Featured Projects />",
        "proyectos.rolHeader": "My Role:",
        "proyectos.btnGithub": "View on GitHub",
        "proyectos.btnSitio": "Live Site",
        "proyectos.btnDemo": "Watch Demo",

        "proyectos.p1.cat": "Full Stack E-Commerce",
        "proyectos.p1.cliente": "Real Client",
        "proyectos.p1.desc": "Complete e-commerce platform. Features responsive catalog, order management, secure Auth0 authentication, and live payment processing integration.",
        "proyectos.p1.rol": "Full Stack Developer (Lead architect for Backend, Database, and Frontend UI/UX).",

        "proyectos.p2.cat": "Database Systems / SQL Server",
        "proyectos.p2.titulo": "Cinema Management & Reservation System",
        "proyectos.p2.desc": "Relational database system for cinema complex management, showtimes, seat reservations, and transactions using stored procedures, views, and triggers.",
        "proyectos.p2.rol": "Lead for Infrastructure & Listings module (DDL, Constraints, and business rules for Complexes, Auditoriums, and Showtimes).",

        "proyectos.p3.cat": "Object-Oriented C++",
        "proyectos.p3.titulo": "Aesthetic Clinic Management System",
        "proyectos.p3.desc": "Desktop software for appointment booking, medical records, cash flow, and automated commission calculations with binary file persistence (.dat).",
        "proyectos.p3.rol": "C++ Developer (Designed Header-Detail architecture for appointments, financial tracking, and file storage).",

        "proyectos.subtituloOtros": "Other Repositories",
        "proyectos.sec1.cat": "Algorithms / C++",
        "proyectos.sec1.titulo": "Trey Game - Console",
        "proyectos.sec1.desc": "Turn-based strategy console game utilizing custom data structures and event resolution (UTN).",

        "proyectos.sec2.cat": "MySQL / Backend",
        "proyectos.sec2.desc": "Relational database architecture built in MySQL featuring Stored Procedures, Views, and Triggers.",

        "proyectos.sec3.cat": "React.js / SPA",
        "proyectos.sec3.desc": "Single Page Application built in React with dynamic navigation and asynchronous shopping cart.",

        // Redes
        "redes.titulo": "<Let's Connect />",

        // Contacto
        "contacto.titulo": "<Contact />",
        "contacto.lblNombre": "Full Name *",
        "contacto.phNombre": "e.g. Jane Doe",
        "contacto.lblEmail": "Email Address *",
        "contacto.lblAsunto": "Subject *",
        "contacto.phAsunto": "Job proposal / Project request",
        "contacto.lblMensaje": "Message *",
        "contacto.phMensaje": "Write your message here...",
        "contacto.btnEnviar": "Send Message",

        // Footer
        "footer.derechos": "© 2026 Gisela Lanzillotta. All rights reserved. 🚀"
    }
};

// Función global accesible por onclick en el HTML
function changeLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(element => {
        const key = element.getAttribute('data-i18n-ph');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}

/* =========================================================
   DOM CONTENT LOADED (CANVAS, MENÚ, FILTROS E IDIOMA)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Cargar idioma guardado (Español por defecto)
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    changeLanguage(savedLang);

    // CANVAS DINÁMICO DE ESTRELLAS
    const canvas = document.getElementById('space-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];
        const numStars = 120;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.8;
                this.speedY = Math.random() * 0.3 + 0.05;
                this.opacity = Math.random();
                this.fadeSpeed = Math.random() * 0.015 + 0.005;
            }

            update() {
                this.y -= this.speedY;
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
                }

                this.opacity += this.fadeSpeed;
                if (this.opacity > 1 || this.opacity < 0.2) {
                    this.fadeSpeed = -this.fadeSpeed;
                }
            }

            draw() {
                ctx.fillStyle = `rgba(168, 85, 247, ${Math.abs(this.opacity)})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.update();
                star.draw();
            });
            requestAnimationFrame(animateStars);
        }

        animateStars();
    }

    // Menú Hamburguesa Responsive
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');

    if (btnMenu && navMenu) {
        btnMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Filtro dinámico de Habilidades
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const tarjetasSkills = document.querySelectorAll('.skill-card');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');

            const categoria = boton.getAttribute('data-categoria');

            tarjetasSkills.forEach(card => {
                if (categoria === 'todos' || card.getAttribute('data-cat') === categoria) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });

});