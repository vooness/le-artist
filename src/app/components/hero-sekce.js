
(function() {
    function waitForDOM(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    function addStyles() {
        var style = document.createElement('style');
        style.innerHTML = '.hero-wrapper123{font-family:Arial,sans-serif;background:#fff;overflow-x:hidden}.hero-section123{min-height:100vh;background:linear-gradient(135deg,#fff 0%,#f8f9fa 100%);display:flex;align-items:center;justify-content:center;position:relative;padding:2rem}.hero-container123{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative;z-index:2}.hero-content123{text-align:left}.hero-badge123{display:inline-block;background:linear-gradient(45deg,#6c5ce7,#a29bfe);color:#fff;padding:0.5rem 1rem;border-radius:25px;font-size:0.9rem;font-weight:600;margin-bottom:1.5rem}.hero-title123{font-size:3.5rem;font-weight:800;color:#2d3436;line-height:1.2;margin-bottom:1.5rem}.hero-subtitle123{font-size:1.3rem;color:#636e72;line-height:1.6;margin-bottom:2.5rem}.cta-buttons123{display:flex;gap:1rem;flex-wrap:wrap}.btn123{padding:1rem 2rem;border:none;border-radius:12px;font-size:1.1rem;font-weight:600;cursor:pointer;transition:all 0.3s ease;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem}.btn-primary123{background:linear-gradient(45deg,#00b894,#00cec9);color:#fff;box-shadow:0 4px 15px rgba(0,184,148,0.3)}.btn-primary123:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,184,148,0.4)}.btn-secondary123{background:#fff;color:#2d3436;border:2px solid #ddd;box-shadow:0 4px 15px rgba(0,0,0,0.1)}.btn-secondary123:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,0.15);border-color:#00b894}.hero-visual123{display:flex;justify-content:center;align-items:center;position:relative}.game-cards123{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}.game-card123{background:#fff;padding:2rem;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,0.1);text-align:center;transition:all 0.3s ease;position:relative;overflow:hidden}.game-card123:hover{transform:translateY(-10px) scale(1.05);box-shadow:0 20px 40px rgba(0,0,0,0.15)}.game-icon123{font-size:3rem;color:#6c5ce7;margin-bottom:1rem}.game-title123{font-size:1.2rem;font-weight:700;color:#2d3436;margin-bottom:0.5rem}.game-price123{font-size:1.1rem;color:#00b894;font-weight:600}.stats123{display:flex;gap:2rem;margin-top:2rem}.stat123{text-align:center}.stat-number123{font-size:2rem;font-weight:800;color:#00b894;display:block}.stat-label123{font-size:0.9rem;color:#636e72;text-transform:uppercase;letter-spacing:1px}@media (max-width:768px){.hero-container123{grid-template-columns:1fr;text-align:center;gap:2rem}.hero-title123{font-size:2.5rem}.cta-buttons123{justify-content:center}.btn123{padding:0.8rem 1.5rem;font-size:1rem}.game-cards123{grid-template-columns:1fr}.stats123{justify-content:center}}';
        document.head.appendChild(style);
    }

    function createLoadingScreen() {
        var loading = document.createElement('div');
        loading.id = 'loading123';
        loading.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;display:flex;justify-content:center;align-items:center;z-index:9999';
        loading.innerHTML = '<div style="text-align:center"><div style="width:50px;height:50px;border:4px solid #f3f3f3;border-top:4px solid #6c5ce7;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 20px"></div><p style="color:#6c5ce7;font-size:18px;font-weight:600">Načítání...</p></div>';
        
        var spinStyle = document.createElement('style');
        spinStyle.innerHTML = '@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';
        document.head.appendChild(spinStyle);
        
        document.body.appendChild(loading);
        return loading;
    }

    function createHeroHTML() {
        return '<div class="hero-wrapper123"><section class="hero-section123"><div class="hero-container123"><div class="hero-content123"><span class="hero-badge123"><i class="fas fa-star"></i> Největší bazar v ČR</span><h1 class="hero-title123">Bazar s<br><span style="background:linear-gradient(45deg,#6c5ce7,#a29bfe);-webkit-background-clip:text;-webkit-text-fill-color:transparent">deskovými hrami</span></h1><p class="hero-subtitle123">Nakupuj a prodávej deskové hry snadno a rychle. Objevuj nové hry za skvělé ceny nebo prodej ty, které už nehraješ.</p><div class="cta-buttons123"><a href="#" class="btn123 btn-primary123"><i class="fas fa-shopping-cart"></i> Koupit hru</a><a href="#" class="btn123 btn-secondary123"><i class="fas fa-plus-circle"></i> Prodat hru</a></div><div class="stats123"><div class="stat123"><span class="stat-number123">2500</span><span class="stat-label123">Aktivních her</span></div><div class="stat123"><span class="stat-number123">850</span><span class="stat-label123">Spokojených hráčů</span></div><div class="stat123"><span class="stat-number123">98</span><span class="stat-label123">Pozitivních hodnocení</span></div></div></div><div class="hero-visual123"><div class="game-cards123"><div class="game-card123"><div class="game-icon123"><i class="fas fa-crown"></i></div><div class="game-title123">Azul</div><div class="game-price123">890 Kč</div></div><div class="game-card123"><div class="game-icon123"><i class="fas fa-chess"></i></div><div class="game-title123">Catan</div><div class="game-price123">1,200 Kč</div></div><div class="game-card123"><div class="game-icon123"><i class="fas fa-gem"></i></div><div class="game-title123">Wingspan</div><div class="game-price123">1,450 Kč</div></div><div class="game-card123"><div class="game-icon123"><i class="fas fa-dragon"></i></div><div class="game-title123">Gloomhaven</div><div class="game-price123">3,200 Kč</div></div></div></div></div></section></div>';
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
        var increment = target / 50;
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 30);
    }

    function addInteractivity() {
        var buttons = document.querySelectorAll('.btn123');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            buttons[i].addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        }
    }

    function init() {
        var contentWrapper = document.getElementById('content-wrapper');
        if (!contentWrapper) return;

        var originalContent = contentWrapper.innerHTML;
        contentWrapper.style.opacity = '0';
        contentWrapper.style.transition = 'opacity 0.5s ease';

        var loading = createLoadingScreen();
        addFontAwesome();
        addStyles();

        setTimeout(function() {
            var heroHTML = createHeroHTML();
            contentWrapper.innerHTML = heroHTML + originalContent;

            loading.style.opacity = '0';
            setTimeout(function() {
                if (loading.parentNode) {
                    loading.parentNode.removeChild(loading);
                }
                contentWrapper.style.opacity = '1';
                addInteractivity();
                setTimeout(animateNumbers, 1000);
            }, 300);
        }, 800);
    }

    waitForDOM(init);
})();
