import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import fadma from "@/assets/fadma.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coming Soon — Fadma Ennaji" },
      {
        name: "description",
        content: "Something new is being built. Subscribe for updates, resources, new articles and offers.",
      },
      { property: "og:title", content: "Coming Soon — Fadma Ennaji" },
      {
        property: "og:description",
        content: "Something new is being built. Subscribe for updates, resources, new articles and offers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PROGRESS = 72;
const tasks = ["Writing articles", "Designing pages", "Brewing coffee", "Polishing resources"];

declare global {
  interface Window {
    ml?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const ML_ACCOUNT = "2279033";
const ML_FORM_ID = "WLKoJz";

function Index() {
  const [task, setTask] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTask((t) => (t + 1) % tasks.length), 2200);
    return () => clearInterval(id);
  }, []);

  // MailerLite Universal loader — runs only in the browser.
  // The account must be queued BEFORE universal.js executes, because the
  // library reads the queue and then immediately scans for .ml-embedded divs.
  useEffect(() => {
    if (typeof window.ml !== "function") {
      const stub = ((...args: unknown[]) => {
        (stub.q = stub.q ?? []).push(args);
      }) as NonNullable<Window["ml"]>;
      window.ml = stub;
    }
    window.ml("account", ML_ACCOUNT);

    // Always load a fresh copy so the form is re-scanned on every visit
    // (a previously loaded script won't fill a newly mounted div).
    const load = () => {
      document.getElementById("mailerlite-universal")?.remove();
      const script = document.createElement("script");
      script.id = "mailerlite-universal";
      script.async = true;
      script.src = `https://assets.mailerlite.com/js/universal.js?v=${Date.now()}`;
      document.head.appendChild(script);
    };
    load();
    // Retry once if the form still hasn't appeared.
    const retry = setTimeout(() => {
      if (formRef.current && formRef.current.childElementCount === 0) load();
    }, 4000);
    return () => clearTimeout(retry);
  }, []);


  // Stop the loading note once MailerLite has rendered the form into its div.
  useEffect(() => {
    const node = formRef.current;
    if (node && node.childElementCount > 0) {
      setFormReady(true);
      return;
    }
    let tries = 0;
    const id = setInterval(() => {
      tries += 1;
      const filled = node ? node.childElementCount > 0 : !!document.querySelector(".ml-embedded > *");
      if (filled || tries > 40) {
        setFormReady(true);
        clearInterval(id);
      }
    }, 250);
    return () => clearInterval(id);
  }, []);





  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lavender/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />

      <header className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:flex-wrap sm:justify-between">
        <span className="truncate font-serif text-2xl font-bold tracking-tight">
          Fadma <span className="text-accent">Designs</span>
        </span>
        <span className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:px-4 sm:text-xs">
          Under construction
        </span>
      </header>

      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-4 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent">Coming soon</p>
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Something <span className="text-primary">beautiful</span> is on its way.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Fadma is building what she wished existed when she was trying to do it all. Leave your email and be
            the first one in.
          </p>

          <div className="mt-10 max-w-md">
            <div className="mb-2 flex items-end justify-between text-sm">
              <span className="font-medium">
                {tasks[task]}
                <span className="animate-blink">_</span>
              </span>
              <span className="text-2xl font-extrabold text-primary">{PROGRESS}%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-secondary p-0.5">
              <div
                className="h-full rounded-full bg-gradient-brand animate-shimmer"
                style={{ width: `${PROGRESS}%`, animation: "grow 2s ease-out, shimmer 2.2s linear infinite" }}
              />
            </div>
          </div>

          <div id="subscribe" className="mt-10 max-w-md rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl font-bold">Stay in the loop</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Subscribe to receive updates, resources, new articles and offers.
            </p>
            <div ref={formRef} className="ml-embedded mt-4" data-form={ML_FORM_ID} />
            {!formReady && (
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Loading the subscribe form…
              </p>
            )}

          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-8 rounded-full bg-gradient-brand opacity-20 blur-2xl" />
          <div className="absolute right-0 top-8 z-10 whitespace-nowrap rounded-2xl bg-card px-4 py-2 text-sm font-medium shadow-soft animate-float">
            {"</>"} coding…
          </div>
          <div
            className="absolute bottom-2 left-0 z-10 whitespace-nowrap rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            Hi, I'm Fadma 👋
          </div>
          <img
            src={fadma}
            alt="Fadma, a hijabi girl working on her laptop"
            width={1024}
            height={1024}
            className="relative w-full max-w-lg animate-float"
          />
        </div>
      </section>

      <footer className="relative pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fadma Designs
      </footer>
    </main>
  );
}
