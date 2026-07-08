import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import NavInteractions from './NavInteractions'
import MemoryFlicker from './MemoryFlicker'
import HeroTitleScramble from './HeroTitleScramble'

export const dynamic = 'force-dynamic'

const mediaUrl = (value: unknown, fallback: string): string => {
  if (value && typeof value === 'object' && 'url' in value) {
    const url = (value as { url?: string | null }).url
    if (url) return url
  }
  return fallback
}

const DEFAULT_NAV_LINKS = [
  { label: 'SOLUTIONS' },
  { label: 'COMPANY' },
  { label: 'PRESS' },
  { label: 'SUPPORT' },
]

const DEFAULT_MEMORY_ROWS = [
  { addr: '0x000689239835 b6', data: 'datax56' },
  { addr: '0x000689237395 a8', data: 'datax32' },
  { addr: '0x000689239576 d3', data: 'datax28' },
  { addr: '0x000689239827 a2', data: 'datax87' },
  { addr: '0x000689231875 b8', data: 'datax35' },
  { addr: '0x000689236987 s3', data: 'datax76' },
  { addr: '0x000689235698 c5', data: 'datax29' },
  { addr: '0x000689231368 a2', data: 'datax96' },
]

const DEFAULT_STATS = [
  { tag: 'THE VOID', num: '200', label: 'Missions suported' },
  { tag: 'THE VOID', num: '100', label: 'Pressure Integrity' },
  { tag: 'THE VOID', num: '0.01', label: 'Failure Rate' },
  { tag: 'THE VOID', num: 'x', label: 'Possibilities' },
]

const DEFAULT_CARDS = [
  { title: 'MOBILITY', desc: 'Advanced material design for dexterity.' },
  {
    title: 'EVA SYSTEMS',
    desc: 'Testing this text',
  },
]

const NEWS_HEADLINE = 'ATHER SYSTEM PARTNERS WITH JAXA FOR LUNAR MISSIONS'

const DEFAULT_NEWS = [
  { date: 'March 12, 2026', title: NEWS_HEADLINE, url: '#' },
  { date: 'March 12, 2026', title: NEWS_HEADLINE, url: '#' },
  { date: 'March 12, 2026', title: NEWS_HEADLINE, url: '#' },
]

const DEFAULT_FOOTER_LINKS = [
  { label: 'Solutions', url: '#' },
  { label: 'Company', url: '#' },
  { label: 'Press', url: '#' },
  { label: 'Support', url: '#' },
]

const SOCIAL_ICONS: Record<string, string> = {
  facebook: '/assets/social/facebook.svg',
  x: '/assets/social/x.svg',
  instagram: '/assets/social/instagram.svg',
  tiktok: '/assets/social/tiktok.svg',
}

const DEFAULT_SOCIALS = [
  { platform: 'facebook', url: '#' },
  { platform: 'x', url: '#' },
  { platform: 'instagram', url: '#' },
  { platform: 'tiktok', url: '#' },
]

const LEAD = 'Pressure rated EVA systems engineered for missions beyond low orbit.'

