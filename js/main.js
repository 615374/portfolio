// ==========================================================================
// INTERACTIVIDAD JS: CANVAS DE ESTRELLAS + FILTROS DE HABILIDADES
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. CANVAS DINÁMICO DE ESTRELLAS Y POLVO ESTELAR (Inspirado en Nico Espin)
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

    // 2. Menú Hamburguesa Responsive
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

    // 3. Filtro dinámico de Habilidades
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