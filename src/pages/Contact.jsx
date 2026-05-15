import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { useScrollReveal, useTextReveal, useMagneticButton } from '../hooks/useAnimations';
import ScrambleText from '../components/ScrambleText';
import './Contact.css';

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', bottleneck: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const magneticRef = useMagneticButton();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    // ... success view ...
    return (
      <div className="contact-page success-view">
        <div className="container">
          <div className="success-card">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={56} />
              <div className="success-ring"></div>
            </div>
            <h1 className="success-title">"Protocol Initialized."</h1>
            <div className="sniper-response">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">almecho-terminal</span>
              </div>
              <div className="terminal-body">
                <p className="typing-line line-1">
                  <span className="prompt">$</span> Boss, your data is being mined by the team right now.
                </p>
                <p className="typing-line line-2">
                  <span className="prompt">$</span> Check your inbox—I've sent you a quick 'Scout Mode' briefing.
                </p>
                <p className="typing-line line-3">
                  <span className="prompt">$</span> No bots, no fluff. Just the next steps to scaling {formData.name ? `${formData.name}'s brand` : 'your brand'}.
                </p>
                <span className="cursor-blink">_</span>
              </div>
            </div>

            <div className="simulated-email mt-6">
              <div className="email-card">
                <div className="email-header">
                  <div className="email-avatar">AG</div>
                  <div>
                    <strong>Boss (Abdul Ghani)</strong>
                    <p className="email-to">to {formData.name ? formData.name.split(' ')[0] : 'you'}</p>
                  </div>
                </div>
                <div className="email-subject-line">
                  <strong>Subject:</strong> question for {formData.name ? formData.name.split(' ')[0] : 'you'} / almeco audit
                </div>
                <div className="email-body">
                  <p>{formData.name ? formData.name.split(' ')[0] : 'Hey'},</p>
                  <p>Received your note about the bottleneck.</p>
                  <p>I'm running this through the Master 9 Protocol with the team (Abbas and Dawood) this afternoon. We're looking for the "Lo-Fi Trust Bypass" opportunities you might be missing.</p>
                  <p>Are you free for a quick 15-minute alignment sync on Thursday or Friday? I want to pressure-test a few ideas I have for your bottleneck.</p>
                  <p>thoughts?</p>
                  <p className="email-sig">— Boss (Abdul Ghani)<br />Founder, Almeco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="section contact-hero text-center">
        <div className="container">
          <Reveal>
            <span className="pre-headline">
              <ScrambleText text="The Bridge" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <AnimatedHeadline>Ready to Stop</AnimatedHeadline>
            <h1 className="mt-2"><span className="title-accent">the Leak?</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-subtitle" style={{ maxWidth: '650px' }}>
              If you've read this far, you know your current system is broken. This is the bridge to the Desired State. Let's install the Almeco Master 9 Protocol into your business.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container contact-grid">
        {/* Left: Trust Badges */}
        <div className="contact-copy">
          <Reveal direction="left">
            <div className="trust-badges">
              {[
                { text: 'No high-pressure sales scripts', icon: <Shield size={22} /> },
                { text: '15-minute diagnostic focus', icon: <Shield size={22} /> },
                { text: "If we can't help, we tell you in 5 mins", icon: <Shield size={22} /> },
              ].map((badge, i) => (
                <div className="badge" key={i} style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
                  <div className="badge-icon">{badge.icon}</div>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: Form */}
        <Reveal direction="right" delay={0.15}>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="frictionless-form">
              <div className={`form-group ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                <label htmlFor="name">name: <span className="label-hint">(So I know who I'm talking to)</span></label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                  required
                />
                <div className="input-border-effect"></div>
              </div>

              <div className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                <label htmlFor="email">business email: <span className="label-hint">(No Gmails, please—we're doing real work here)</span></label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                  required
                />
                <div className="input-border-effect"></div>
              </div>

              <div className={`form-group ${focusedField === 'bottleneck' ? 'focused' : ''} ${formData.bottleneck ? 'filled' : ''}`}>
                <label htmlFor="bottleneck">the bottleneck: <span className="label-hint">(Tell me exactly where your current strategy is failing. Be brutal.)</span></label>
                <textarea
                  id="bottleneck" name="bottleneck" rows="5"
                  value={formData.bottleneck} onChange={handleChange}
                  onFocus={() => setFocusedField('bottleneck')} onBlur={() => setFocusedField(null)}
                  required
                ></textarea>
                <div className="input-border-effect"></div>
              </div>

              <button type="submit" className={`btn-primary submit-btn mt-4 ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting} ref={magneticRef}>
                {isSubmitting ? (
                  <span className="spinner-wrap">
                    <span className="spinner"></span> Initializing...
                  </span>
                ) : (
                  <>Initialize My Strategy Audit <Send size={18} /></>
                )}
              </button>

              <p className="micro-copy text-center mt-4">
                Don't worry, this isn't a high-pressure sales pitch. We won't ask for a kidney, your firstborn, or 45 minutes of your life just to read you a slide deck. If we can't help, we'll tell you in the first 5 minutes.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