export default async function HomePage() {
  const payload = await getPayload({ config: await config })
  const home = await payload.findGlobal({ slug: 'home', depth: 1 })

  const logoSrc = mediaUrl(home.logo, '/assets/logo.svg')
  const heroBg = mediaUrl(home.heroBackground, '/assets/opt3_copy.webp')
  const suitsVideo = mediaUrl(home.suitsVideo, '/assets/front_face_suit_space.mp4')
  const helmetSrc = mediaUrl(home.helmet, '/assets/full_body.webp')

  const footerLogoSrc = mediaUrl(home.footerLogo, '/assets/logo.svg')

  const navLinks = home.navLinks?.length ? home.navLinks : DEFAULT_NAV_LINKS
  const memoryRows = home.memoryRows?.length ? home.memoryRows : DEFAULT_MEMORY_ROWS
  const stats = home.stats?.length ? home.stats : DEFAULT_STATS
  const cards = home.cards?.length ? home.cards : DEFAULT_CARDS
  const newsItems = home.newsItems?.length ? home.newsItems : DEFAULT_NEWS
  const footerLinks = home.footerLinks?.length ? home.footerLinks : DEFAULT_FOOTER_LINKS
  const socials = home.footerSocials?.length ? home.footerSocials : DEFAULT_SOCIALS
  const panelLabel = home.panelLabel || 'MF GR UNIT    LOW PRS\nANT SR 6823'

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="hero" id="hero">
        <div
          className="hero__bg"
          aria-hidden="true"
          style={{ backgroundImage: `url("${heroBg}")` }}
        />

        <nav className="nav">
          <a className="nav__logo" href="#" aria-label="Creative home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="CREATIVE" />
          </a>

          <div className="nav__right">
            <div className="nav__menu" id="navMenu">
              {navLinks.map((link, i) => (
                <a
                  className="nav__link"
                  href={
                    link.label?.toUpperCase() === 'COMPANY'
                      ? '#suits'
                      : link.label?.toUpperCase() === 'SOLUTIONS'
                        ? '#hud'
                        : link.label?.toUpperCase() === 'PRESS'
                          ? '#news'
                          : link.label?.toUpperCase() === 'SUPPORT'
                            ? '#footer'
                            : '#'
                  }
                  key={i}
                >
                  {i > 0 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="nav__cross" src="/assets/plus.svg" alt="" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
            <button
              className="nav__toggle"
              id="navToggle"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="navMenu"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="nav__cross" src="/assets/plus.svg" alt="" />
              <span className="nav__burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </nav>
        <div className="nav__backdrop" id="navBackdrop"></div>

        <div className="hero__body">
          <div className="hero__text">
            <span className="tag">{home.heroTag || 'THE VOID'}</span>
            <h1 className="hero__title">{home.heroTitle || 'BUILT FOR THE VOID'}</h1>
            <p className="hero__lead">{home.heroLead || LEAD}</p>
            <a className="btn" href="#">
              <span>{home.heroCtaLabel || 'MEET THE AX 09'}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="btn__arrow" src="/assets/arrow.svg" alt="" />
            </a>
          </div>

          <div className="hero__emblem" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero__emblem-top" src="/assets/emblem-top.svg" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero__emblem-bottom" src="/assets/emblem-bottom.svg" alt="" />
          </div>
        </div>
      </header>

      {/* ===== NEXT-GEN SPACE SUITS ===== */}
      <section className="suits" id="suits">
        <div className="suits__head">
          <h2 className="suits__title">{home.suitsTitle || 'NEXT-GEN SPACE SUITS'}</h2>
          <p className="suits__lead">{home.suitsLead || LEAD}</p>
        </div>

        <div className="panel">
          <video className="panel__video" autoPlay muted loop playsInline aria-hidden="true">
            <source src={suitsVideo} type="video/mp4" />
          </video>

          <span className="emblem-sm" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="emblem-sm__top" src="/assets/emblem-sm-top.svg" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="emblem-sm__bottom" src="/assets/emblem-sm-bottom.svg" alt="" />
          </span>

          <div className="panel__label">
            {panelLabel.split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>

          <a className="btn btn--light" href="#">
            <span>{home.suitsCtaLabel || 'MEET THE AX 09'}</span>
            <svg className="btn__arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M1 11L11 1M11 9V1H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="memory">
            <p className="memory__title">{home.memoryTitle || 'Memory'}</p>
            <div className="memory__rows" id="memoryRows">
              {memoryRows.map((row, i) => (
                <div className="memory__row" key={i}>
                  <span className="memory__addr">{row.addr}</span>
                  <span className="memory__data">{row.data}</span>
                  <span className="memory__max">max</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats" id="stats">
        <div className="stats__row">
          {stats.map((stat, i) => (
            <div className="stat" key={i}>
              <span className="tag">{stat.tag || 'THE VOID'}</span>
              <p className="stat__num">{stat.num}</p>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ADVANCED HUD / RADAR ===== */}
      <section className="hud" id="hud">
        <div className="hud__callout hud__callout--hud">
          <h2 className="hud__title">{home.hudTitle || 'ADVANCED HUD SYSTEM'}</h2>
          <p className="hud__lead">{home.hudLead || LEAD}</p>
        </div>

        <div className="radar" aria-hidden="true">
          <span className="radar__ring radar__ring--lg"></span>
          <span className="radar__ring radar__ring--md"></span>
          <span className="radar__ring radar__ring--sm"></span>
          <span className="radar__conn radar__conn--tl"></span>
          <span className="radar__conn radar__conn--br"></span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="radar__helmet" src={helmetSrc} alt="AX-09 flower-filled bubble helmet" />
        </div>

        <div className="hud__callout hud__callout--life">
          <h2 className="hud__title">{home.hudLifeTitle || 'LIFE SYSTEMS'}</h2>
          <p className="hud__lead">{home.hudLifeLead || LEAD}</p>
        </div>
      </section>

      {/* ===== LIFE SYSTEMS + CARDS ===== */}
      <section className="systems" id="systems">
        <div className="systems__intro">
          <h2 className="systems__title">{home.systemsTitle || 'LIFE SYSTEMS'}</h2>
          <p className="systems__lead">{home.systemsLead || LEAD}</p>
          <a className="btn btn--light" href="#">
            <span>{home.systemsCtaLabel || 'MEET THE AX 09'}</span>
            <svg className="btn__arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M1 11L11 1M11 9V1H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {cards.map((card, i) => (
          <article className="card" key={i}>
            {i === 0 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="card__media" src="/assets/hand.webp" alt="suit hand" />
            )}
            {i === 1 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="card__media" src="/assets/helmet_white.webp" alt="dark helmet" />
            )}
            <div className="card__text">
              <h3 className="card__title">{card.title}</h3>
              <p className="card__desc">{card.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ===== WIDE CTA SECTION ===== */}
      <section className="wide" id="wide">
        <div className="wide__inner">
          <span className="tag">{home.wideTag || 'THE VOID'}</span>
          <h2 className="wide__title">{home.wideTitle || 'BUILT FOR THE VOID'}</h2>
          <p className="wide__lead">{home.wideLead || LEAD}</p>
          <a className="btn btn--light" href="#">
            <span>{home.wideCtaLabel || 'MEET THE AX 09'}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="btn__arrow" src="/assets/arrow.svg" alt="" />
          </a>
        </div>
      </section>

      {/* ===== LATEST NEWS ===== */}
      <section className="news" id="news">
        <div className="news__head">
          <h2 className="news__title">{home.newsTitle || 'LATEST NEWS'}</h2>
          <a className="btn btn--light btn--auto" href={home.newsCtaUrl || '#'}>
            <span>{home.newsCtaLabel || 'SEE ALL NEWS'}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="btn__arrow" src="/assets/arrow.svg" alt="" />
          </a>
        </div>

        <div className="news__row">
          {newsItems.map((item, i) => {
            // const thumb = mediaUrl(item.image, '')
            const thumb = 'image' in item ? mediaUrl(item.image, '') : ''
            return (
              <article className="news-card" key={i}>
                <div className="news-card__body">
                  <div className="news-card__text">
                    <p className="news-card__date">{item.date}</p>
                    <h3 className="news-card__headline">{item.title}</h3>
                  </div>
                  <a className="news-card__more" href={item.url || '#'}>
                    <span>Read More</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="btn__arrow" src="/assets/arrow.svg" alt="" />
                  </a>
                </div>
                <div
                  className="news-card__thumb"
                  style={thumb ? { backgroundImage: `url("${thumb}")` } : undefined}
                  aria-hidden="true"
                />
              </article>
            )
          })}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="footer">
        <div className="footer__logo" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={footerLogoSrc} alt="CREATIVE" />
        </div>

        <div className="footer__bar">
          <div className="footer__row">
            <nav className="footer__links">
              {footerLinks.map((link, i) => (
                <a className="footer__link" href={link.url || '#'} key={i}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="footer__socials">
              {socials.map((social, i) => {
                const icon = SOCIAL_ICONS[social.platform || 'facebook']
                if (!icon) return null
                return (
                  <a
                    className="footer__social"
                    href={social.url || '#'}
                    key={i}
                    aria-label={social.platform || 'social link'}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon} alt="" />
                  </a>
                )
              })}
            </div>
          </div>

          <p className="footer__copy">
            {home.copyright || '© Copyright 2026. Creative Technologies'}
          </p>
        </div>
      </footer>

      <NavInteractions />
      <MemoryFlicker />
      <HeroTitleScramble />
    </>
  )
}
