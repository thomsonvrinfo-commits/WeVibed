import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoInfinity } from "@/components/brand/Logo";

const links = [
  { label: "Work", to: "/work" },
  { label: "Systems", to: "/systems" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4" style={{ paddingTop: scrolled ? 10 : 18 }}>
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-lg shadow-black/30" : "bg-transparent"
          )}
        >
          <Link to="/" className="wv-logo flex items-center gap-2.5 rounded-full">
            <LogoInfinity size={24} animated />
            <span className="text-sm font-bold tracking-[-0.03em] text-foreground">WeVibed</span>
          </Link>
          <span className="mx-1 h-5 w-px bg-foreground/10 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            to="/start"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-background hover:scale-[1.03] transition-transform"
          >
            Start
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="sm:hidden grid h-9 w-9 place-items-center rounded-full text-foreground hover:bg-foreground/5 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <div className="flex items-center gap-2.5">
                <LogoInfinity size={24} animated />
                <span className="text-sm font-bold tracking-[-0.03em] text-foreground">WeVibed</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-foreground/5 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col px-5 mt-4 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className="block py-4 text-2xl font-bold tracking-tight text-foreground border-b border-foreground/8"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/start"
                className="mt-6 rounded-full bg-primary px-6 py-4 text-center text-base font-semibold text-background"
              >
                Start
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}