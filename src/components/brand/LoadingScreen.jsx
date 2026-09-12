import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoInfinity } from "@/components/brand/Logo";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("wv-loaded");
    if (seen) { setShow(false); return; }
    const t = setTimeout(() => {
      sessionStorage.setItem("wv-loaded", "1");
      setShow(false);
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0B]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <LogoInfinity size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
          >
            WeVibed
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}