import Nav from "@/components/Nav";
import Hero, { Arrow } from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { images, logoSrc, programs, site, tel, testimonials } from "@/lib/site";

const words = ["Strength", "Conditioning", "Fat loss", "Muscle", "Discipline", "Personal training"];

export default function Home() {
  const wa = `https://wa.me/${site.whatsapp}`;

  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Marquee */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...words, ...words].map((w, i) => (
              <span key={i}>
                {w} <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section className="section" id="about">
          <div className="container about">
            <Reveal className="about__media">
              <Photo src={images.about} alt="Training at Pro Fitness" sizes="(max-width: 900px) 100vw, 50vw" />
            </Reveal>
            <div className="about__text">
              <Reveal>
                <p className="eyebrow">About the gym</p>
                <h2 className="h2">
                  No gimmicks.
                  <br />
                  Just <span className="accent">results.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="body">
                  Pro Fitness is Versova&apos;s neighbourhood gym for people who take training seriously. Whether
                  you&apos;re walking in for the first time or chasing a new PR, you get quality equipment, a
                  clean space and trainers who actually watch your form.
                </p>
              </Reveal>
              <ul className="amenities">
                {site.amenities.map((a, i) => (
                  <Reveal key={a} delay={0.15 + i * 0.06}>
                    <li>
                      <span className="tick" aria-hidden="true" />
                      {a}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.4} className="stats">
                <div>
                  <strong>18</strong>
                  <span>Hours open, Mon to Sat</span>
                </div>
                <div>
                  <strong>7</strong>
                  <span>Days a week</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Air-conditioned</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="section section--alt" id="programs">
          <div className="container">
            <Reveal className="section__head">
              <p className="eyebrow">Programs</p>
              <h2 className="h2">
                Pick your <span className="accent">goal</span>
              </h2>
            </Reveal>
            <div className="programs">
              {programs.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.08} className="program glow-border">
                  <span className="program__n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                  <a href={tel} className="program__link">
                    Call to enquire <Arrow />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Gallery />

        {/* Testimonials */}
        <section className="section" id="reviews">
          <div className="container">
            <Reveal className="section__head">
              <p className="eyebrow">Members</p>
              <h2 className="h2">
                <span className="accent">Testimonials</span>
              </h2>
            </Reveal>
          </div>
          <div className="wall" aria-label="Member testimonials">
            {[
              { list: testimonials, dir: "left" },
              { list: [...testimonials].reverse(), dir: "right" },
            ].map((row, r) => (
              <div className={`wall__row wall__row--${row.dir}`} key={r}>
                <div className="wall__track">
                  {[...row.list, ...row.list].map((t, i) => (
                    <figure className="quote" key={i} aria-hidden={i >= row.list.length ? true : undefined}>
                      <span className="quote__mark" aria-hidden="true">
                        &ldquo;
                      </span>
                      <blockquote>{t.quote}</blockquote>
                      <figcaption className="quote__name">
                        {t.name}
                        <span>Member</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visit */}
        <section className="section section--alt" id="visit">
          <div className="container visit">
            <div>
              <Reveal>
                <p className="eyebrow">Visit us</p>
                <h2 className="h2">
                  Find us on <span className="accent">Yari Road</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="visit__info">
                <div>
                  <h4>Address</h4>
                  <p>{site.address}</p>
                </div>
                <div>
                  <h4>Hours</h4>
                  {site.hours.map((h) => (
                    <p key={h.days}>
                      <span className="hours__days">{h.days}</span>
                      {h.time}
                    </p>
                  ))}
                </div>
                <div>
                  <h4>Contact</h4>
                  <p>
                    <a href={tel}>{site.phone}</a>
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2} className="hero__ctas">
                <a className="btn" href={site.mapsUrl} target="_blank" rel="noreferrer">
                  Get directions <Arrow />
                </a>
                <a className="btn btn--ghost" href={tel}>
                  Call the gym
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="map glow-border">
              <iframe
                src={site.mapEmbed}
                title="Map showing Pro Fitness on Yari Road, Versova"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                aria-hidden="true"
              />
              <a className="map__link" href={site.mapsUrl} target="_blank" rel="noreferrer" aria-label="Open Pro Fitness in Google Maps">
                <span className="map__pin" aria-hidden="true">
                  <span className="map__pulse" />
                  <svg width="34" height="44" viewBox="0 0 34 44" fill="none">
                    <path d="M17 43s15-14.2 15-26A15 15 0 0 0 2 17c0 11.8 15 26 15 26Z" fill="#ff5a1f" stroke="#0a0a0a" strokeWidth="2" />
                    <circle cx="17" cy="17" r="5.5" fill="#0a0a0a" />
                  </svg>
                </span>
                <span className="map__label">Pro Fitness</span>
                <span className="map__open">Open in Google Maps ↗</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <Reveal>
              <h2 className="cta__title">
                Your first session
                <br />
                is <span className="accent">on us.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <a className="btn btn--lg" href={tel}>
                Call {site.phone} to book <Arrow />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#top" className="footer__logo" aria-label="Pro Fitness home">
            <Image src={logoSrc} alt="Pro Fitness" width={480} height={219} />
          </a>
          <p>{site.address}</p>
          <div className="footer__links">
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={wa} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
          <p className="footer__copy">© {new Date().getFullYear()} Pro Fitness. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
