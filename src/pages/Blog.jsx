import React, { useState } from 'react';
import { Download, MessageSquare, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { useScrollReveal, useTextReveal } from '../hooks/useAnimations';
import FlipCard from '../components/FlipCard';
import './Blog.css';

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

const blogPosts = [
  {
    phase: 'Phase 2',
    readTime: '5 min',
    category: 'Attention Arbitrage',
    title: 'Decoding the "High ROAS" Illusion',
    excerpt: 'Why your ad agency is celebrating while your market share stays entirely flat. A deep dive into attention arbitrage and breaking the bottom-of-funnel trap.',
    icon: TrendingUp,
  },
  {
    phase: 'Phase 4',
    readTime: '8 min',
    category: 'Lo-Fi Trust Bypass',
    title: "The 'Lo-Fi Trust Bypass' in Action: A B2B SaaS Case Study",
    excerpt: 'We rebuilt a B2B SaaS outreach sequence using zero HTML formatting, all-lowercase subjects, and raw text. The result? A 400% increase in booked demos.',
    icon: MessageSquare,
  },
  {
    phase: 'Phase 7',
    readTime: '6 min',
    category: 'Pain Mining',
    title: 'How We Used "Pain Mining" to Steal 3 Enterprise Accounts',
    excerpt: 'The exact intelligence protocol we deployed to identify unspoken frustrations in a competitor\'s customer base—and how we repositioned our client\'s offer to exploit them.',
    icon: TrendingUp,
  },
];

const Blog = () => {
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setSubmitted(true);
      setComment('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="section blog-hero text-center">
        <div className="container">
          <Reveal>
            <span className="pre-headline">The Vault</span>
          </Reveal>
          <Reveal delay={0.1}>
            <AnimatedHeadline>Field Reports &</AnimatedHeadline>
            <h1 className="mt-2"><span className="title-accent">Systemic Insights.</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-subtitle" style={{ maxWidth: '700px' }}>
              Direct from the frontlines of the US/EU markets. No theory—just documented wins, decoded failures, and the math behind the Master 9 Protocol.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container blog-layout">
        {/* Main Content */}
        <main className="blog-main">
          <div className="blog-posts">
            {blogPosts.map((post, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <FlipCard
                  icon={post.icon}
                  title={post.title}
                  details={
                    <div className="blog-details">
                      <div className="blog-meta-mini mb-4">
                        <span className="phase-pill">{post.phase}</span>
                        <span className="time-pill"><Clock size={12} /> {post.readTime}</span>
                      </div>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <button className="read-more-link mt-4">
                        Explore Full Report <ArrowRight size={14} />
                      </button>
                    </div>
                  }
                />
              </Reveal>
            ))}
          </div>

          {/* Comment Section */}
          <Reveal className="mt-6">
            <section className="interactive-comments">
              <h3>Pressure-Test Your Strategy</h3>
              <p className="text-secondary mb-4">
                "Have a strategy you want us to pressure-test? Drop it below. We'll be brutally honest—even if it hurts."
              </p>

              {submitted ? (
                <div className="comment-success">
                  <MessageSquare size={24} color="#16a34a" />
                  <p>Strategy received. The team is tearing it apart. We'll reply with brutally honest feedback soon.</p>
                </div>
              ) : (
                <form onSubmit={handleCommentSubmit} className="comment-form">
                  <textarea
                    placeholder="Describe your current bottleneck or strategy..."
                    rows="4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  ></textarea>
                  <button type="submit" className="btn-secondary">Submit for Review <ArrowRight size={16} /></button>
                </form>
              )}
            </section>
          </Reveal>
        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <Reveal direction="right">
            <div className="floating-offer">
              <div className="offer-badge">Phase 4: The Solution</div>
              <div className="offer-icon-float">
                <Download size={28} />
              </div>
              <h3>The Almeco Master 9 Cheat Sheet</h3>
              <p className="text-secondary mb-4">
                "Don't have time to read 50 articles?" Get the condensed version of every strategy in this vault.
              </p>
              <button className="btn-primary w-100">
                <Download size={18} /> Access the Cheat Sheet
              </button>
              <p className="kidney-joke mt-4 text-center" style={{ fontSize: '0.8rem' }}>
                It's free. We won't sell your data to a Russian bot farm or ask for a pint of O-negative blood. We just want to show you how we work.
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
