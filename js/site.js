:root {
  --green-900:#243b2e;
  --green-800:#31513c;
  --green-700:#496a50;
  --green-100:#eef3eb;
  --orange:#d94f25;
  --orange-dark:#b93e1a;
  --cream:#fbf7f1;
  --paper:#fffdf9;
  --ink:#1f2721;
  --muted:#667168;
  --line:#e4ded4;
  --shadow:0 14px 32px rgba(28,35,29,.10);
  --radius:14px;
  --small-radius:9px;
  --speed:220ms;
}

* { box-sizing:border-box; }
html { scroll-behavior:smooth; }
body {
  margin:0;
  background:var(--cream);
  color:var(--ink);
  font-family:Arial, Helvetica, sans-serif;
  line-height:1.55;
}
img { display:block; max-width:100%; }
a { color:inherit; text-decoration:none; }
button, input, textarea { font:inherit; }

.site-header {
  min-height:72px;
  display:grid;
  grid-template-columns:1fr auto 1fr;
  align-items:center;
  gap:28px;
  padding:12px clamp(20px,5vw,72px);
  background:rgba(255,253,249,.97);
  border-bottom:1px solid var(--line);
  position:sticky;
  top:0;
  z-index:50;
}
.brand {
  display:inline-flex;
  align-items:center;
  gap:10px;
  width:max-content;
  font-family:Georgia, "Times New Roman", serif;
  font-weight:700;
  font-size:1.35rem;
}
.brand-mark { color:var(--green-700); font-size:1.8rem; transform:rotate(-15deg); }
.main-nav { display:flex; gap:28px; align-items:center; }
.main-nav a { position:relative; padding:8px 0; font-size:.92rem; }
.main-nav a::after {
  content:"";
  position:absolute;
  height:2px;
  left:0; right:100%; bottom:2px;
  background:var(--orange);
  transition:right var(--speed) ease;
}
.main-nav a:hover::after, .main-nav a:focus-visible::after { right:0; }

.header-tools { display:flex; justify-content:flex-end; align-items:center; gap:14px; }
.header-tools input {
  width:min(250px, 22vw);
  padding:9px 12px;
  border:1px solid #cfc8bd;
  border-radius:7px;
  background:white;
}
.heart { color:var(--orange); font-size:1.35rem; }

