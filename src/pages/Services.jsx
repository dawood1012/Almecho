import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Target, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { useScrollReveal, useTextReveal } from '../hooks/useAnimations';
import FlipCard from '../components/FlipCard';
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

const AnimatedHeadline = ({ children, className = '' }) => {
  const [ref, vis] = useScrollReveal();
  const textRef = useTextReveal(vis);
  return <h1 ref={ref} className={className}><span ref={textRef}>{children}</span></h1>;
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
            <AnimatedHeadline>Most agencies give you "Deliverables."</AnimatedHeadline>
            <h1 className="mt-2"><span className="title-accent">We give you "Assets."</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-subtitle" style={{ maxWidth: '650px' }}>
              Every service below is a pressure-tested system pulled from the frontlines of US/EU market scaling.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section">
        <div className="container services-grid">
          <Reveal delay={0.1}>
            <FlipCard
              icon={Target}
              title="Tactical Copywriting & OBP Reconstruction"
              details={
                <div className="card-details-content">
                  <p><strong>The Problem:</strong> Most copy tries too hard to be "clever," creating a trust barrier.</p>
                  <p className="mt-4"><strong>The Almeco Fix:</strong> We deploy the 'Lo-Fi Trust Bypass'—social engineering that strikes deep pain points.</p>
                  <div className="result-pill mt-4">
                    <CheckCircle size={14} /> Result: Proposals that get opened and read.
                  </div>
                </div>
              }
            />
          </Reveal>
          <Reveal delay={0.2}>
            <FlipCard
              icon={Code}
              title="Full-Stack Growth Dev (CodexSouls Synergy)"
              details={
                <div className="card-details-content">
                  <p><strong>The Problem:</strong> Your website is likely a "leaking bucket" of technical debt.</p>
                  <p className="mt-4"><strong>The Almeco Fix:</strong> Engineering conversion environments using React.js & Supabase for frictionless journeys.</p>
                  <div className="result-pill mt-4">
                    <CheckCircle size={14} /> Result: A 24/7 digital salesperson.
                  </div>
                </div>
              }
            />
          </Reveal>
          <Reveal delay={0.3}>
            <FlipCard
              icon={Zap}
              title="B2B Intelligence & Sales Engineering"
              details={
                <div className="card-details-content">
                  <p><strong>The Problem:</strong> Most marketing is reactive. You're fighting for scraps using generic ads.</p>
                  <p className="mt-4"><strong>The Almeco Fix:</strong> Category 7 & 8 protocols to extract private signals and build offers around unspoken frustrations.</p>
                  <div className="result-pill mt-4">
                    <CheckCircle size={14} /> Result: Irrelevant competition.
                  </div>
                </div>
              }
            />
          </Reveal>
          <Reveal delay={0.4}>
            <FlipCard
              icon={TrendingUp}
              title="Inorganic Growth & Attention Arbitrage"
              details={
                <div className="card-details-content">
                  <p><strong>The Problem:</strong> Agencies play it safe with bottom-funnel retargeting, claiming vanity wins.</p>
                  <p className="mt-4"><strong>The Almeco Fix:</strong> Aggressive Paid Ads across Meta/TikTok using 'Lo-Fi' Creative that feels native.</p>
                  <div className="result-pill mt-4">
                    <CheckCircle size={14} /> Result: Scalable market penetration.
                  </div>
                </div>
              }
            />
          </Reveal>
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
              { title: 'Leveraging "Schwa"', text: 'How to use subtle downbeats in your communication to command a room\'s rhythm.' },
              { title: 'Bio Trust Killers', text: 'What NEVER to include in your LinkedIn bio if you want to avoid being labeled as a "freelancer."' },
              { title: 'Just-in-Time Knowledge', text: 'How we adapt strategy in real-time to match 2026\'s shifting attention patterns.' },
            ].map((t, i) => (
              <Reveal key={i} direction="scale" delay={i * 0.15}>
                <FlipCard 
                  title={t.title}
                  details={<p>{t.text}</p>}
                />
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
