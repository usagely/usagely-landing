"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@metallicjs/ui/components/button";

const STORAGE_KEY = "usagely-cookies-accepted";

const Cookies = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") {
        setShow(true);
      }
    } catch {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // noop - storage unavailable
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-50 p-4 flex flex-col gap-3 max-w-96 md:max-w-sm bg-card dark:bg-popover border border-border/60 rounded-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
            <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
            <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <h4 className="font-semibold text-foreground">We use cookies</h4>
          <p className="text-muted-foreground text-xs leading-relaxed">
            We use essential cookies to make Usagely work, and analytics cookies to understand how you use it. See our{" "}
            <Link href="/privacy" className="underline hover:text-foreground">privacy policy</Link>.
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" onClick={handleAccept} className="flex-1">
          Accept
        </Button>
        <Button size="sm" variant="outline" onClick={handleAccept} className="flex-1">
          Dismiss
        </Button>
      </div>
    </div>
  );
};

export default Cookies;