.hero {
  min-height:560px;
  display:grid;
  grid-template-columns:.88fr 1.12fr;
  background:linear-gradient(105deg,#fbf5eb 0%,#f8eee1 48%,#efe3d1 100%);
  overflow:hidden;
}
.hero-copy { padding:80px clamp(28px,7vw,105px); display:flex; flex-direction:column; justify-content:center; }
.eyebrow {
  margin:0 0 10px;
  color:var(--orange);
  font-size:.78rem;
  text-transform:uppercase;
  letter-spacing:.13em;
  font-weight:700;
}
.light { color:#f2c9a8; }
.hero h1 {
  margin:0 0 22px;
  font-family:Georgia,"Times New Roman",serif;
  font-size:clamp(3rem,5.6vw,5.8rem);
  line-height:.95;
  letter-spacing:-.035em;
}
.hero-text { max-width:560px; color:#49534c; font-size:1.06rem; margin:0 0 28px; }
.button {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  width:max-content;
  border:0;
  border-radius:8px;
  padding:12px 18px;
  cursor:pointer;
  font-weight:700;
}
.button-primary {
  background:var(--orange);
  color:white;
  box-shadow:0 7px 15px rgba(217,79,37,.22);
  transition:transform var(--speed) ease, background var(--speed) ease;
}
.button-primary:hover, .button-primary:focus-visible { transform:translateY(-2px); background:var(--orange-dark); }
.hero-photo-wrap { position:relative; min-height:560px; overflow:hidden; }
.hero-photo { width:100%; height:100%; object-fit:cover; filter:saturate(1.05) contrast(1.03); animation:slowZoom 9s ease-in-out infinite alternate; }
.paper-note {
  position:absolute;
  right:7%; bottom:18%;
  background:#fff8ed;
  padding:18px 20px;
  color:#b94b27;
  font-family:"Comic Sans MS", cursive;
  font-size:1.25rem;
  line-height:1.2;
  transform:rotate(-5deg);
  box-shadow:0 8px 25px rgba(0,0,0,.13);
  clip-path:polygon(4% 0,100% 5%,95% 93%,7% 100%,0 12%);
}

.benefits {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  background:var(--paper);
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.benefits article {
  display:flex;
  align-items:center;
  gap:13px;
  padding:22px 25px;
  border-right:1px solid var(--line);
}
.benefits article:last-child { border-right:0; }
.benefits h2 { font-size:.92rem; margin:0 0 2px; }
.benefits p { font-size:.78rem; margin:0; color:var(--muted); }
.mini-icon { color:var(--orange); font-size:1.55rem; }

.section-shell { width:min(1200px, calc(100% - 40px)); margin:0 auto; padding:54px 0; }
.section-title-row { display:flex; align-items:end; justify-content:space-between; gap:24px; margin-bottom:24px; }
.section-title-row h2, .occasion-section h2, .about-grid h2, .team-section h2, .contact-layout h2 {
  margin:0;
  font-family:Georgia,"Times New Roman",serif;
  font-size:2rem;
}
.section-kicker { color:var(--muted); max-width:420px; margin:0; }

.occasion-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
.occasion-card, .recipe-card {
  background:white;
  border:1px solid var(--line);
  border-radius:var(--small-radius);
  overflow:hidden;
  box-shadow:0 5px 18px rgba(28,35,29,.06);
}
.occasion-card { transition:transform var(--speed) ease, box-shadow var(--speed) ease; }
.occasion-card:hover, .occasion-card:focus-within { transform:translateY(-5px); box-shadow:var(--shadow); }
.occasion-card img { width:100%; height:170px; object-fit:cover; }
.card-copy { padding:15px; position:relative; min-height:100px; }
.card-copy h3 { margin:0 42px 2px 0; font-family:Georgia,serif; }
.card-copy p { margin:0; color:var(--muted); font-size:.88rem; }
.card-copy a {
  position:absolute; right:14px; bottom:15px;
  width:34px; height:34px;
  border-radius:50%;
  display:grid; place-items:center;
  background:var(--orange); color:white;
}

.collection-banner, .about-banner {
  padding:54px 20px 30px;
  text-align:center;
  color:white;
  background:
    linear-gradient(rgba(25,35,27,.76),rgba(25,35,27,.76)),
    url("../images/about-food.jpg") center/cover;
}
.collection-banner h1, .about-banner h1 {
  font-family:Georgia,serif;
  font-size:clamp(2.4rem,5vw,4.2rem);
  margin:0 0 5px;
}
.collection-banner > p:not(.eyebrow), .about-banner > p:not(.eyebrow) { margin:0 auto; max-width:700px; color:#f4efe8; }
.filter-row { margin-top:24px; display:flex; justify-content:center; flex-wrap:wrap; gap:10px; }
.chip {
  padding:8px 20px;
  border-radius:999px;
  background:#fff;
  color:#273229;
  border:1px solid rgba(255,255,255,.7);
  font-size:.85rem;
}
.active-chip { background:var(--orange); color:white; border-color:var(--orange); }

.recipe-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
.recipe-card { position:relative; }
.recipe-photo-link img { width:100%; height:165px; object-fit:cover; transition:transform 350ms ease; }
.recipe-card:hover .recipe-photo-link img { transform:scale(1.035); }
.save-button {
  position:absolute; top:10px; right:10px;
  width:34px; height:34px;
  border:0; border-radius:50%;
  background:rgba(255,255,255,.92);
  color:var(--orange);
  font-size:1.15rem;
}
.recipe-card-body { padding:14px; }
.recipe-card-body h3 { margin:0 0 4px; font-family:Georgia,serif; font-size:1.06rem; }
.recipe-card-body p { color:var(--muted); font-size:.86rem; min-height:44px; margin:0 0 12px; }
.meta, .detail-meta { display:flex; gap:16px; color:#59635b; font-size:.78rem; flex-wrap:wrap; }

.suggested-section { background:#f4eee6; padding:38px max(20px, calc((100vw - 1200px)/2)); }
.suggested-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:15px; }
.suggestion-card {
  display:grid; grid-template-columns:86px 1fr; gap:12px;
  background:white; border:1px solid var(--line); border-radius:9px; padding:10px;
}
.suggestion-card img { width:86px; height:78px; object-fit:cover; border-radius:6px; }
.suggestion-card h3 { font-size:.88rem; margin:2px 0; }
.suggestion-card p { font-size:.76rem; color:var(--muted); margin:0 0 5px; }
.suggestion-card span { font-size:.68rem; color:var(--orange-dark); font-weight:700; }
.text-link { color:var(--orange-dark); font-weight:700; font-size:.9rem; }
.simulation-note { color:var(--muted); font-size:.8rem; margin:15px 0 0; }

.detail-page { padding-top:34px; }
.back-link { display:inline-block; margin-bottom:18px; color:var(--orange-dark); font-weight:700; }
.recipe-intro {
  display:grid;
  grid-template-columns:1.1fr 1.2fr .9fr;
  gap:24px;
  align-items:stretch;
}
.detail-photo { position:relative; overflow:hidden; border-radius:var(--radius); min-height:300px; }
.detail-photo img { width:100%; height:100%; object-fit:cover; }
.zoom-mark {
  position:absolute; right:14px; bottom:14px;
  width:40px; height:40px; border-radius:50%;
  background:#28332c; color:white; display:grid; place-items:center;
}
.detail-summary { background:white; padding:28px; border:1px solid var(--line); border-radius:var(--radius); }
.detail-summary h1 { font-family:Georgia,serif; font-size:2.35rem; margin:12px 0 10px; }
.tag { display:inline-block; background:var(--orange); color:white; font-size:.72rem; font-weight:700; padding:5px 9px; border-radius:5px; }
.detail-summary p { color:var(--muted); }
.tips-box, .ingredients-card, .steps-card, .story-card, .tips-card, .contact-form-card {
  background:white; border:1px solid var(--line); border-radius:var(--radius); padding:24px;
}
.tips-box h2, .ingredients-card h2, .steps-card h2, .story-card h2 { font-family:Georgia,serif; margin-top:0; }
.tips-box { background:#f1f5ed; }
.tips-box ul, .tips-card ul { padding-left:20px; margin-bottom:0; }
.tips-box li, .tips-card li { margin:8px 0; }

.detail-columns { display:grid; grid-template-columns:1fr 1.35fr .9fr; gap:22px; margin-top:26px; }
.check-list { list-style:none; padding:0; margin:0; }
.check-list li { margin:10px 0; padding-left:24px; position:relative; }
.check-list li::before { content:"✓"; position:absolute; left:0; color:var(--green-700); font-weight:700; }
.number-list { list-style:none; counter-reset:steps; padding:0; margin:0; }
.number-list li { counter-increment:steps; padding-left:40px; position:relative; margin:13px 0; }
.number-list li::before {
  content:counter(steps);
  position:absolute; left:0; top:-2px;
  width:27px; height:27px; border-radius:50%;
  display:grid; place-items:center;
  background:var(--orange); color:white; font-weight:700; font-size:.8rem;
}
.story-card { background:#eff4e9; }

.assistant-panel {
  margin-top:28px;
  padding:28px;
  border:1px solid #d8d1c7;
  border-radius:var(--radius);
  background:linear-gradient(135deg,#fffdf9,#f1eee7);
  display:grid;
  grid-template-columns:.75fr 1.25fr;
  gap:26px;
}
.assistant-panel h2 { margin:0 0 8px; font-family:Georgia,serif; font-size:2rem; }
.assistant-cards { display:grid; gap:12px; }
.assistant-cards article { background:white; border:1px solid var(--line); border-radius:9px; padding:14px; }
.assistant-cards p { margin:5px 0 0; color:var(--muted); font-size:.88rem; }

.related-section { margin-top:34px; }
.related-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:15px; }
.mini-recipe { background:white; border:1px solid var(--line); border-radius:9px; padding:10px; display:grid; grid-template-columns:82px 1fr; gap:12px; align-items:center; }
.mini-recipe img { width:82px; height:70px; object-fit:cover; border-radius:6px; grid-row:1/3; }
.mini-recipe span { font-weight:700; }
.mini-recipe small { color:var(--muted); }

.about-grid { display:grid; grid-template-columns:1.1fr .9fr; gap:30px; align-items:center; }
.story-block p { color:#59635b; }
.about-photo { width:100%; height:260px; object-fit:cover; border-radius:var(--radius); box-shadow:var(--shadow); }
.team-section { padding-top:12px; }
.team-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-top:18px; }
.team-card { background:white; border:1px solid var(--line); border-radius:var(--radius); padding:18px; display:grid; grid-template-columns:90px 1fr; gap:16px; align-items:center; }
.team-card img { width:90px; height:90px; object-fit:cover; border-radius:50%; }
.team-card h3 { margin:0 0 4px; font-size:1rem; }
.team-card strong { color:var(--green-700); font-size:.82rem; }
.team-card p { color:var(--muted); font-size:.85rem; margin-bottom:0; }

.contact-layout { display:grid; grid-template-columns:.8fr .9fr 1.3fr; gap:20px; padding-top:15px; }
.contact-info { padding:18px 0; }
.contact-info h2 { margin-bottom:16px; }
.contact-info p { color:#49554d; }
.tips-card { background:#eef3e9; }
.contact-form-card { background:#f3f5e9; }
.form-note { color:var(--muted); font-size:.8rem; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
label { display:grid; gap:5px; font-size:.82rem; font-weight:700; color:#49534c; }
input, textarea {
  width:100%; padding:10px 11px;
  border:1px solid #cbc6bd; border-radius:6px;
  background:white;
}
textarea { resize:vertical; }
.contact-form-card form { display:grid; gap:12px; }
.contact-form-card .button { justify-self:end; }

.team-intro-page h1 { font-family:Georgia,serif; font-size:clamp(2.5rem,5vw,4rem); margin:5px 0 12px; }
.lead { max-width:800px; color:var(--muted); font-size:1.05rem; }
.leader-card, .project-summary-box {
  background:white; border:1px solid var(--line); border-radius:var(--radius); padding:24px; margin:28px 0;
}
.responsibility-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
.responsibility-grid article { background:white; border:1px solid var(--line); border-radius:var(--radius); padding:22px; }
.responsibility-grid h3 { margin-top:0; }
.responsibility-grid ul { padding-left:20px; }

.site-footer {
  display:flex; justify-content:space-between; gap:30px; align-items:center;
  padding:30px clamp(20px,5vw,72px);
  background:var(--green-900); color:white;
}
.site-footer p { margin:4px 0 0; color:#cad4cc; font-size:.85rem; }
.site-footer nav { display:flex; gap:20px; font-size:.9rem; }

.visually-hidden {
  position:absolute!important; width:1px!important; height:1px!important; padding:0!important; margin:-1px!important;
  overflow:hidden!important; clip:rect(0,0,0,0)!important; white-space:nowrap!important; border:0!important;
}
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
  outline:3px solid #0c6cc7; outline-offset:3px;
}

@keyframes slowZoom {
  from { transform:scale(1); }
  to { transform:scale(1.04); }
}
@keyframes gentleRise {
  from { opacity:0; transform:translateY(12px); }
  to { opacity:1; transform:translateY(0); }
}
@keyframes softPulse {
  0%,100% { box-shadow:0 7px 15px rgba(217,79,37,.22); }
  50% { box-shadow:0 9px 25px rgba(217,79,37,.34); }
}
.home-page .hero-copy { animation:gentleRise .65s ease both; }
.home-page .button-primary { animation:softPulse 2.8s ease-in-out 1.1s 2; }

@media (max-width:1023px) {
  .site-header { grid-template-columns:1fr auto; }
  .main-nav { grid-column:1 / -1; grid-row:2; justify-content:center; border-top:1px solid var(--line); padding-top:8px; }
  .hero { grid-template-columns:1fr; }
  .hero-photo-wrap { min-height:420px; }
  .benefits { grid-template-columns:repeat(2,1fr); }
  .occasion-grid, .recipe-grid { grid-template-columns:repeat(2,1fr); }
  .suggested-grid { grid-template-columns:repeat(2,1fr); }
  .recipe-intro { grid-template-columns:1fr 1fr; }
  .tips-box { grid-column:1 / -1; }
  .detail-columns { grid-template-columns:1fr 1fr; }
  .story-card { grid-column:1 / -1; }
  .assistant-panel { grid-template-columns:1fr; }
  .contact-layout { grid-template-columns:1fr 1fr; }
  .contact-form-card { grid-column:1 / -1; }
}

@media (max-width:767px) {
  .site-header { grid-template-columns:1fr; gap:10px; position:static; }
  .brand { justify-self:center; }
  .header-tools { justify-content:center; }
  .header-tools input { width:min(100%,420px); }
  .main-nav { grid-column:auto; grid-row:auto; }
  .hero-copy { padding:58px 24px; }
  .hero h1 { font-size:3.4rem; }
  .hero-photo-wrap { min-height:350px; }
  .benefits { grid-template-columns:1fr; }
  .benefits article { border-right:0; border-bottom:1px solid var(--line); }
  .section-shell { width:min(100% - 28px,1200px); padding:42px 0; }
  .section-title-row { align-items:flex-start; flex-direction:column; }
  .occasion-grid, .recipe-grid, .suggested-grid, .related-grid, .team-grid, .responsibility-grid { grid-template-columns:1fr; }
  .recipe-photo-link img { height:220px; }
  .recipe-intro, .detail-columns, .about-grid, .contact-layout { grid-template-columns:1fr; }
  .story-card, .contact-form-card { grid-column:auto; }
  .detail-summary h1 { font-size:2rem; }
  .assistant-panel { padding:20px; }
  .form-row { grid-template-columns:1fr; }
  .team-card { grid-template-columns:75px 1fr; }
  .team-card img { width:75px; height:75px; }
  .site-footer { flex-direction:column; text-align:center; }
  .site-footer nav { flex-wrap:wrap; justify-content:center; }
}

@media (prefers-reduced-motion:reduce) {
  *, *::before, *::after {
    animation-duration:.01ms!important;
    animation-iteration-count:1!important;
    transition-duration:.01ms!important;
    scroll-behavior:auto!important;
  }
}

/* Final polish */
.main-nav .active-nav {
  font-weight: 700;
}
.main-nav .active-nav::after {
  right: 0;
}
img {
  image-rendering: auto;
}
.hero-photo, .recipe-photo-link img, .detail-photo img, .about-photo, .occasion-card img {
  backface-visibility: hidden;
}

.site-search-form {
  display:flex;
  align-items:center;
  border:1px solid #cfc8bd;
  border-radius:7px;
  overflow:hidden;
  background:white;
}
.site-search-form input {
  border:0;
  border-radius:0;
  width:min(230px,20vw);
}
.site-search-form input:focus { outline:none; }
.search-button {
  border:0;
  background:white;
  padding:8px 11px;
  cursor:pointer;
  color:var(--green-800);
  font-size:1.1rem;
}
.favorites-link {
  display:inline-flex;
  align-items:center;
  gap:5px;
  color:var(--orange);
  font-weight:700;
}
.favorite-count {
  min-width:20px;
  height:20px;
  padding:0 6px;
  border-radius:999px;
  background:var(--orange);
  color:white;
  display:inline-grid;
  place-items:center;
  font-size:.7rem;
}
.favorite-toggle { cursor:pointer; transition:transform var(--speed) ease, background var(--speed) ease; }
.favorite-toggle:hover { transform:scale(1.08); }
.favorite-toggle.is-favorite { background:#fff1eb; color:var(--orange-dark); }
.detail-favorite {
  margin-top:18px;
  border:1px solid #e8b29e;
  background:white;
  color:var(--orange-dark);
  border-radius:8px;
  padding:10px 14px;
  font-weight:700;
}
.detail-favorite.is-favorite { background:#fff0e9; }
.search-status { margin-bottom:18px; font-weight:700; color:var(--green-800); }
.no-results {
  background:white;
  border:1px dashed var(--line);
  border-radius:var(--radius);
  padding:28px;
  text-align:center;
  color:var(--muted);
}
.recipe-card[hidden] { display:none!important; }
.chip { cursor:pointer; }
.suggestion-card a { color:var(--orange-dark); font-size:.76rem; font-weight:700; }
@media (max-width:767px) {
  .site-search-form { width:100%; }
  .site-search-form input { width:100%; }
  .header-tools { width:100%; }
}