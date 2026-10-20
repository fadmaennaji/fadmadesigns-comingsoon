import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-H_F9lbmz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fadma_default = "/assets/fadma-BUK0WPQK.png";
var PROGRESS = 72;
var tasks = [
	"Writing articles",
	"Designing pages",
	"Brewing coffee",
	"Polishing resources"
];
var ML_ACCOUNT = "2279033";
var ML_FORM_ID = "WLKoJz";
function Index() {
	const [task, setTask] = (0, import_react.useState)(0);
	const formRef = (0, import_react.useRef)(null);
	const [formReady, setFormReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setTask((t) => (t + 1) % tasks.length), 2200);
		return () => clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window.ml !== "function") {
			const stub = ((...args) => {
				(stub.q = stub.q ?? []).push(args);
			});
			window.ml = stub;
		}
		window.ml("account", ML_ACCOUNT);
		const load = () => {
			document.getElementById("mailerlite-universal")?.remove();
			const script = document.createElement("script");
			script.id = "mailerlite-universal";
			script.async = true;
			script.src = `https://assets.mailerlite.com/js/universal.js?v=${Date.now()}`;
			document.head.appendChild(script);
		};
		load();
		const retry = setTimeout(() => {
			if (formRef.current && formRef.current.childElementCount === 0) load();
		}, 4e3);
		return () => clearTimeout(retry);
	}, []);
	(0, import_react.useEffect)(() => {
		const node = formRef.current;
		if (node && node.childElementCount > 0) {
			setFormReady(true);
			return;
		}
		let tries = 0;
		const id = setInterval(() => {
			tries += 1;
			if ((node ? node.childElementCount > 0 : !!document.querySelector(".ml-embedded > *")) || tries > 40) {
				setFormReady(true);
				clearInterval(id);
			}
		}, 250);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lavender/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:flex-wrap sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate font-serif text-2xl font-bold tracking-tight",
					children: ["Fadma ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "Designs"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:px-4 sm:text-xs",
					children: "Under construction"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent",
						children: "Coming soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl",
						children: [
							"Something ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "beautiful"
							}),
							" is on its way."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg text-muted-foreground",
						children: "Fadma is building what she wished existed when she was trying to do it all. Leave your email and be the first one in."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-end justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium",
								children: [tasks[task], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "animate-blink",
									children: "_"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xl font-extrabold text-primary",
								children: [PROGRESS, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-4 overflow-hidden rounded-full bg-secondary p-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-brand animate-shimmer",
								style: {
									width: `${PROGRESS}%`,
									animation: "grow 2s ease-out, shimmer 2.2s linear infinite"
								}
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "subscribe",
						className: "mt-10 max-w-md rounded-2xl border border-border bg-card p-6 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: "Stay in the loop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Subscribe to receive updates, resources, new articles and offers."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: formRef,
								className: "ml-embedded mt-4",
								"data-form": ML_FORM_ID
							}),
							!formReady && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-center text-xs text-muted-foreground",
								children: "Loading the subscribe form…"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-8 rounded-full bg-gradient-brand opacity-20 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-0 top-8 z-10 whitespace-nowrap rounded-2xl bg-card px-4 py-2 text-sm font-medium shadow-soft animate-float",
							children: ["</>", " coding…"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-2 left-0 z-10 whitespace-nowrap rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft animate-float",
							style: { animationDelay: "1.5s" },
							children: "Hi, I'm Fadma 👋"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: fadma_default,
							alt: "Fadma, a hijabi girl working on her laptop",
							width: 1024,
							height: 1024,
							className: "relative w-full max-w-lg animate-float"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative pb-8 text-center text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Fadma Designs"
				]
			})
		]
	});
}
//#endregion
export { Index as component };
