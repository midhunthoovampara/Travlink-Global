import re

# 1. Update HTML
with open('content/markup/home.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_section = '''        <!-- service section start -->
        <section id="travlink-services" class="travlink-premium-services-section">
            <div class="travlink-premium-services-bg">
                <img src="/img/background/world-map-outline.svg" alt="" aria-hidden="true">
            </div>
            
            <div class="container travlink-premium-services-container">
                <div class="travlink-premium-services-top" data-aos="fade-up" data-aos-duration="800">
                    <div class="travlink-premium-eyebrow">
                        <span class="travlink-premium-eyebrow-line"></span>
                        OUR SERVICES
                    </div>
                    <h2 class="travlink-premium-heading">
                        <span class="line-1">One world,</span><br>
                        <span class="line-2">Two ways forward.</span>
                    </h2>
                    <p class="travlink-premium-desc">
                        From journeys shaped around you to global opportunities thoughtfully connected, choose the path that moves you forward.
                    </p>
                </div>
                
                <div class="travlink-premium-cards-grid">
                    <!-- Travel Card -->
                    <a href="/travel/" class="travlink-premium-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                        <div class="travlink-premium-card__content">
                            <div class="travlink-premium-card__number">&mdash; 01</div>
                            <div class="travlink-premium-card__icon">
                                <i class="fa-solid fa-plane" style="transform: rotate(-45deg);"></i>
                            </div>
                            <h3 class="travlink-premium-card__title">TRAVEL</h3>
                            <p class="travlink-premium-card__text">Visas, curated journeys & business travel.</p>
                            <div class="travlink-premium-card__arrow">
                                &rarr;
                            </div>
                        </div>
                        <div class="travlink-premium-card__image-wrap">
                            <img src="/img/explore/generated/luxurytravel.webp" alt="Travel" class="travlink-premium-card__image" loading="lazy">
                        </div>
                    </a>

                    <!-- Trade Card -->
                    <a href="/trade/" class="travlink-premium-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <div class="travlink-premium-card__content">
                            <div class="travlink-premium-card__number">&mdash; 02</div>
                            <div class="travlink-premium-card__icon">
                                <i class="fa-solid fa-globe"></i>
                            </div>
                            <h3 class="travlink-premium-card__title">TRADE</h3>
                            <p class="travlink-premium-card__text">Sourcing, shipping & global trade support.</p>
                            <div class="travlink-premium-card__arrow">
                                &rarr;
                            </div>
                        </div>
                        <div class="travlink-premium-card__image-wrap">
                            <img src="/img/explore/generated/tradeee.webp" alt="Trade" class="travlink-premium-card__image" loading="lazy">
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <!-- service section end -->'''

# Replace the block
pattern = re.compile(r'<!-- service section start -->.*?<!-- service section end -->', re.DOTALL)
html = pattern.sub(new_section, html)

with open('content/markup/home.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Update CSS
css_to_add = '''
/* Premium Service Section Styles */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

.travlink-premium-services-section {
    position: relative;
    background: linear-gradient(135deg, #F6F8FB 0%, #FFFFFF 100%);
    padding: 100px 0 90px;
    overflow: hidden;
    z-index: 1;
}

.travlink-premium-services-bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    opacity: 0.06;
    pointer-events: none;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.travlink-premium-services-bg img {
    width: 140%;
    height: auto;
    max-width: none;
    transform: translateX(15%) translateY(-10%);
}

.travlink-premium-services-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 15px;
}

.travlink-premium-services-top {
    max-width: 600px;
    margin-bottom: 65px;
}

.travlink-premium-eyebrow {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #607089;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.travlink-premium-eyebrow-line {
    display: block;
    width: 35px;
    height: 1px;
    background-color: #2F80ED;
}

.travlink-premium-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(42px, 5vw, 68px);
    line-height: 1.1;
    font-weight: 500;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
}

.travlink-premium-heading .line-1 {
    color: #10233F;
}

.travlink-premium-heading .line-2 {
    color: #2F80ED;
    font-style: italic;
}

.travlink-premium-desc {
    color: #607089;
    font-size: 17px;
    line-height: 1.6;
    max-width: 480px;
    margin: 0;
}

.travlink-premium-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    width: 80%;
    margin: 0;
}

.travlink-premium-card {
    display: flex;
    background: #0b1c3c;
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    min-height: 270px;
    box-shadow: 0 15px 40px rgba(16, 35, 63, 0.06);
    border: 1px solid rgba(16, 35, 63, 0.04);
    transition: transform 400ms ease, box-shadow 400ms ease;
    cursor: pointer;
    isolation: isolate;
}

.travlink-premium-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(16, 35, 63, 0.12);
}

.travlink-premium-card__image-wrap {
    flex: 0 0 62%;
    position: relative;
    overflow: hidden;
}

.travlink-premium-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 800ms ease;
}

.travlink-premium-card:hover .travlink-premium-card__image {
    transform: scale(1.04);
}

.travlink-premium-card__content {
    flex: 0 0 38%;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #0b1c3c;
    z-index: 2;
}

.travlink-premium-card__number {
    color: rgba(255, 255, 255, 0.4);
    font-size: 11px;
    letter-spacing: 2px;
    margin-bottom: 22px;
}

.travlink-premium-card__icon {
    color: #fff;
    font-size: 22px;
    margin-bottom: 12px;
    opacity: 0.95;
}

.travlink-premium-card__title {
    color: #ffffff;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 0 0 8px;
    font-family: inherit;
}

.travlink-premium-card__text {
    color: rgba(255, 255, 255, 0.75);
    font-size: 13px;
    line-height: 1.45;
    margin: 0;
    padding-right: 10px;
}

.travlink-premium-card__arrow {
    margin-top: auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    align-self: flex-start;
    transition: background 300ms ease, border-color 300ms ease, color 300ms ease;
}

.travlink-premium-card:hover .travlink-premium-card__arrow {
    background: #fff;
    color: #0b1c3c;
    border-color: #fff;
}

@media (max-width: 1400px) {
    .travlink-premium-cards-grid {
        width: 90%;
    }
}

@media (max-width: 1200px) {
    .travlink-premium-cards-grid {
        width: 100%;
    }
}

@media (max-width: 991px) {
    .travlink-premium-cards-grid {
        grid-template-columns: 1fr;
    }
    
    .travlink-premium-services-bg {
        width: 100%;
        opacity: 0.04;
    }
}

@media (max-width: 575px) {
    .travlink-premium-card {
        flex-direction: column;
    }
    
    .travlink-premium-card__image-wrap {
        flex: 0 0 220px;
    }
    
    .travlink-premium-card__content {
        flex: 1 1 auto;
        min-height: 250px;
    }
}
'''

with open('public/css/home-services-editorial.css', 'a', encoding='utf-8') as f:
    f.write(css_to_add)

print("done")
