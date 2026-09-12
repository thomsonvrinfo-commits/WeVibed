import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ---------------------------------------------------------------
   Icons — hand-approximated brand marks for demo/prototype use.
   Swap for official SVGs from each brand's press/asset kit
   (Google, Meta/Instagram, WhatsApp) before this ships publicly.
---------------------------------------------------------------- */
function MapsPinIcon() {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26">
      <path fill="#EA4335" d="M24 4c-8 0-14.5 6.4-14.5 14.3C9.5 27.7 24 44 24 44s14.5-16.3 14.5-25.7C38.5 10.4 32 4 24 4z" />
      <circle cx="24" cy="18.5" r="5.8" fill="#fff" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26">
      <defs>
        <linearGradient id="ls-ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FED576" />
          <stop offset=".26" stopColor="#F47133" />
          <stop offset=".6" stopColor="#BC3081" />
          <stop offset="1" stopColor="#4C63D2" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#ls-ig)" />
      <rect x="12" y="12" width="24" height="24" rx="7" fill="none" stroke="#fff" strokeWidth="2.6" />
      <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="2.6" />
      <circle cx="32.5" cy="15.5" r="1.6" fill="#fff" />
    </svg>
  );
}
function WhatsAppIcon({ size = 26 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size}>
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path fill="#fff" d="M24 12a12 12 0 0 0-10.4 18l-1.4 5 5.2-1.4A12 12 0 1 0 24 12z" />
    </svg>
  );
}
function WhatsAppOutlineIcon() {
  return (
    <svg viewBox="0 0 48 48" width="16" height="16" fill="none">
      <path stroke="#fff" strokeWidth="3" d="M24 12a12 12 0 0 0-10.4 18l-1.4 5 5.2-1.4A12 12 0 1 0 24 12z" />
    </svg>
  );
}
function GoogleGIcon() {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26">
      <rect width="48" height="48" rx="10" fill="#fff" />
      <path fill="#4285F4" d="M44 24.5c0-1.6-.15-3.1-.42-4.6H24v8.7h11.2c-.5 2.6-2 4.8-4.2 6.3v5.2h6.8C41.9 36.4 44 30.9 44 24.5z" />
      <path fill="#34A853" d="M24 44c5.7 0 10.5-1.9 14-5.2l-6.8-5.2c-1.9 1.3-4.3 2-7.2 2-5.5 0-10.2-3.7-11.9-8.7H5.1v5.4C8.6 39.6 15.7 44 24 44z" />
      <path fill="#FBBC05" d="M12.1 26.9c-.4-1.3-.7-2.6-.7-4s.2-2.7.7-4v-5.4H5.1C3.6 16.5 2.8 20.1 2.8 24s.8 7.5 2.3 10.5z" />
      <path fill="#EA4335" d="M24 9.9c3.1 0 5.9 1.1 8.1 3.2l6-6C34.5 3.3 29.7 1.3 24 1.3 15.7 1.3 8.6 5.7 5.1 12.5l7 5.4c1.7-5 6.4-8 11.9-8z" />
    </svg>
  );
}
function GoogleReviewIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2">
      <path d="M12 21s-7-5.6-9.3-10A5.7 5.7 0 0 1 12 5.5 5.7 5.7 0 0 1 21.3 11c-2.3 4.4-9.3 10-9.3 10z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2.2">
      <path d="M14 21v-8h3l.5-4H14V6.5A1.5 1.5 0 0 1 15.5 5H17V2h-2.5A4.5 4.5 0 0 0 10 6.5V9H7v4h3v8z" />
    </svg>
  );
}
function ShopBagIcon({ size = 22, stroke = "hsl(var(--primary))" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={stroke} strokeWidth="2">
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Small typing-dots indicator for the "live" ambient card
---------------------------------------------------------------- */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------
   Ambient conversation cards — content kept universal/on-brand
   (a WhatsApp enquiry, an IG comment, a Google review, a page
   inbox question, a new storefront order) rather than agency-speak.
---------------------------------------------------------------- */
const AMBIENT_CARDS = [
  {
    id: "wa",
    top: "14%", left: "3%", z: -90, opacity: 0.4, blur: 1, delay: 0.2,
    avatarBg: "#25D366", icon: <WhatsAppOutlineIcon />,
    name: "Maria K.", preview: "Is this still available?", time: "2m", unread: true,
  },
  {
    id: "ig",
    top: "20%", right: "5%", z: -40, opacity: 0.65, blur: 0, delay: 1.4,
    avatarBg: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
      </svg>
    ),
    name: "devon.creates", preview: "commented: 🔥🔥 love this", time: "now", unread: false,
  },
  {
    id: "review",
    top: "50%", right: "8%", z: -70, opacity: 0.45, blur: 1, delay: 2.6,
    avatarBg: "#4285F4", icon: <GoogleReviewIcon />,
    name: "Google review", preview: "★★★★★ Great service, fast reply", time: "1h", unread: false,
  },
  {
    id: "fb",
    top: "68%", left: "3%", z: -30, opacity: 0.7, blur: 0, delay: 0.8,
    avatarBg: "#1877F2", icon: <FacebookIcon />,
    name: "Page inbox", preview: "What are your opening hours?", time: "4m", unread: true,
  },
  {
    id: "order",
    top: "76%", right: "6%", z: -100, opacity: 0.35, blur: 1.5, delay: 3.5,
    avatarBg: "hsl(var(--primary))", icon: <ShopBagIcon size={16} stroke="#1a1206" />,
    name: "New order", typing: true, time: "now", unread: false,
  },
];

/* Pills — the five core "fragmented pieces" of a business's digital presence */
const PILLS = [
  { id: "location", top: "26%", left: "6%", z: 40, delay: 0, icon: <MapsPinIcon />, label: "Business location" },
  { id: "instagram", top: "36%", left: "2%", z: 20, delay: 1.1, icon: <InstagramIcon />, label: "Instagram post" },
  { id: "whatsapp", top: "45%", right: "4%", z: 55, delay: 2.2, icon: <WhatsAppIcon />, label: "WhatsApp chat" },
];

/* Customer-side search queries — someone discovering a business, not an agency pitching marketing services */
const SEARCH_QUERIES = [
  "clothing store near me",
  "jewellery shop open today",
  "furniture shop harare",
  "electronics shop harare cbd",
  "gift shop open now",
];

function useTypewriter(queries, { typeMs = [55, 95], pauseMs = 1400, deleteMs = 25, gapMs = 400 } = {}) {
  const [text, setText] = useState("");
  useEffect(() => {
    let qi = 0, ci = 0, deleting = false, timer;
    const tick = () => {
      const full = queries[qi];
      if (!deleting) {
        ci++;
        setText(full.slice(0, ci));
        if (ci === full.length) {
          deleting = true;
          timer = setTimeout(tick, pauseMs);
          return;
        }
        timer = setTimeout(tick, typeMs[0] + Math.random() * (typeMs[1] - typeMs[0]));
      } else {
        ci--;
        setText(full.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          qi = (qi + 1) % queries.length;
          timer = setTimeout(tick, gapMs);
          return;
        }
        timer = setTimeout(tick, deleteMs);
      }
    };
    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [queries, typeMs, pauseMs, deleteMs, gapMs]);
  return text;
}

export default function LivingSystem() {
  const stageRef = useRef(null);
  const lightRef = useRef(null);
  const clusterRef = useRef(null);
  const searchText = useTypewriter(SEARCH_QUERIES);
  const askedGyroPermission = useRef(false);

  useEffect(() => {
    const stage = stageRef.current;
    const light = lightRef.current;
    const cluster = clusterRef.current;
    if (!stage || !light || !cluster) return;

    function updateFromXY(clientX, clientY) {
      const rect = stage.getBoundingClientRect();
      const px = ((clientX - rect.left) / rect.width) * 100;
      const py = ((clientY - rect.top) / rect.height) * 100;
      light.style.setProperty("--lx", px + "%");
      light.style.setProperty("--ly", py + "%");
      const rotY = (px / 100 - 0.5) * 14;
      const rotX = -(py / 100 - 0.5) * 10;
      cluster.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }

    function reset() {
      light.style.setProperty("--lx", "50%");
      light.style.setProperty("--ly", "42%");
      cluster.style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    function onPointerMove(e) {
      updateFromXY(e.clientX, e.clientY);
    }
    function onTouchMove(e) {
      if (e.touches[0]) updateFromXY(e.touches[0].clientX, e.touches[0].clientY);
    }
    async function onPointerDown() {
      // iOS 13+ requires an explicit permission prompt, triggered by a user gesture
      if (
        !askedGyroPermission.current &&
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
      ) {
        askedGyroPermission.current = true;
        try {
          await DeviceOrientationEvent.requestPermission();
        } catch {
          /* ignored — falls back to touch/pointer-driven tilt only */
        }
      }
    }
    function onDeviceOrientation(e) {
      if (e.beta === null || e.gamma === null) return;
      const rotY = Math.max(-14, Math.min(14, e.gamma * 0.6));
      const rotX = Math.max(-10, Math.min(10, (e.beta - 45) * -0.4));
      cluster.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      light.style.setProperty("--lx", 50 + rotY * 2 + "%");
      light.style.setProperty("--ly", 42 + rotX * 2 + "%");
    }

    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("touchmove", onTouchMove, { passive: true });
    stage.addEventListener("pointerleave", reset);
    stage.addEventListener("pointerdown", onPointerDown);
    if (typeof window !== "undefined" && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", onDeviceOrientation);
    }
    return () => {
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("touchmove", onTouchMove);
      stage.removeEventListener("pointerleave", reset);
      stage.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("deviceorientation", onDeviceOrientation);
    };
  }, []);

  return (
    <div className="relative px-5">
      <div className="mx-auto max-w-3xl text-center pt-16 md:pt-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground text-balance">
          Your business already has <span className="italic text-primary">digital pieces.</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl text-muted-foreground font-light">We connect them.</p>
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto mt-6 h-[520px] md:h-[640px] max-w-3xl overflow-hidden select-none"
        style={{ perspective: 900 }}
      >
        {/* Interactive light source */}
        <div
          ref={lightRef}
          className="pointer-events-none absolute inset-0"
          style={{
            "--lx": "50%",
            "--ly": "42%",
            background:
              "radial-gradient(circle at var(--lx) var(--ly), hsl(var(--primary) / 0.16), hsl(var(--primary) / 0.05) 30%, transparent 58%)",
            transition: "background 0.08s linear",
          }}
        />

        {/* 3D cluster */}
        <div
          ref={clusterRef}
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Ambient conversation cards, drifting behind the pills */}
          {AMBIENT_CARDS.map((c) => (
            <motion.div
              key={c.id}
              className="absolute flex max-w-[190px] items-center gap-2 rounded-2xl border border-border bg-background/90 px-3.5 py-2 pl-2 shadow-xl"
              style={{
                top: c.top,
                left: c.left,
                right: c.right,
                opacity: c.opacity,
                filter: c.blur ? `blur(${c.blur}px)` : undefined,
                transform: `translateZ(${c.z}px)`,
              }}
              animate={{ y: [0, -8, 0, 6, 0], x: [0, 4, 0, -4, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
            >
              <div
                className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full"
                style={{ background: c.avatarBg }}
              >
                {c.icon}
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-xs font-semibold text-foreground">{c.name}</span>
                {c.typing ? <TypingDots /> : (
                  <span className="truncate text-[11px] text-muted-foreground">{c.preview}</span>
                )}
              </div>
              <span className="ml-1 flex-none self-start text-[9.5px] text-muted-foreground mt-0.5">{c.time}</span>
              {c.unread && <span className="ml-0.5 h-1.5 w-1.5 flex-none self-center rounded-full bg-primary" />}
            </motion.div>
          ))}

          {/* Core pills */}
          {PILLS.map((p) => (
            <motion.div
              key={p.id}
              className="absolute flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-transparent px-4 py-2"
              style={{ top: p.top, left: p.left, right: p.right, transform: `translateZ(${p.z}px)` }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            >
              <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-border">
                {p.icon}
              </div>
              <span className="text-sm text-foreground">{p.label}</span>
            </motion.div>
          ))}

          {/* Google search pill — typewriter */}
          <motion.div
            className="absolute flex w-[190px] sm:w-[260px] items-center gap-2.5 rounded-full border border-border bg-transparent px-4 py-2"
            style={{ top: "60%", left: "4%", transform: "translateZ(15px)" }}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3.3 }}
          >
            <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg border border-border">
              <GoogleGIcon />
            </div>
            <span className="truncate text-sm text-foreground">
              {searchText}
              <span className="ml-0.5 inline-block w-[1px] animate-pulse-soft bg-primary align-middle text-primary">|</span>
            </span>
          </motion.div>

          {/* Shop icon, no label */}
          <motion.div
            className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-border"
            style={{ top: "58%", right: "6%", transform: "translateZ(60px)" }}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 4.4 }}
          >
            <ShopBagIcon />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll to connect
          </span>
          <motion.div
            className="mx-auto mt-1 text-muted-foreground"
            animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
              <path d="M12 4v15M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
