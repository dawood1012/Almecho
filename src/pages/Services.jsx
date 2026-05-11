import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Target, Zap, TrendingUp, CheckCircle, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import './Services.css';

const Reveal = ({ children, className = '', direction = 'up', delay = 0 }) => {
  const [ref, vis] = useScrollReveal();
  const cls = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'scale' ? 'reveal-scale' : 'reveal';
  return (
    <div ref={ref} className={`${cls} ${vis ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

const ServiceAccordion = ({ icon, title, phaseLabel, headline, problem, fix, result, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.12}>
      <div className={`service-accordion ${open ? 'open' : ''}`}>
        <button className="accordion-header" onClick={() => setOpen(!open)}>
          <div className="accordion-left">
            <div className="accordion-icon-wrap">{icon}</div>
            <div>
              <span className="phase-label">{phaseLabel}</span>
              <h3>{title}</h3>
            </div>
          </div>
          <div className={`accordion-chevron ${open ? 'rotated' : ''}`}>
            <ChevronDown size={24} />
          </div>
        </button>

        <div className={`accordion-body ${open ? 'expanded' : ''}`}>
          <h4 className="accordion-headline">{headline}</h4>
          <div className="accordion-content-grid">
            <div className="problem-box">
              <span className="box-label">The Problem</span>
              <p>{problem}</p>
            </div>
            <div className="fix-box">
              <span className="box-label fix">The Almeco Fix</span>
              <p>{fix}</p>
            </div>
          </div>
          <div className="result-box">
            <CheckCircle size={20} />
            <div>
              <span className="box-label result">The Result</span>
              <p>{result}</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="section services-hero text-center">
        <div className="container">
          <Reveal>
            <span className="pre-headline">The Master 9 Protocol</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1>Most agencies give you "Deliverables."<br /><span className="title-accent">We give you "Assets."</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-subtitle" style={{ maxWidth: '650px' }}>
              Every service below is a pressure-tested system pulled from the frontlines of US/EU market scaling.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Accordions */}
      <section className="section">
        <div className="container services-accordion-container">
          <ServiceAccordion
            index={0}
            icon={<Target size={28} />}
            title="Tactical Copywriting & OBP Reconstruction"
            phaseLabel="Service 01"
            headline='Why Your "High-Quality" Copy is Actually Repelling High-Ticket Clients.'
            problem='Most copy tries too hard to be "clever" or "professional," creating a barrier between you and the prospect&apos;s trust.'
            fix={`We deploy the 'Lo-Fi Trust Bypass'. By using mobile-first social engineering and internal-mimicking subject lines, we bypass the "sales radar" and strike the deep-seated pain points of your target market.`}
            result="Proposals that get opened, read, and responded to—not just archived."
          />
          <ServiceAccordion
            index={1}
            icon={<Code size={28} />}
            title="Full-Stack Growth Dev (CodexSouls Synergy)"
            phaseLabel="Service 02"
            headline='Introducing the "APP/CRO Engine"—The Tech Stack Designed to Convert, Not Just Exist.'
            problem='Your website is likely a "leaking bucket" of technical debt and friction points that scare off cold traffic.'
            fix='We don&apos;t just "build websites." We engineer conversion environments using JS (ES6+), React.js, and Supabase to create high-velocity, frictionless user journeys.'
            result="A digital asset that works 24/7 as your top-performing salesperson."
          />
          <ServiceAccordion
            index={2}
            icon={<Zap size={28} />}
            title="B2B Intelligence & Sales Engineering"
            phaseLabel="Service 03"
            headline="The Single 'Intelligence Mining' Protocol That Predicts Your Competitor's Next Move."
            problem='Most marketing is reactive. You&apos;re fighting for the same scraps as everyone else using the same generic ads.'
            fix='Using Category 7 (Intelligence/Pain Mining) and Category 8 (Social Engineering), we extract private signals from your market. We find the "unspoken frustrations" and build your offer around them.'
            result="A market position so sharp it makes competition irrelevant."
          />
          <ServiceAccordion
            index={3}
            icon={<TrendingUp size={28} />}
            title="Inorganic Growth & Attention Arbitrage"
            phaseLabel="Service 04"
            headline='Why Your "High ROAS" is Actually a Signal of Stagnation.'
            problem='Most agencies play it safe with "bottom-of-funnel" retargeting, showing ads to people who already know you. They claim victory on vanity metrics while your actual market share stays flat.'
            fix='We deploy Aggressive Paid Ads across Meta, Google, and TikTok. We trade in attention arbitrage—finding where your ideal prospect&apos;s attention is undervalued and striking with "Lo-Fi" Creative that feels native to the feed.'
            result="Scalable, predictable volume that penetrates new markets in the US and Europe, turning cold strangers into high-intent leads."
          />
        </div>
      </section>

      {/* Fascinations */}
      <section className="section bg-secondary-section">
        <div className="container">
          <Reveal>
            <h2 className="section-title text-center">The "Fascinations"</h2>
            <p className="section-subtitle text-center">Specific Action Tactics from the Master 9 playbook.</p>
          </Reveal>
          <div className="tactics-grid">
            {[
              { label: 'How to', text: 'Leverage the "Schwa" of sales—the subtle downbeats in your communication that command a room\'s rhythm.' },
              { label: 'What NEVER', text: 'To include in your Upwork or LinkedIn bio if you want to avoid being labeled as "just another freelancer."' },
              { label: 'The Secret to', text: '"Just-in-Time Knowledge"—how we adapt your strategy in real-time to match 2026\'s shifting attention patterns.' },
            ].map((t, i) => (
              <Reveal key={i} direction="scale" delay={i * 0.15}>
                <div className="tactic-card">
                  <div className="tactic-label">{t.label}</div>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Call */}
      <section className="section text-center">
        <div className="container">
          <Reveal>
            <h2 className="section-title">"Is Almeco Right for My Brand?"</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="strategy-path">
              <div className="path-step">
                <span className="path-number">01</span>
                <div>
                  <h4>Acknowledge</h4>
                  <p className="text-secondary">You've probably been burned by agencies before who promised the world and delivered a spreadsheet of "impressions."</p>
                </div>
              </div>
              <div className="path-step">
                <span className="path-number">02</span>
                <div>
                  <h4>Reframe</h4>
                  <p className="text-secondary">We aren't an agency; we are a Triad Ecosystem. We don't take on "clients"; we take on "strategic partners." If we can't find a systemic bottleneck to fix, we won't take your money.</p>
                </div>
              </div>
              <div className="path-step">
                <span className="path-number">03</span>
                <div>
                  <h4>Pressure-Test</h4>
                  <p className="text-secondary">Let's pressure-test your current strategy in a 15-minute Almeco Master 9 Audit.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="scale" delay={0.3}>
            <div className="cta-container mt-6">
              <Link to="/contact" className="btn-primary">
                Initialize My Audit <ArrowRight size={20} />
              </Link>
              <p className="kidney-joke mt-4">
                It's a 100% free audit. We won't even ask for your kidney or your firstborn child. (We already have enough of our own.)
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
