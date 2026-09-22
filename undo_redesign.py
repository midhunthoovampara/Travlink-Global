import re

# 1. Restore HTML
with open('content/markup/home.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_section = '''        <!-- service section start -->
        <section id="travlink-services" class="ca-service-3 travlink-service-section travlink-blue-shade pt-30 pb-70"
            style="background-color: #1a1919 !important;">
            <div class="container travlink-services-composition">
                <div class="ca-portfolio-content-3 ca-sec-content-3 travlink-service-intro text-center mb-60"
                    data-aos="fade-up" data-aos-duration="800">
                    <span class="travlink-service-intro__eyebrow">
                        <span class=></span>
                        Our Services
                    </span>
                    <h2 class="travlink-section-heading">
                        <strong>One world,</strong>
                        <em>Two ways forward.</em>
                    </h2>
                    <p class="travlink-service-intro__copy">
                        From journeys shaped around you to global opportunities thoughtfully connected, choose the path
                        that moves you forward.
                    </p>
                </div>
                <div class="travlink-services-editorial">
                    <div class="travlink-service-gateways">
                        <article class="travlink-service-card" tabindex="0" aria-expanded="false" data-aos="fade-right"
                            data-aos-duration="800">
                            <a href="/travel/"
                                style="display: block; width: 100%; height: 100%; position: absolute; inset: 0; z-index: 1;">
                                <img class="travlink-service-card__image" src="/img/explore/generated/luxurytravel.webp"
                                    alt="Traveler with luggage looking across an airport runway at blue hour"
                                    loading="lazy" decoding="async">
                            </a>
                            <div class="travlink-service-card__content" style="pointer-events: none;">
                                <h2 class="travlink-service-card__title">Travel</h2>
                                <p class="travlink-service-card__description">
                                    Visas, curated journeys & business travel.
                                </p>
                                <a class="travlink-hero__explore" href="/travel/" style="pointer-events: auto;">
                                    Explore more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </article>

                        <article class="travlink-service-card" tabindex="0" aria-expanded="false" data-aos="fade-left"
                            data-aos-duration="800">
                            <a href="/trade/"
                                style="display: block; width: 100%; height: 100%; position: absolute; inset: 0; z-index: 1;">
                                <img class="travlink-service-card__image" src="/img/explore/generated/tradeee.webp"
                                    alt="Cargo ship at a modern international port during blue hour" loading="lazy"
                                    decoding="async">
                            </a>
                            <div class="travlink-service-card__content" style="pointer-events: none;">
                                <h2 class="travlink-service-card__title">Trade</h2>
                                <p class="travlink-service-card__description">
                                    Sourcing, shipping & global trade support.
                                </p>
                                <a class="travlink-hero__explore" href="/trade/" style="pointer-events: auto;">
                                    Explore more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <!-- service section end -->'''

pattern = re.compile(r'<!-- service section start -->.*?<!-- service section end -->', re.DOTALL)
html = pattern.sub(old_section, html)

with open('content/markup/home.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Restore CSS
with open('public/css/home-services-editorial.css', 'r', encoding='utf-8') as f:
    css = f.read()

index = css.find('/* Premium Service Section Styles */')
if index != -1:
    css = css[:index]
    with open('public/css/home-services-editorial.css', 'w', encoding='utf-8') as f:
        f.write(css)

print("done")
