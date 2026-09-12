import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/brand/LoadingScreen";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}