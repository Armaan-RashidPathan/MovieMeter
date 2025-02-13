import React from 'react';
import { ThumbsUp, Brain, Sparkles, Clock } from 'lucide-react';
import "../styles/whymoviemeter.css";

const WhyMovieMeter = () => {
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="title">Why <span>MovieMeter?</span></h2>
        <div className="features-grid">
          
          {/* Smart Mood Matching */}
          <div className="feature-card">
            <Brain className="icon brain" />
            <h3>Smart Mood Matching</h3>
            <p>AI analyzes thousands of reviews to match movies with your current mood.</p>
          </div>

          {/* Hidden Gems */}
          <div className="feature-card">
            <Sparkles className="icon sparkles" />
            <h3>Discover Hidden Gems</h3>
            <p>Find amazing movies you might have missed, tailored to your taste.</p>
          </div>

          {/* Real Viewer Insights */}
          <div className="feature-card">
            <ThumbsUp className="icon thumbs" />
            <h3>Real Viewer Insights</h3>
            <p>Get authentic recommendations based on real audience experiences.</p>
          </div>

          {/* Quick Decisions */}
          <div className="feature-card">
            <Clock className="icon clock" />
            <h3>Quick Decision Making</h3>
            <p>Save time with instant, personalized movie suggestions.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyMovieMeter;
