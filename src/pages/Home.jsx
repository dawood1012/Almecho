import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Target, ShieldAlert, Cpu, Zap, TrendingUp, ChevronDown } from 'lucide-react';
import { useScrollReveal, useCountUp, useMagneticButton, useParallax } from '../hooks/useAnimations';
import './Home.css';

/* Reusable scroll-reveal wrapper */
const Reveal = ({ children, className = '', direction = 'up', delay = 0 }) => {
  const [ref, vis] = useScrollReveal();
  const cls = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'scale' ? 'reveal-scale' : 'reveal';
  return (
    <div ref={ref} className={`${cls} ${vis ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const StatCounter = ({ target, suffix, label }) => {
  const [ref, vis] = useScrollReveal();
  const count = useCountUp(target, 2000, vis);
  return (
    <div ref={ref} className={`stat-item reveal-scale ${vis ? 'visible' : ''}`}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const Home = () => {
  const magneticRef = useMagneticButton();
  const parallaxRef = useParallax(0.4);

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="section hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" ref={parallaxRef}></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container hero-inner text-center">
          <span className="pre-headline hero-preheadline">
            WARNING: If you are looking for an overnight "magic pill" or Feel-Good Metrics, close this page.
          </span>
          <h1 className="hero-title">
            Why Your Competitors Are Stealing Your Market Share
            <span className="title-accent"> (And The 'Trust Bypass' System That Reclaims It).</span>
          </h1>
          <p className="hero-subtitle">
            Every day you tolerate your agency's bloated retainers and theory, your competitors steal your buyers. Stop the bleeding. By deploying a hybrid growth architecture, your brand can harness raw, lo-fi attention to dominate US and EU markets.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary" ref={magneticRef}>
              Audit My Growth System <ArrowRight size={20} />
            </Link>
          </div>
          <div className="scroll-indicator">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>GROWTH ARCHITECTURE&nbsp;•&nbsp;TRUST BYPASS&nbsp;•&nbsp;PAIN MINING&nbsp;•&nbsp;ATTENTION ARBITRAGE&nbsp;•&nbsp;LO-FI CREATIVE&nbsp;•&nbsp;MASTER 9&nbsp;•&nbsp;</span>
          <span>GROWTH ARCHITECTURE&nbsp;•&nbsp;TRUST BYPASS&nbsp;•&nbsp;PAIN MINING&nbsp;•&nbsp;ATTENTION ARBITRAGE&nbsp;•&nbsp;LO-FI CREATIVE&nbsp;•&nbsp;MASTER 9&nbsp;•&nbsp;</span>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCounter target={30} suffix="%" label="Revenue Bottleneck Found" />
            <StatCounter target={15} suffix="min" label="Diagnostic Call" />
            <StatCounter target={400} suffix="%" label="Average Demo Lift" />
            <StatCounter target={0} suffix=" BS" label="Zero Fluff Guaranteed" />
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="section bg-secondary-section">
        <div className="container">
          <Reveal>
            <h2 className="section-title text-center">Two Ways to Start</h2>
            <p className="section-subtitle text-center">Choose your entry point into the Master 9 Protocol.</p>
          </Reveal>
          <div className="offers-grid">
            <Reveal delay={0.1}>
              <div className="card offer-card">
                <div className="offer-icon-wrap">
                  <BarChart3 size={32} />
                </div>
                <h3>The B2B Growth Audit</h3>
                <p className="text-secondary">
                  "We'll find the specific bottleneck costing you 30% of your revenue. No fluff, just the math."
                </p>
                <Link to="/contact" className="btn-secondary mt-4">Get My Free Audit <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="card offer-card">
                <div className="offer-icon-wrap">
                  <ShieldAlert size={32} />
                </div>
                <h3>The 'Master 9' Blueprint</h3>
                <p className="text-secondary">
                  "The internal protocol we use to scale brands in the US/EU markets. Available for early access."
                </p>
                <Link to="/blog" className="btn-secondary mt-4">Download the Blueprint <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-title text-center">Services</h2>
            <p className="section-subtitle text-center">The four pillars of the Almecho growth engine.</p>
          </Reveal>
          <div className="services-grid">
            {[
              { icon: <Cpu size={28} />, title: '1. Growth Architecture', secret: 'Why a bloated tech stack is currently murdering your conversion rate.', transform: 'High-performance APP/CRO engines that turn scroll-depth into business assets.' },
              { icon: <Target size={28} />, title: '2. Direct-Response Copywriting', secret: 'Why "polished" grammar is making you look like a bot and destroying your sales.', transform: "The 'Lo-Fi Trust Bypass'—copy that speaks the platform's native tongue to crush sales resistance instantly." },
              { icon: <Zap size={28} />, title: '3. Social Media & Performance Ads', secret: 'The single "Negative Pattern" interrupt that forces a prospect to stop scrolling.', transform: 'Strategic volume and "Pain-Mining" content that trades attention where it\'s cheapest and converts where it\'s hardest.' },
              { icon: <TrendingUp size={28} />, title: '4. Market Intelligence', secret: "The \"Private Signal\" tactic that reveals exactly what your competitor's customers are frustrated with.", transform: 'Social engineering and roadmap alignment that removes the guesswork before a single dollar is spent on ads.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="service-item">
                  <div className="service-icon-wrap">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <div className="service-secret">
                    <span className="label-badge">The Secret</span>
                    <p>{s.secret}</p>
                  </div>
                  <div className="service-transform">
                    <span className="label-badge green">The Transformation</span>
                    <p>{s.transform}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-6">
              <Link to="/services" className="btn-secondary">Explore All Services <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Qualification */}
      <section className="section bg-secondary-section qualification-section">
        <div className="container text-center">
          <Reveal>
            <h2 className="section-title">"Wait, Will This Work For Me?"</h2>
          </Reveal>
          <div className="qualification-list">
            {[
              { role: 'Founder', text: 'tired of being the only person in the room who actually understands the tech-stack bottlenecks...' },
              { role: 'CEO', text: 'who realized "brand awareness" doesn\'t pay the bills and you\'re hungry for actual, measurable ROI...' },
              { role: 'B2B Leader', text: 'sick of the corporate fluff and just want a partner who speaks the raw, native tongue of the market...' },
            ].map((q, i) => (
              <Reveal key={i} direction="left" delay={i * 0.15}>
                <div className="qualification-item">
                  <span className="qual-role">{q.role}</span>
                  <p>If you're a <strong>{q.role}</strong> {q.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Judo Flip CTA */}
      <section className="section judo-section">
        <div className="container text-center">
          <Reveal>
            <p className="judo-statement">
              Look, we aren't for everyone. If you want a 50-page PDF report that says nothing, call a "Big 4" firm. But if you want a lean, high-velocity growth engine that bypasses the noise—<strong>we should talk.</strong>
            </p>
          </Reveal>

          <Reveal direction="scale" delay={0.2}>
            <div className="cta-container">
              <h3>Schedule an Alignment Call.</h3>
              <p className="kidney-joke">
                (It's a 15-minute diagnostic. No high-pressure sales scripts, no kidneys required, and we won't spam your inbox until the end of time. We're too busy scaling brands for that.)
              </p>
              <Link to="/contact" className="btn-primary mt-6">
                Audit My Growth System <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
