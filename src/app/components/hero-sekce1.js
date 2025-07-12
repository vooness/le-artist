
(function() {
    // Spustit jen na hlavní stránce
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        return;
    }

    function waitForDOM(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    function addStyles() {
        var style = document.createElement('style');
        style.innerHTML = '.hero-wrapper123{font-family:Arial,sans-serif;background:#fff;margin:0 0 40px 0}.hero-section123{min-height:90vh;background:linear-gradient(135deg,#fff 0%,#f8f9fa 100%);display:flex;align-items:center;justify-content:center;position:relative;padding:3rem 2rem;box-shadow:0 4px 20px rgba(0,0,0,0.08)}.hero-section123::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-image:radial-gradient(circle at 20% 20%,rgba(108,92,231,0.1) 2px,transparent 2px);background-size:60px 60px;opacity:0.3;z-index:1}.hero-container123{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;position:relative;z-index:2}.hero-content123{text-align:left}.hero-badge123{display:inline-block;background:linear-gradient(45deg,#6c5ce7,#a29bfe);color:#fff;padding:0.7rem 1.5rem;border-radius:30px;font-size:1rem;font-weight:700;margin-bottom:2rem;box-shadow:0 4px 15px rgba(108,92,231,0.3);transform:translateY(30px);opacity:0;animation:slideUp123 1s ease 0.2s forwards}.hero-title123{font-size:4rem;font-weight:900;color:#2d3436;line-height:1.1;margin-bottom:2rem;transform:translateY(30px);opacity:0;animation:slideUp123 1s ease 0.4s forwards}.hero-title123 .gradient-text123{background:linear-gradient(45deg,#6c5ce7,#a29bfe,#00b894);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.hero-subtitle123{font-size:1.4rem;color:#636e72;line-height:1.7;margin-bottom:3rem;transform:translateY(30px);opacity:0;animation:slideUp123 1s ease 0.6s forwards}.cta-buttons123{display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:3rem;transform:translateY(30px);opacity:0;animation:slideUp123 1s ease 0.8s forwards}.btn123{padding:1.2rem 2.5rem;border:none;border-radius:15px;font-size:1.2rem;font-weight:700;cursor:pointer;transition:all 0.4s cubic-bezier(0.25,0.8,0.25,1);text-decoration:none;display:inline-flex;align-items:center;gap:0.7rem;position:relative;overflow:hidden;text-transform:uppercase;letter-spacing:1px}.btn123::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);transition:left 0.6s;z-index:1}.btn123:hover::before{left:100%}.btn123 i{z-index:2;position:relative}.btn123 span{z-index:2;position:relative}.btn-primary123{background:linear-gradient(135deg,#00b894,#00cec9,#74b9ff);color:#fff;box-shadow:0 8px 25px rgba(0,184,148,0.4);position:relative}.btn-primary123::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,#00a085,#00b7b7,#6c8cff);opacity:0;transition:opacity 0.3s;border-radius:15px}.btn-primary123:hover{transform:translateY(-4px) scale(1.05);box-shadow:0 15px 35px rgba(0,184,148,0.5)}.btn-primary123:hover::after{opacity:1}.btn-secondary123{background:#fff;color:#2d3436;border:3px solid #e9ecef;box-shadow:0 8px 25px rgba(0,0,0,0.1)}.btn-secondary123:hover{transform:translateY(-4px) scale(1.05);box-shadow:0 15px 35px rgba(0,0,0,0.2);border-color:#00b894;background:#f8f9fa}.hero-visual123{display:flex;justify-content:center;align-items:center;position:relative}.game-cards123{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;transform:perspective(1200px) rotateY(-10deg);animation:float123 8s ease-in-out infinite}.game-card123{background:#fff;padding:2.5rem;border-radius:25px;box-shadow:0 15px 40px rgba(0,0,0,0.12);text-align:center;transition:all 0.5s cubic-bezier(0.25,0.8,0.25,1);position:relative;overflow:hidden;border-top:5px solid transparent}.game-card123::before{content:"";position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(45deg,#6c5ce7,#a29bfe,#00b894);z-index:1}.game-card123:hover{transform:translateY(-15px) scale(1.08) rotateZ(2deg);box-shadow:0 25px 50px rgba(0,0,0,0.2)}.game-card123:nth-child(even):hover{transform:translateY(-15px) scale(1.08) rotateZ(-2deg)}.game-icon123{font-size:3.5rem;color:#6c5ce7;margin-bottom:1.5rem;transition:all 0.3s}.game-card123:hover .game-icon123{transform:scale(1.2) rotateY(360deg);color:#00b894}.game-title123{font-size:1.4rem;font-weight:800;color:#2d3436;margin-bottom:1rem}.game-price123{font-size:1.3rem;color:#00b894;font-weight:700}.stats123{display:flex;gap:3rem;transform:translateY(30px);opacity:0;animation:slideUp123 1s ease 1s forwards}.stat123{text-align:center;position:relative}.stat123::after{content:"";position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);width:40px;height:3px;background:linear-gradient(45deg,#6c5ce7,#00b894);border-radius:2px}.stat-number123{font-size:2.5rem;font-weight:900;color:#00b894;display:block;background:linear-gradient(45deg,#00b894,#6c5ce7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.stat-label123{font-size:1rem;color:#636e72;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;margin-top:0.5rem}.pulse123{animation:pulse123 2.5s infinite}.loading123{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.95);display:flex;justify-content:center;align-items:center;z-index:99999;backdrop-filter:blur(10px)}.loading-content123{text-align:center;transform:scale(0.8);animation:loadingPop123 0.6s ease forwards}.loading-spinner123{width:60px;height:60px;border:4px solid rgba(108,92,231,0.2);border-top:4px solid #6c5ce7;border-radius:50%;animation:spin123 1.2s linear infinite;margin:0 auto 25px}.loading-text123{color:#6c5ce7;font-size:1.2rem;font-weight:700;letter-spacing:1px}@keyframes slideUp123{to{transform:translateY(0);opacity:1}}@keyframes float123{0%,100%{transform:perspective(1200px) rotateY(-10deg) translateY(0px)}50%{transform:perspective(1200px) rotateY(-10deg) translateY(-25px)}}@keyframes pulse123{0%{box-shadow:0 8px 25px rgba(0,184,148,0.4)}50%{box-shadow:0 8px 25px rgba(0,184,148,0.6),0 0 0 15px rgba(0,184,148,0.1)}100%{box-shadow:0 8px 25px rgba(0,184,148,0.4)}}@keyframes spin123{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes loadingPop123{to{transform:scale(1)}}@media (max-width:768px){.hero-container123{grid-template-columns:1fr;text-align:center;gap:3rem;padding:0 1rem}.hero-title123{font-size:2.8rem}.hero-subtitle123{font-size:1.2rem}.cta-buttons123{justify-content:center}.btn123{padding:1rem 2rem;font-size:1rem}.game-cards123{grid-template-columns:1fr;transform:none}.stats123{justify-content:center;gap:2rem}}';
        document.head.appendChild(style);
    }

    function createLoadingElement() {
        var loading = document.createElement('div');
        loading.className = 'loading123';
        loading.innerHTML = '<div class="loading-content123"><div class="loading-spinner123"></div><div class="loading-text123">NAČÍTÁNÍ HERO SEKCE</div></div>';
        return loading;
    }

    function createHeroHTML() {
        return '<div class="hero-wrapper123"><section class="hero-section123"><div class="hero-container123"><div class="hero-content123"><span class="hero-badge123"><i class="fas fa-star"></i> NEJVĚTŠÍ BAZAR V ČR</span><h1 class="hero-title123">Bazar s<br><span class="gradient-text123">deskovými hrami</span></h1><p class="hero-subtitle123">Nakupuj a prodávej deskové hry snadno a rychle. Objevuj nové hry za skvělé ceny nebo prodej ty, které už nehraješ a získej místo pro nové dobrodružství.</p><div class="cta-buttons123"><a href="/vyhledavani/" class="btn123 btn-primary123 pulse123"><i class="fas fa-shopping-cart"></i><span>Koupit hru</span></a><a href="/vykup-her/" class="btn123 btn-secondary123"><i class="fas fa-plus-circle"></i><span>Prodat hru</span></a></div><div class="stats123"><div class="stat123"><span class="stat-number123">2500</span><span class="stat-label123">AKTIVNÍCH HER</span></div><div class="stat123"><span class="stat-number123">850</span><span class="stat-label123">SPOKOJENÝCH HRÁČŮ</span></div><div class="stat123"><span class="stat-number123">98</span><span class="stat-label123">POZITIVNÍCH HODNOCENÍ</span></div></div></div><div class="hero-visual123"><div class="game-cards123"><div class="game-card123"><div class="game-icon123"><i class="fas fa-crown"></i></div><div class="game-title123">Azul</div><div class="game-price123">890 Kč</div></div><div class="game-card123"><div class="game-icon123"><i class="fas fa-chess"></i></div><div class="game-title123">Catan</div><div class="game-price123">1,200 Kč</div></div><div class="game-card123"><div class="game-icon123"><i class="fas fa-gem"></i></div><div class="game-title123">Wingspan</div><div class="game-price123">1,450 Kč</div></div><div class="game-card123"><div class="game-icon123"><i class="fas fa-dragon"></i></div><div class="game-title123">Gloomhaven</div><div class="game-price123">3,200 Kč</div></div></div></div></div></section></div>';
    }

    function addFontAwesome() {
        if (!document.querySelector('link[href*="font-awesome"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
            document.head.appendChild(link);
        }
    }

    function animateNumbers() {
        var stats = document.querySelectorAll('.stat-number123');
        for (var i = 0; i < stats.length; i++) {
            var stat = stats[i];
            var finalNumber = parseInt(stat.textContent);
            var suffix = i === 2 ? '%' : '+';
            animateNumber(stat, finalNumber, suffix);
        }
    }

    function animateNumber(element, target, suffix) {
        var current = 0;
        var increment = target / 60;
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 25);
    }

    function addInteractivity() {
        var buttons = document.querySelectorAll('.btn123');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.05)';
            });
            buttons[i].addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        }
    }

    function init() {
        var bannersRow = document.querySelector('.row.banners-row');
        if (!bannersRow) return;

        // Minimální loading pouze pro hero sekci
        var loading = createLoadingElement();
        document.body.appendChild(loading);

        addFontAwesome();
        addStyles();

        setTimeout(function() {
            var heroHTML = createHeroHTML();
            var heroDiv = document.createElement('div');
            heroDiv.innerHTML = heroHTML;
            
            bannersRow.parentNode.insertBefore(heroDiv.firstChild, bannersRow);

            // Skrytí loading s plynulým efektem
            loading.style.opacity = '0';
            loading.style.transform = 'scale(0.95)';
            
            setTimeout(function() {
                if (loading.parentNode) {
                    loading.parentNode.removeChild(loading);
                }
                addInteractivity();
                setTimeout(animateNumbers, 1200);
            }, 400);
        }, 600);
    }

    waitForDOM(init);
})();
