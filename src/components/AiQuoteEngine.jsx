import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Sparkles } from "lucide-react";

export default function AiQuoteEngine() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const analyze = (val) => {
    setInput(val);
    if (!val.trim()) { setFeedback(""); return; }
    const lower = val.toLowerCase();
    const tags = [];
    if (/(shop|store|product|sell|ecommerce|cart)/.test(lower)) tags.push("E-commerce detected");
    if (/(ai|chatbot|automat)/.test(lower)) tags.push("AI automation required");
    if (/(restaurant|food|menu|booking|appoint)/.test(lower)) tags.push("Booking system");
    if (/(seo|rank|google|traffic)/.test(lower)) tags.push("SEO strategy");
    if (/(brand|logo|identity)/.test(lower)) tags.push("Brand identity");
    const complexity = val.length > 120 ? "High" : val.length > 50 ? "Medium" : "Low";
    setFeedback(tags.length ? `${tags.join(" · ")} · Complexity: ${complexity}` : `Analyzing requirements... Complexity: ${complexity}`);
  };

  return (
    <div className="glass-strong rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="h-4 w-4 text-primary animate-pulse-glow" />
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">AI Quote Engine</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-black/40 border border-white/5 px-4 py-3 font-mono text-sm">
        <span className="text-accent">$</span>
        <input
          value={input}
          onChange={(e) => analyze(e.target.value)}
          placeholder="Describe your vision..."
          className="flex-1 bg-transparent text-white placeholder:text-muted-foreground/50 outline-none"
        />
        <button className="text-primary hover:text-accent transition-colors">
          <Send className="h-4 w-4" />
        </button>
      </div>
      {feedback && (
        <div className="mt-3 flex items-center gap-2 text-xs font-mono text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          {feedback}
        </div>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        Ready for a real quote? <Link to="/contact" className="text-primary hover:underline">Talk to us →</Link>
      </p>
    </div>
  );
}