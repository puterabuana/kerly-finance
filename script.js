/* Kerly Finance — interactions + local inline-SVG icon system (no CDN dependency) */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Theme (dark default, light optional, persisted) ---------- */
  var THEME_KEY = "kerly-theme";
  function currentTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") return saved;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f2f4f1" : "#0c1512");
  }
  applyTheme(currentTheme());

  /* ---------- Icon set (Lucide-style, 24x24 stroke) ---------- */
  var ICONS = {
    menu: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    "calendar-days": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    landmark: '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    "line-chart": '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
    "bar-chart-3": '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    "trending-up": '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    "trending-down": '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/>',
    bitcoin: '<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M12 3a6.4 6.4 0 0 0 9 9 9 9 0 1 1-9-9z"/>'
  };

  var NS = "http://www.w3.org/2000/svg";

  function buildIcon(name) {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("data-icon", name);
    svg.innerHTML = ICONS[name] || "";
    return svg;
  }

  function renderIcons(root) {
    var nodes = (root || document).querySelectorAll("[data-lucide]");
    nodes.forEach(function (node) {
      var name = node.getAttribute("data-lucide");
      if (!ICONS[name]) return;
      var svg = buildIcon(name);
      if (node.className) svg.setAttribute("class", node.className);
      node.replaceWith(svg);
    });
  }

  renderIcons(document);

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  function setToggleIcon(open) {
    if (!navToggle) return;
    navToggle.innerHTML = "";
    navToggle.appendChild(buildIcon(open ? "x" : "menu"));
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      setToggleIcon(isOpen);
    });

    mainNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        setToggleIcon(false);
      }
    });
  }

  /* ---------- Theme toggle button (injected into the nav) ---------- */
  var navShell = document.querySelector(".nav-shell");
  if (navShell) {
    var themeBtn = document.createElement("button");
    themeBtn.className = "theme-toggle";
    themeBtn.type = "button";
    themeBtn.setAttribute("aria-label", "Toggle light and dark theme");
    var setThemeIcon = function () {
      var isLight = document.documentElement.getAttribute("data-theme") === "light";
      themeBtn.innerHTML = "";
      themeBtn.appendChild(buildIcon(isLight ? "moon" : "sun"));
    };
    setThemeIcon();
    themeBtn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      setThemeIcon();
    });
    var anchor = navShell.querySelector(".nav-cta") || navShell.querySelector(".nav-toggle");
    navShell.insertBefore(themeBtn, anchor || null);
  }

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Auto edition line (Vol. = current month) ---------- */
  var edition = document.querySelector("[data-edition]");
  if (edition) {
    var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var now = new Date();
    var vol = String(now.getMonth() + 1);
    if (vol.length < 2) vol = "0" + vol;
    edition.textContent = "Vol. " + vol + " — " + MONTHS[now.getMonth()] + " " + now.getFullYear();
  }

  /* ---------- Hero chart draw-in ---------- */
  var hero = document.querySelector(".hero");
  if (hero && hero.querySelector(".hero-chart")) {
    setTimeout(function () {
      hero.classList.add("chart-in");
    }, 250);
  }

  /* ---------- Count-up numbers (Magic UI number-ticker pattern, vanilla) ---------- */
  var counters = document.querySelectorAll("[data-count-to]");
  if (counters.length && "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var countObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          obs.unobserve(entry.target);
          var el = entry.target;
          var target = parseFloat(el.getAttribute("data-count-to")) || 0;
          var start = null;
          var dur = 900;
          function tick(ts) {
            if (start === null) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) {
      countObserver.observe(el);
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(
    ".section-head, .lead-brief, .ledger-row, .desk-cell, .market-context-intro, .market-context-copy, .post-card, .about-photo, .about-copy, .subscribe-box, .article-hero-inner, .article-cover, .article-content, .toc, .mini-card"
  );

  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach(function (t) {
      t.classList.add("reveal-init");
    });
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    revealTargets.forEach(function (t) {
      observer.observe(t);
    });
  }

  /* ---------- Live market data (keyless: CoinGecko + Frankfurter) ---------- */
  var track = document.querySelector("[data-ticker]");

  // Duplicate ticker items once so the -50% marquee loops seamlessly.
  if (track && !track.dataset.cloned) {
    var originals = Array.prototype.slice.call(track.children);
    originals.forEach(function (node) {
      var clone = node.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
    track.dataset.cloned = "1";
  }

  function fmtNum(n, dp) {
    return Number(n).toLocaleString("en-US", { minimumFractionDigits: dp, maximumFractionDigits: dp });
  }
  function fmtPct(n) {
    return (n >= 0 ? "+" : "") + n.toFixed(2) + "%";
  }
  function setItems(sym, valText, chgPct) {
    document.querySelectorAll('[data-sym="' + sym + '"]').forEach(function (item) {
      var v = item.querySelector(".ticker-val");
      var c = item.querySelector(".ticker-chg");
      if (v && valText != null) v.textContent = valText;
      if (c && chgPct != null) c.textContent = fmtPct(chgPct);
      if (chgPct != null) {
        item.classList.toggle("up", chgPct >= 0);
        item.classList.toggle("down", chgPct < 0);
      }
    });
  }

  function loadCrypto() {
    return fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true")
      .then(function (r) { if (!r.ok) throw new Error("coingecko"); return r.json(); })
      .then(function (d) {
        if (d.bitcoin) {
          setItems("BTC", fmtNum(Math.round(d.bitcoin.usd), 0), d.bitcoin.usd_24h_change);
          var chip = document.querySelector('[data-chip="BTC"]');
          if (chip) {
            var s = chip.querySelector("strong");
            if (s) s.textContent = fmtPct(d.bitcoin.usd_24h_change);
            chip.classList.toggle("up", d.bitcoin.usd_24h_change >= 0);
            chip.classList.toggle("down", d.bitcoin.usd_24h_change < 0);
          }
        }
        if (d.ethereum) {
          setItems("ETH", fmtNum(Math.round(d.ethereum.usd), 0), d.ethereum.usd_24h_change);
        }
      });
  }

  // DXY from the ICE basket, computed from ECB rates via Frankfurter (keyless).
  function computeDXY(r) {
    return 50.14348112 *
      Math.pow(1 / r.EUR, -0.576) *
      Math.pow(r.JPY, 0.136) *
      Math.pow(1 / r.GBP, -0.119) *
      Math.pow(r.CAD, 0.091) *
      Math.pow(r.SEK, 0.042) *
      Math.pow(r.CHF, 0.036);
  }
  function loadDXY() {
    var base = "https://api.frankfurter.dev/v1/";
    var q = "?base=USD&symbols=EUR,JPY,GBP,CAD,SEK,CHF";
    var prev = new Date();
    prev.setDate(prev.getDate() - 6); // a few business days back for a change baseline
    var prevStr = prev.toISOString().slice(0, 10);
    return Promise.all([
      fetch(base + "latest" + q).then(function (r) { if (!r.ok) throw new Error("fx"); return r.json(); }),
      fetch(base + prevStr + q).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; })
    ]).then(function (res) {
      var now = computeDXY(res[0].rates);
      var chg = null;
      if (res[1] && res[1].rates) {
        var was = computeDXY(res[1].rates);
        chg = ((now - was) / was) * 100;
      }
      setItems("DXY", now.toFixed(2), chg);
    });
  }

  function refreshMarkets() {
    loadCrypto().catch(function () {}); // keep static fallback on failure
    loadDXY().catch(function () {});
  }

  if (track) {
    refreshMarkets();
    setInterval(refreshMarkets, 60000); // refresh every 60s, within free rate limits
  }

  /* ---------- Newsletter subscribe ---------- */
  var subForm = document.querySelector(".subscribe-form");
  if (subForm) {
    subForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = subForm.querySelector('input[type="email"]');
      if (!input || !input.value.trim()) {
        input && input.focus();
        return;
      }
      var box = document.querySelector(".subscribe-box");
      if (!box) return;

      subForm.style.transition = "opacity 0.25s";
      subForm.style.opacity = "0";

      setTimeout(function () {
        var checkSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>';
        box.innerHTML =
          '<div class="subscribe-success">' +
          '<div class="subscribe-success-icon">' + checkSvg + '</div>' +
          '<p class="section-kicker">You\'re in!</p>' +
          '<h2>Check your inbox soon.</h2>' +
          '<p>The Kerly Sunday Brief lands every Sunday morning — macro, setups, and signals. No noise, ever.</p>' +
          '</div>';
      }, 280);
    });
  }
})();
