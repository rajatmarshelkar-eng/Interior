import { useState, useEffect, useRef, useCallback } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaStar, FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

/* ─── Google Fonts ─── */
const FontLink = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Poppins:wght@200;300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

/* ─── STYLES ─── */
const StyleInjector = () => {
  useEffect(() => {
    const css = `
:root{--gold:#C9A96E;--gold2:#A67C52;--bg:#141210;--surface:#1A1714;--card:#1F1C18;--text:#FDFCFA;--sub:rgba(253,252,250,0.6);--muted:rgba(253,252,250,0.35);--border:rgba(201,169,110,0.15);--input-bg:rgba(255,255,255,0.04)}
body.light{--bg:#FAF8F5;--surface:#F2EEE8;--card:#EDE8E0;--text:#2C2825;--sub:rgba(44,40,37,0.65);--muted:rgba(44,40,37,0.4);--border:rgba(139,105,20,0.2);--input-bg:rgba(0,0,0,0.03)}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Poppins',sans-serif;background:var(--bg);color:var(--text);transition:background .4s,color .4s;overflow-x:hidden}
a{text-decoration:none;color:inherit}
ul{list-style:none}
img{display:block;max-width:100%}

@keyframes fadeInUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes shimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
@keyframes barSlide{to{left:100%}}
@keyframes ring{0%{transform:scale(1)}20%{transform:scale(1.15)}40%{transform:scale(1)}60%{transform:scale(1.1)}80%,100%{transform:scale(1)}}
@keyframes wave{0%{background-position:0 0}100%{background-position:1200px 0}}
@keyframes rotateIn{from{transform:rotate(-180deg) scale(0);opacity:0}to{transform:rotate(0) scale(1);opacity:1}}

/* Reveal */
.reveal-up{opacity:0;transform:translateY(50px);transition:all 0.8s cubic-bezier(0.4,0,0.2,1)}
.reveal-up.revealed{opacity:1;transform:translateY(0)}
.reveal-left{opacity:0;transform:translateX(-50px);transition:all 0.8s cubic-bezier(0.4,0,0.2,1)}
.reveal-left.revealed{opacity:1;transform:translateX(0)}
.reveal-right{opacity:0;transform:translateX(50px);transition:all 0.8s cubic-bezier(0.4,0,0.2,1)}
.reveal-right.revealed{opacity:1;transform:translateX(0)}
.reveal-scale{opacity:0;transform:scale(0.8);transition:all 0.8s cubic-bezier(0.4,0,0.2,1)}
.reveal-scale.revealed{opacity:1;transform:scale(1)}
.stagger-1{transition-delay:0.1s}.stagger-2{transition-delay:0.2s}.stagger-3{transition-delay:0.3s}.stagger-4{transition-delay:0.4s}.stagger-5{transition-delay:0.5s}

/* Utilities */
.img-zoom{overflow:hidden}
.img-zoom img{transition:transform .7s ease}
.img-zoom:hover img{transform:scale(1.1)}
.card-lift{transition:all .4s cubic-bezier(0.4,0,0.2,1)}
.card-lift:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(0,0,0,0.2)}
.gold{color:var(--gold)}
.sect-label{font-size:.6rem;letter-spacing:.45em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:12px;font-weight:400}
.sect-title{font-family:'Playfair Display',serif;font-size:clamp(2rem,4.5vw,3.8rem);font-weight:400;line-height:1.15;color:var(--text)}
.sect-title em{font-style:italic;color:var(--gold)}
.gold-rule{width:52px;height:1px;background:linear-gradient(90deg,var(--gold),transparent);margin:20px 0}

/* Loader */
#loader{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:#141210;transition:opacity .9s ease,visibility .9s ease}
#loader.gone{opacity:0;visibility:hidden;pointer-events:none}
.loader-brand{font-family:'Playfair Display',serif;font-size:clamp(1.6rem,4vw,2.8rem);color:#C9A96E;letter-spacing:.35em}
.loader-bar{width:180px;height:1px;background:rgba(201,169,110,.15);position:relative;overflow:hidden}
.loader-bar::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:#C9A96E;animation:barSlide 1.8s ease forwards}
.loader-sub{font-size:.6rem;letter-spacing:.45em;color:rgba(201,169,110,.5);text-transform:uppercase}

/* Scroll Progress */
#scroll-prog{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#8B6914,#C9A96E,#E2C99A);z-index:9999;transition:width .1s linear;pointer-events:none}

/* Nav */
nav{position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;align-items:center;justify-content:space-between;padding:20px clamp(20px,5vw,80px);backdrop-filter:blur(20px);background:rgba(20,18,16,.85);border-bottom:1px solid var(--border);transition:all .4s}
body.light nav{background:rgba(250,248,245,.92)}
.nav-logo{width:40px;height:40px}
.nav-brand{font-family:'Playfair Display',serif;font-size:1.1rem;letter-spacing:.18em;color:var(--text);font-weight:500;cursor:pointer;display:flex;align-items:center;gap:12px}
.nav-brand span{color:var(--gold)}
.brand-text{display:flex;flex-direction:column;line-height:1.1}
.nav-links{display:flex;align-items:center;gap:0}
.nav-links button{font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);background:none;border:none;cursor:pointer;font-family:'Poppins',sans-serif;padding:8px 14px;transition:color .3s;position:relative}
.nav-links button::after{content:'';position:absolute;bottom:2px;left:14px;right:14px;height:1px;background:var(--gold);transform:scaleX(0);transition:transform .3s}
.nav-links button:hover,.nav-links button.active{color:var(--text)}
.nav-links button:hover::after,.nav-links button.active::after{transform:scaleX(1)}
.nav-actions{display:flex;align-items:center;gap:12px}
.theme-btn{width:34px;height:34px;border-radius:50%;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--sub);font-size:.85rem;transition:all .3s;background:none}
.theme-btn:hover{border-color:var(--gold);color:var(--gold)}
.nav-cta{font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;padding:9px 20px;border:1px solid var(--gold);color:var(--gold);background:rgba(201,169,110,0.1);cursor:pointer;font-family:'Poppins',sans-serif;transition:all .3s;border-radius:2px}
.nav-cta:hover{background:var(--gold);color:#141210;box-shadow:0 0 20px rgba(201,169,110,0.3)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px}
.hamburger span{display:block;width:24px;height:1px;background:var(--text);transition:all .3s}
.hamburger.open span:nth-child(1){transform:translateY(6px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}
.mob-menu{position:fixed;inset:0;z-index:900;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;transform:translateX(100%);transition:transform .5s cubic-bezier(0.4,0,0.2,1)}
.mob-menu.open{transform:translateX(0)}
.mob-menu button{font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3rem);color:var(--text);background:none;border:none;cursor:pointer;transition:color .3s}
.mob-menu button:hover{color:var(--gold)}

/* Hero */
.hero{height:100vh;min-height:600px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.hero-bg{position:absolute;inset:0;overflow:hidden;transform:scale(1.12);transition:transform 12s ease-out}
.hero-bg.ready{transform:scale(1)}
.hero-video{width:100%;height:100%;object-fit:cover;opacity:.5}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(20,18,16,.7) 0%,rgba(20,18,16,.3) 50%,rgba(20,18,16,.6) 100%)}
.hero-content{position:relative;z-index:2;padding:0 clamp(20px,5vw,80px);max-width:900px}
.hero-label{font-size:.6rem;letter-spacing:.5em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;display:block;animation:fadeInUp .8s ease forwards}
.hero-title{font-family:'Playfair Display',serif;font-size:clamp(3rem,8vw,7rem);font-weight:400;line-height:1.05;color:#FDFCFA;margin-bottom:28px;animation:fadeInUp .8s .2s ease both}
.hero-title em{font-style:italic;color:var(--gold)}
.hero-sub{font-size:clamp(.8rem,1.5vw,1rem);line-height:1.85;color:rgba(253,252,250,.65);font-weight:300;max-width:480px;margin-bottom:44px;animation:fadeInUp .8s .4s ease both}
.hero-actions{display:flex;gap:20px;flex-wrap:wrap;animation:fadeInUp .8s .6s ease both}
.btn-g{display:inline-flex;align-items:center;gap:10px;padding:16px 40px;background:linear-gradient(135deg,var(--gold),rgba(201,169,110,.9));color:#141210;font-size:.7rem;letter-spacing:.25em;text-transform:uppercase;font-family:'Poppins',sans-serif;font-weight:500;border:1px solid var(--gold);cursor:pointer;transition:all .4s;border-radius:2px}
.btn-g:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(201,169,110,.35)}
.btn-o{display:inline-flex;align-items:center;gap:10px;padding:16px 40px;background:none;color:var(--text);font-size:.7rem;letter-spacing:.25em;text-transform:uppercase;font-family:'Poppins',sans-serif;font-weight:400;border:1px solid var(--border);cursor:pointer;transition:all .4s;border-radius:2px}
.btn-o:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-2px)}
.hero-scroll{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--muted);font-size:.55rem;letter-spacing:.3em;text-transform:uppercase;animation:fadeInUp .8s 1s ease both}
.hero-scroll-line{width:1px;height:50px;background:linear-gradient(to bottom,transparent,var(--gold))}

/* Stats */
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);background:#0E0C0A;padding:36px clamp(20px,5vw,80px)}
body.light .stats-row{background:#1C1916}
.stat-item{text-align:center;padding:20px;border-right:1px solid var(--border)}
.stat-item:last-child{border-right:none}
.stat-num{display:block;font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,3rem);color:var(--gold);line-height:1;margin-bottom:6px}
.stat-lbl{font-size:.58rem;letter-spacing:.28em;text-transform:uppercase;color:var(--muted)}

/* Category Slider */
.category-section{padding:clamp(60px,8vh,100px) 0;background:var(--bg)}
.category-hd{text-align:center;padding:0 clamp(20px,5vw,80px);margin-bottom:40px}
.category-scroll-wrap{position:relative;display:flex;align-items:center}
.category-scroll{display:flex;gap:24px;padding:20px clamp(20px,5vw,80px);overflow-x:auto;scrollbar-width:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;flex:1}
.category-scroll::-webkit-scrollbar{display:none}
.category-scroll-left,.category-scroll-right{position:absolute;z-index:2;width:42px;height:42px;border-radius:50%;border:1px solid var(--border);background:var(--card);color:var(--gold);font-size:1.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s;line-height:1}
.category-scroll-left{left:8px}
.category-scroll-right{right:8px}
.category-scroll-left:hover,.category-scroll-right:hover{background:var(--gold);color:#141210;border-color:var(--gold)}
.category-card{flex:0 0 auto;width:150px;text-align:center;cursor:pointer}
.category-circle{width:130px;height:130px;margin:0 auto 12px;position:relative;border-radius:50%;overflow:hidden;transition:all .4s;border:2px solid rgba(201,169,110,0.2)}
.category-circle img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
.category-card:hover .category-circle{transform:scale(1.08);border-color:var(--gold);box-shadow:0 12px 32px rgba(201,169,110,0.3)}
.category-card:hover .category-circle img{transform:scale(1.15)}
.category-name{font-family:'Poppins',sans-serif;font-size:.72rem;font-weight:500;color:var(--sub);transition:color .3s;letter-spacing:.05em}
.category-card:hover .category-name{color:var(--gold)}

/* Featured Strip */
.strip-wrap{padding:72px 0;background:var(--surface);overflow:hidden}
.strip-hd{display:flex;align-items:center;justify-content:space-between;padding:0 clamp(20px,5vw,80px);margin-bottom:36px}
.strip-scroll{display:flex;gap:20px;overflow-x:auto;padding:0 clamp(20px,5vw,80px) 12px;scrollbar-width:none;scroll-snap-type:x mandatory}
.strip-scroll::-webkit-scrollbar{display:none}
.strip-card{flex:0 0 300px;height:400px;position:relative;overflow:hidden;border-radius:2px;scroll-snap-align:start;cursor:pointer}
.strip-card img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease}
.strip-card:hover img{transform:scale(1.08)}
.strip-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(20,18,16,.9) 0%,transparent 55%);display:flex;flex-direction:column;justify-content:flex-end;padding:24px}
.strip-cat{font-size:.58rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}
.strip-name{font-family:'Playfair Display',serif;font-size:1.4rem;color:#fff;font-weight:400;line-height:1.2}

/* Portfolio */
.port-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--bg)}
.filter-row{display:flex;align-items:center;justify-content:center;gap:4px;flex-wrap:wrap;margin-bottom:52px}
.filt-btn{padding:7px 22px;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);border:1px solid transparent;background:none;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .3s;border-radius:1px}
.filt-btn:hover{color:var(--text);border-color:var(--border)}
.filt-btn.on{color:var(--gold);border-color:var(--gold);background:rgba(201,169,110,.07)}
.port-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px}
.port-item{position:relative;overflow:hidden;border-radius:2px;aspect-ratio:4/5;cursor:pointer}
.port-item img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease}
.port-item:hover img{transform:scale(1.09)}
.port-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(20,18,16,.9) 0%,transparent 55%);opacity:0;transition:opacity .4s;display:flex;flex-direction:column;justify-content:flex-end;padding:28px}
.port-item:hover .port-ov{opacity:1}
.port-cat{font-size:.58rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}
.port-name{font-family:'Playfair Display',serif;font-size:1.5rem;color:#fff;font-weight:400}
.port-link{font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-top:12px}

/* Services */
.svc-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--surface)}
.svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:var(--border)}
.svc-card{background:var(--bg);padding:48px 40px;position:relative;overflow:hidden;transition:all .4s;border:1px solid transparent}
.svc-card:hover{background:var(--card);border-color:rgba(201,169,110,.2);transform:translateY(-4px);box-shadow:0 8px 32px rgba(201,169,110,.1)}
.svc-card::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--gold);transition:width .5s}
.svc-card:hover::after{width:100%}
.svc-icon{width:50px;height:50px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.3rem;color:var(--gold);margin-bottom:24px;transition:all .3s;border-radius:2px}
.svc-card:hover .svc-icon{background:var(--gold);color:#141210;border-color:var(--gold)}
.svc-name{font-family:'Playfair Display',serif;font-size:1.45rem;font-weight:400;margin-bottom:12px;color:var(--text)}
.svc-desc{font-size:.82rem;line-height:1.85;color:var(--sub);font-weight:300;margin-bottom:20px}
.svc-price{font-size:.9rem;font-weight:500;color:var(--gold);margin-bottom:10px}
.svc-badge{display:inline-block;font-size:.6rem;letter-spacing:.15em;padding:4px 10px;background:rgba(201,169,110,.12);border:1px solid rgba(201,169,110,.3);color:var(--gold);border-radius:1px;margin-bottom:8px}
.svc-offer{font-size:.72rem;color:#4CAF50;font-weight:500;margin-top:8px}

/* Before-After */
.ba-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--bg)}
.ba-slider{position:relative;overflow:hidden;border-radius:2px;height:500px;cursor:col-resize;user-select:none}
.ba-after{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&auto=format&fit=crop&q=80') center/cover}
.ba-before{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&auto=format&fit=crop&q=80') center/cover}
.ba-handle-line{position:absolute;top:0;bottom:0;width:2px;background:white;transform:translateX(-50%);pointer-events:none}
.ba-circle{position:absolute;top:50%;transform:translate(-50%,-50%);width:42px;height:42px;background:white;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,0,0,.3);font-size:.75rem;color:#2C2825;pointer-events:none}
.ba-labels{position:absolute;bottom:16px;width:100%;display:flex;justify-content:space-between;padding:0 20px;pointer-events:none}
.ba-lbl{font-size:.56rem;letter-spacing:.28em;text-transform:uppercase;color:white;background:rgba(20,18,16,.58);padding:5px 10px;backdrop-filter:blur(6px);border-radius:1px}

/* Testimonials */
.test-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--surface)}
.test-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;margin-top:52px}
.testimonial-card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:36px 28px;position:relative;transition:all .4s}
.testimonial-card:hover{transform:translateY(-8px);box-shadow:0 16px 40px rgba(201,169,110,0.15);border-color:rgba(201,169,110,0.3)}
.testimonial-quote{font-size:2.5rem;color:var(--gold);line-height:1;margin-bottom:16px;opacity:.6}
.testimonial-text{font-size:.88rem;line-height:1.85;color:var(--sub);font-weight:300;margin-bottom:24px;font-style:italic}
.testimonial-author{display:flex;align-items:center;gap:14px}
.testimonial-img{width:52px;height:52px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);flex-shrink:0}
.testimonial-img img{width:100%;height:100%;object-fit:cover}
.testimonial-name{font-family:'Playfair Display',serif;font-size:1rem;font-weight:400;color:var(--text)}
.testimonial-role{font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-top:2px}
.testimonial-rating{display:flex;gap:3px;color:var(--gold);font-size:.7rem;margin-top:4px}

/* About */
.about-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--bg)}
.about-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:center}
.about-img-wrap{position:relative}
.about-img{aspect-ratio:3/4;overflow:hidden;border-radius:2px;position:relative}
.about-img img{width:100%;height:100%;object-fit:cover;transition:transform 8s ease}
.about-img:hover img{transform:scale(1.05)}
.about-img-accent{position:absolute;bottom:-20px;right:-20px;width:160px;height:160px;border:1px solid var(--gold);border-radius:2px;pointer-events:none}
.about-yrs{position:absolute;top:28px;left:-20px;background:var(--gold);padding:18px 20px;text-align:center}
.about-yrs .n{display:block;font-family:'Playfair Display',serif;font-size:2.5rem;color:#141210;font-weight:700;line-height:1}
.about-yrs .l{display:block;font-size:.5rem;letter-spacing:.18em;text-transform:uppercase;color:#141210;margin-top:4px}
.about-quote{font-family:'Playfair Display',serif;font-size:clamp(1.2rem,2vw,1.6rem);font-style:italic;color:var(--text);line-height:1.5;margin-bottom:24px;font-weight:400}
.about-body{font-size:.88rem;line-height:2;color:var(--sub);font-weight:300;margin-bottom:16px}
.about-sig{font-family:'Playfair Display',serif;font-size:1.8rem;font-style:italic;color:var(--gold);margin-top:28px}
.process-wrap{margin-top:80px}
.proc-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:400;text-align:center;margin-bottom:56px;color:var(--text)}
.proc-title em{font-style:italic;color:var(--gold)}
.proc-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative}
.proc-step{padding:32px;text-align:center;border-right:1px solid var(--border);transition:background .3s}
.proc-step:last-child{border-right:none}
.proc-step:hover{background:var(--card)}
.proc-num{width:56px;height:56px;border-radius:50%;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-family:'Playfair Display',serif;font-size:1.1rem;color:var(--gold);transition:all .3s}
.proc-step:hover .proc-num{background:var(--gold);color:#141210;border-color:var(--gold)}
.proc-name{font-family:'Playfair Display',serif;font-size:1rem;font-weight:400;margin-bottom:8px;color:var(--text)}
.proc-desc{font-size:.75rem;line-height:1.7;color:var(--muted);font-weight:300}

/* Mood Board */
.mood-section{padding:clamp(70px,10vh,130px) 0;background:var(--surface)}
.mood-hd{text-align:center;margin-bottom:52px;padding:0 clamp(20px,5vw,80px)}
.masonry{columns:4;column-gap:14px;padding:0 clamp(20px,5vw,80px)}
.mas-item{break-inside:avoid;margin-bottom:14px;position:relative;overflow:hidden;border-radius:2px;cursor:pointer}
.mas-item img{display:block;width:100%;transition:transform .6s ease}
.mas-item:hover img{transform:scale(1.06)}
.mas-ov{position:absolute;inset:0;background:rgba(20,18,16,.72);opacity:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:6px;padding:16px;transition:opacity .35s}
.mas-item:hover .mas-ov{opacity:1}
.mas-tag{font-size:.55rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(201,169,110,.4);padding:3px 10px;border-radius:1px;background:rgba(201,169,110,.1)}

/* Pricing */
.pricing-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--bg)}
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:52px}
.pricing-card{background:var(--card);border:1px solid var(--border);border-radius:4px;padding:40px 32px;position:relative;transition:all .4s}
.pricing-card:hover,.pricing-card.highlighted{transform:translateY(-8px);box-shadow:0 20px 50px rgba(201,169,110,.15);border-color:var(--gold)}
.pricing-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--gold);color:#141210;font-size:.55rem;letter-spacing:.2em;text-transform:uppercase;padding:5px 16px;border-radius:20px;white-space:nowrap;font-weight:500}
.pricing-name{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:400;color:var(--text);margin-bottom:8px}
.pricing-desc{font-size:.78rem;color:var(--muted);margin-bottom:24px;line-height:1.6}
.pricing-price{margin-bottom:28px;border-bottom:1px solid var(--border);padding-bottom:24px}
.pricing-amount{font-family:'Playfair Display',serif;font-size:2.5rem;color:var(--gold);font-weight:400}
.pricing-period{font-size:.7rem;color:var(--muted);margin-left:6px}
.pricing-features{list-style:none;margin-bottom:32px;display:flex;flex-direction:column;gap:12px}
.pricing-features li{display:flex;align-items:flex-start;gap:10px;font-size:.82rem;color:var(--sub)}
.pricing-features li svg{color:var(--gold);margin-top:3px;flex-shrink:0}
.pricing-btn{width:100%;padding:14px;background:none;border:1px solid var(--gold);color:var(--gold);font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;font-family:'Poppins',sans-serif;cursor:pointer;transition:all .3s;border-radius:2px}
.pricing-btn:hover,.pricing-card.highlighted .pricing-btn{background:var(--gold);color:#141210}

/* Pricing Hero */
.pricing-hero{padding:80px 0;background:linear-gradient(135deg,#1A1714 0%,#2C2825 100%);text-align:center;margin-bottom:60px}
.pricing-hero h2{font-family:'Playfair Display',serif;font-size:clamp(2.5rem,5vw,4rem);font-weight:400;color:#FDFCFA;margin-bottom:20px}
.pricing-hero p{font-size:1.1rem;color:rgba(253,252,750,.8);max-width:600px;margin:0 auto;line-height:1.8}
.pricing-hero .btn-g{margin-top:40px;padding:18px 50px}

/* Enhanced Pricing Grid */
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px;margin-top:52px;max-width:1200px;margin-left:auto;margin-right:auto}
.pricing-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:48px 32px;position:relative;transition:all .4s;backdrop-filter:blur(10px)}
.pricing-card:hover,.pricing-card.highlighted{transform:translateY(-12px);box-shadow:0 30px 60px rgba(201,169,110,.25);border-color:var(--gold)}
.pricing-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--gold),var(--gold2));border-radius:12px 12px 0 0}
.pricing-card.highlighted{transform:translateY(-16px);box-shadow:0 40px 80px rgba(201,169,110,.35)}
.pricing-card.highlighted::before{height:6px}

/* Pricing Badge */
.pricing-badge{position:absolute;top:-20px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--gold),var(--gold2));color:#141210;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;padding:8px 24px;border-radius:25px;white-space:nowrap;font-weight:600;box-shadow:0 8px 20px rgba(201,169,110,.3)}
.pricing-name{font-family:'Playfair Display',serif;font-size:2rem;font-weight:400;color:var(--text);margin-bottom:12px;text-align:center}
.pricing-desc{font-size:1rem;color:var(--muted);margin-bottom:32px;text-align:center;line-height:1.7}
.pricing-price{margin-bottom:36px;text-align:center}
.pricing-amount{font-family:'Playfair Display',serif;font-size:3.5rem;color:var(--gold);font-weight:400;display:block;margin-bottom:8px}
.pricing-period{font-size:1rem;color:var(--muted);margin-left:8px}
.pricing-features{list-style:none;margin-bottom:40px;display:flex;flex-direction:column;gap:16px;padding:0 20px}
.pricing-features li{display:flex;align-items:center;gap:12px;font-size:1rem;color:var(--text);font-weight:400}
.pricing-features li svg{width:20px;height:20px;flex-shrink:0}
.pricing-btn{width:100%;padding:16px 24px;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#141210;font-size:.8rem;letter-spacing:.25em;text-transform:uppercase;font-family:'Poppins',sans-serif;font-weight:600;border:none;cursor:pointer;transition:all .3s;border-radius:8px}
.pricing-btn:hover{background:linear-gradient(135deg,var(--gold2),var(--gold));transform:translateY(-2px);box-shadow:0 15px 30px rgba(201,169,110,.4)}

/* Pricing Comparison */
.pricing-compare{display:flex;align-items:center;justify-content:center;margin-top:60px}
.pricing-compare h3{font-family:'Playfair Display',serif;font-size:1.8rem;color:var(--text);margin-right:20px}
.pricing-compare .btn-o{padding:12px 32px;font-size:.75rem}

/* Contact */
.contact-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--surface)}
.contact-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:start}
.contact-title{font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3.5rem);font-weight:400;line-height:1.1;color:var(--text);margin-bottom:24px}
.contact-title em{font-style:italic;color:var(--gold)}
.contact-sub{font-size:.88rem;line-height:1.9;color:var(--sub);font-weight:300;margin-bottom:40px}
.c-detail{display:flex;align-items:flex-start;gap:14px;margin-bottom:20px}
.c-icon{width:38px;height:38px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:2px;color:var(--gold);font-size:.85rem}
.c-lbl{font-size:.55rem;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
.c-val{font-size:.88rem;color:var(--text);font-weight:300}
.soc-row{display:flex;gap:14px;margin-top:32px}
.soc-btn{width:52px;height:52px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:1.3rem;transition:all .4s;border-radius:50%;background:none;cursor:pointer}
.soc-btn:hover{border-color:var(--gold);color:var(--gold);background:rgba(201,169,110,.1)}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.fg{position:relative;margin-bottom:14px}
.fg.full{grid-column:1/-1}
.fg input,.fg select,.fg textarea{width:100%;padding:20px 14px 8px;background:var(--input-bg);border:1px solid var(--border);border-radius:2px;font-family:'Poppins',sans-serif;font-size:.85rem;color:var(--text);outline:none;transition:border-color .3s;appearance:none}
.fg textarea{min-height:130px;resize:vertical;padding-top:24px}
.fg input:focus,.fg select:focus,.fg textarea:focus{border-color:var(--gold)}
.fg label{position:absolute;top:13px;left:14px;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);pointer-events:none;transition:all .3s;font-weight:400}
.fg input:focus+label,.fg input:not(:placeholder-shown)+label,.fg select:focus+label,.fg textarea:focus+label,.fg textarea:not(:placeholder-shown)+label{top:5px;font-size:.5rem;color:var(--gold)}
.form-btn{width:100%;padding:16px;background:var(--gold);color:#141210;font-size:.65rem;letter-spacing:.28em;text-transform:uppercase;font-family:'Poppins',sans-serif;font-weight:500;border:none;cursor:pointer;transition:all .35s;margin-top:6px;border-radius:2px}
.form-btn:hover{background:var(--gold2);box-shadow:0 8px 24px rgba(201,169,110,.3)}
.form-success{text-align:center;padding:16px;color:var(--gold);font-size:.8rem;letter-spacing:.1em}

/* Help / FAQ */
.help-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--bg)}
.faq-list{max-width:800px;margin:52px auto 0;display:flex;flex-direction:column;gap:12px}
.faq-item{border:1px solid var(--border);border-radius:4px;overflow:hidden;transition:border-color .3s}
.faq-item.open{border-color:var(--gold)}
.faq-q{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;cursor:pointer;background:var(--card);transition:background .3s}
.faq-q:hover{background:var(--surface)}
.faq-q-text{font-family:'Playfair Display',serif;font-size:1rem;font-weight:400;color:var(--text)}
.faq-icon{color:var(--gold);font-size:1.2rem;transition:transform .3s;flex-shrink:0}
.faq-item.open .faq-icon{transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .4s ease}
.faq-item.open .faq-a{max-height:300px}
.faq-a-inner{padding:20px 24px;font-size:.85rem;line-height:1.85;color:var(--sub);font-weight:300;background:var(--input-bg)}

/* Footer */
footer{background:#0E0C0A;padding:72px clamp(20px,5vw,80px) 36px}
body.light footer{background:#1C1916}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:52px;margin-bottom:52px}
.f-brand{font-family:'Playfair Display',serif;font-size:1.5rem;letter-spacing:.1em;color:#EDE6DD;margin-bottom:16px}
.f-brand span{color:var(--gold)}
.f-sub{font-size:.78rem;line-height:1.85;color:rgba(253,252,250,.38);font-weight:300;max-width:280px}
.f-ttl{font-size:.56rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;font-weight:400}
.f-links{display:flex;flex-direction:column;gap:10px}
.f-links a,.f-links button{font-size:.8rem;color:rgba(253,252,250,.45);background:none;border:none;cursor:pointer;text-align:left;transition:color .3s;font-family:'Poppins',sans-serif;font-weight:300;padding:0;text-decoration:none}
.f-links a:hover,.f-links button:hover{color:rgba(253,252,250,.85)}
.f-soc-link{display:flex;align-items:center;gap:8px}
.f-bottom{border-top:1px solid rgba(253,252,250,.08);padding-top:28px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.f-copy{font-size:.68rem;color:rgba(253,252,250,.28);font-weight:300}

/* WhatsApp */
.whatsapp-float{position:fixed;bottom:32px;right:32px;z-index:1000;width:60px;height:60px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;color:white;font-size:1.8rem;cursor:pointer;transition:all .4s;box-shadow:0 4px 20px rgba(37,211,102,0.4);animation:ring 3s ease-in-out infinite;text-decoration:none}
.whatsapp-float:hover{transform:scale(1.1);box-shadow:0 8px 30px rgba(37,211,102,0.6);animation:none}

/* Responsive */
@media(max-width:1024px){.svc-grid{grid-template-columns:1fr}.about-grid{grid-template-columns:1fr}.contact-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.proc-steps{grid-template-columns:1fr 1fr}.about-img-accent{display:none}.about-yrs{left:0}}
@media(max-width:768px){.nav-links{display:none}.hamburger{display:flex}.masonry{columns:2}.stats-row{grid-template-columns:1fr 1fr}.strip-card{flex:0 0 260px}.form-row{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr}}
@media(max-width:480px){.masonry{columns:1}.stats-row{grid-template-columns:1fr}.proc-steps{grid-template-columns:1fr}.hero-actions{flex-direction:column}}

/* Enhanced Services Section */
.svc-section{padding:clamp(70px,10vh,130px) clamp(20px,5vw,80px);background:var(--surface)}
.svc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;background:var(--border)}
.svc-card{background:var(--bg);padding:48px 40px;position:relative;overflow:hidden;transition:all .4s;border:1px solid transparent;min-width:320px}
.svc-card:hover{background:var(--card);border-color:rgba(201,169,110,.2);transform:translateY(-8px);box-shadow:0 20px 40px rgba(201,169,110,.15)}
.svc-card::after{content:'';position:absolute;bottom:0;left:0;width:0;height:4px;background:linear-gradient(90deg,var(--gold),var(--gold2));transition:width .5s}
.svc-card:hover::after{width:100%}
.svc-icon{width:60px;height:60px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:var(--gold);margin-bottom:24px;transition:all .3s;border-radius:50%;background:var(--bg)}
.svc-card:hover .svc-icon{background:linear-gradient(135deg,var(--gold),var(--gold2));color:#141210;border-color:var(--gold)}
.svc-name{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:400;margin-bottom:16px;color:var(--text)}
.svc-desc{font-size:.9rem;line-height:1.85;color:var(--sub);font-weight:300;margin-bottom:24px}
.svc-price{font-size:1.1rem;font-weight:500;color:var(--gold);margin-bottom:16px}
.svc-badge{display:inline-block;font-size:.7rem;letter-spacing:.15em;padding:6px 14px;background:linear-gradient(135deg,var(--gold),var(--gold2));border:1px solid var(--gold);color:#141210;border-radius:20px;margin-bottom:12px}
.svc-offer{font-size:.8rem;color:#4CAF50;font-weight:500;margin-top:12px}

/* Enhanced Services Icons */
.svc-icon svg{width:32px;height:32px;flex-shrink:0}
.svc-icon .house-icon{fill:var(--gold)}
.svc-icon .office-icon{fill:var(--gold)}
.svc-icon .key-icon{fill:var(--gold)}
.svc-icon .chat-icon{fill:var(--gold)}
.svc-card:hover .svc-icon .house-icon{fill:#141210}
.svc-card:hover .svc-icon .office-icon{fill:#141210}
.svc-card:hover .svc-icon .key-icon{fill:#141210}
.svc-card:hover .svc-icon .chat-icon{fill:#141210}

/* Enhanced Services Grid */
.svc-grid{grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px}
.svc-card{min-width:320px;max-width:400px;margin:0 auto}
.svc-card:nth-child(1){animation-delay:0s}
.svc-card:nth-child(2){animation-delay:.1s}
.svc-card:nth-child(3){animation-delay:.2s}
.svc-card:nth-child(4){animation-delay:.3s}

/* Enhanced Services Badge */
.svc-badge{position:relative;animation:fadeInUp .6s ease forwards}
.svc-badge::after{content:'';position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;background:linear-gradient(135deg,var(--gold),var(--gold2));border-radius:20px;opacity:0;animation:fadeInUp .6s ease forwards 1s;animation-fill-mode:forwards}
.svc-badge:hover::after{opacity:0.3}

/* Enhanced Services Offer */
.svc-offer{display:flex;align-items:center;gap:8px;font-size:.85rem;color:#4CAF50;font-weight:500;margin-top:12px}
.svc-offer svg{width:16px;height:16px;flex-shrink:0;fill:#4CAF50}

/* Enhanced Services Price */
.svc-price{display:flex;align-items:center;gap:6px;font-size:1.2rem;font-weight:600;color:var(--gold)}
.svc-price .period{font-size:.8rem;color:var(--muted);font-weight:400}

/* Enhanced Services Description */
.svc-desc{max-width:320px;margin:0 auto 24px;line-height:1.9;color:var(--sub);font-weight:300}
`;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);
  return null;
};

/* ─── SVG ICONS ─── */
const HouseIcon = () => (
  <svg className="house-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17h20v2H2z"/>
  </svg>
);

const OfficeIcon = () => (
  <svg className="office-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
  </svg>
);

const KeyIcon = () => (
  <svg className="key-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>
);

const ChatIcon = () => (
  <svg className="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 1 1-18 0z"/>
    <path d="M4 6h16M4 12h8m-8 6h16"/>
  </svg>
);

/* ─── DATA ─── */
const NAV_LINKS = ["Home", "Portfolio", "Services", "About", "Pricing", "Help", "Contact"];

const CATEGORIES = [
  { id: "living-room", name: "Living Room", img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400&auto=format&fit=crop&q=80" },
  { id: "bedroom", name: "Bedroom", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&auto=format&fit=crop&q=80" },
  { id: "kitchen", name: "Kitchen", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&auto=format&fit=crop&q=80" },
  { id: "office", name: "Office", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&auto=format&fit=crop&q=80" },
  { id: "wardrobe", name: "Wardrobe", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&auto=format&fit=crop&q=80" },
  { id: "false-ceiling", name: "False Ceiling", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=80" },
  { id: "bathroom", name: "Bathroom", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&auto=format&fit=crop&q=80" },
  { id: "balcony", name: "Balcony", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=80" },
  { id: "luxury-villa", name: "Luxury Villa", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&auto=format&fit=crop&q=80" },
];

const PROJECTS = [
  { id: 1, cat: "living-room", title: "The Serene Lounge", sub: "Living Room · Mumbai", img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=900&auto=format&fit=crop&q=80" },
  { id: 2, cat: "bedroom", title: "Velvet Sanctuary", sub: "Bedroom · Delhi", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&auto=format&fit=crop&q=80" },
  { id: 3, cat: "kitchen", title: "Golden Hour Kitchen", sub: "Kitchen · Bangalore", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&auto=format&fit=crop&q=80" },
  { id: 4, cat: "office", title: "Meridian Studio", sub: "Office · Pune", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&auto=format&fit=crop&q=80" },
  { id: 5, cat: "living-room", title: "Casa Lumière", sub: "Living Room · Hyderabad", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=80" },
  { id: 6, cat: "bedroom", title: "The Ivory Suite", sub: "Bedroom · Chennai", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&auto=format&fit=crop&q=80" },
  { id: 7, cat: "kitchen", title: "Onyx Culinary", sub: "Kitchen · Ahmedabad", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop&q=80" },
  { id: 8, cat: "office", title: "Studio Élite", sub: "Office · Kolkata", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80" },
  { id: 9, cat: "living-room", title: "Cerulean Heights", sub: "Living Room · Surat", img: "https://images.unsplash.com/photo-1600210492056-3cd7603dd85f?w=900&auto=format&fit=crop&q=80" },
  { id: 10, cat: "wardrobe", title: "Saffron Walk-in", sub: "Wardrobe · Jaipur", img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=900&auto=format&fit=crop&q=80" },
  { id: 11, cat: "bathroom", title: "Moonlit Spa", sub: "Bathroom · Goa", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&auto=format&fit=crop&q=80" },
  { id: 12, cat: "luxury-villa", title: "Citrine Estate", sub: "Luxury Villa · Pune", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&auto=format&fit=crop&q=80" },
];

const SERVICES = [
  { icon: <HouseIcon />, name: "Residential Design", desc: "Transform your home into a deeply personal sanctuary. We craft bespoke interiors that reflect your lifestyle and aspirations.", price: "₹15,000 – ₹50,000 / room", offer: "10% OFF for First-Time Clients", badge: "🎁 FREE 1st Consultation" },
  { icon: <OfficeIcon />, name: "Commercial Design", desc: "Brand-aligned commercial spaces that inspire, impress, and perform — from offices to retail environments.", price: "₹80,000 – ₹3,00,000 / project", offer: "Free 3D Mockup Preview", badge: "🏢 Includes Space Planning" },
  { icon: <KeyIcon />, name: "Turnkey Projects", desc: "End-to-end design and execution. We manage every detail from concept to handover.", price: "₹1,500 – ₹3,500 / sq.ft", offer: "Flat ₹25,000 OFF above 1000 sq.ft", badge: "🔑 Full Execution Included" },
  { icon: <ChatIcon />, name: "Consultation", desc: "Focused expert sessions on spatial planning, colour, material and furniture curation.", price: "₹999 – ₹2,999 / session", offer: "First 15 Minutes FREE", badge: "⏱ 60–90 Min Expert Session" },
];

const PRICING_PLANS = [
  {
    name: "Essential",
    price: "₹25,000",
    period: "per room",
    description: "Perfect for single room makeovers",
    features: ["Initial consultation", "2 Concept designs", "Floor plan & layout", "Material suggestions", "1 Revision round"],
  },
  {
    name: "Premium",
    price: "₹75,000",
    period: "per room",
    description: "Comprehensive design with 3D visualization",
    highlighted: true,
    badge: "Most Popular",
    features: ["Everything in Essential", "3D Renderings", "Furniture sourcing", "3 Revision rounds", "Site visits (2)", "Project coordination"],
  },
  {
    name: "Luxury",
    price: "₹1,50,000",
    period: "per room",
    description: "Full white-glove design experience",
    features: ["Everything in Premium", "Unlimited revisions", "Priority support", "Dedicated designer", "Weekly site visits", "Handover ceremony"],
  },
];

const TESTIMONIALS = [
  { name: "Meera Nair", role: "Homeowner · Mumbai", text: "Urban Nest transformed our apartment into a dream home. The attention to detail and the quality of execution was absolutely exceptional.", rating: 5, image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&auto=format&fit=crop&q=80" },
  { name: "Rajesh Khanna", role: "CEO · Delhi", text: "Our office redesign exceeded all expectations. The team understood our brand perfectly and delivered a space that truly inspires our team.", rating: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" },
  { name: "Priya Singh", role: "Restaurateur · Bangalore", text: "From concept to execution, the process was seamless. Our restaurant's ambience has become a talking point among our guests.", rating: 5, image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&auto=format&fit=crop&q=80" },
];

const MOOD_IMGS = [
  { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&auto=format&fit=crop&q=80", tags: ["Warm", "Cozy"] },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=80", tags: ["Minimal", "Clean"] },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80", tags: ["Modern", "Sleek"] },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=80", tags: ["Elegant", "Work"] },
  { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=80", tags: ["Luxury", "Grand"] },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&auto=format&fit=crop&q=80", tags: ["Spa", "Serene"] },
  { src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&auto=format&fit=crop&q=80", tags: ["Storage", "Bespoke"] },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80", tags: ["Outdoor", "Fresh"] },
];

const FAQS = [
  { question: "What services do you offer?", answer: "We offer Residential Design, Commercial Design, Turnkey Projects, and Consultation. Our team handles everything from concept to final execution." },
  { question: "How long does a typical project take?", answer: "A single room makeover typically takes 4–6 weeks, while full home renovations take 3–6 months. We provide detailed timelines during the initial consultation." },
  { question: "What is your pricing structure?", answer: "We offer per-room packages starting at ₹25,000, per-square-foot pricing for turnkey projects (₹1,500–₹3,500/sq.ft), and hourly consultation rates. All pricing is transparent." },
  { question: "Do you work on a budget?", answer: "Absolutely! We work with various budgets and offer customized solutions. We can phase projects to spread costs over time." },
  { question: "What is your design process?", answer: "Our process: 1) Consultation, 2) Design & 3D visualization, 3) Execution, 4) Handover. We keep you involved at every step." },
  { question: "Do you handle renovations?", answer: "Yes! Whether renovating an existing space or designing new construction, our team has the expertise to transform any space." },
  { question: "Can you work with my existing furniture?", answer: "Yes, we love incorporating existing pieces. We assess your current furniture and integrate it thoughtfully into the new design." },
  { question: "Do you provide 3D renderings?", answer: "Yes! Our Premium and Luxury packages include detailed 3D renderings so you can visualize the final space before implementation." },
  { question: "What areas do you serve?", answer: "We serve clients across India including Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai, and other major cities." },
  { question: "How do I get started?", answer: "Simply click 'Book Now' or visit our Contact page to schedule a free initial consultation. We'll discuss your project and provide a customized proposal." },
];

const SOCIAL_LINKS = [
  { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/UrbanNestInteriors" },
  { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/919876543210" },
  { icon: <FaFacebook />, label: "Facebook", url: "https://www.facebook.com/UrbanNestInteriors" },
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/company/urbannestinteriors" },
];

/* ─── HOOKS ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-scale");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── SCROLL PROGRESS ─── */
function ScrollProgress() {
  useEffect(() => {
    const bar = document.createElement("div");
    bar.id = "scroll-prog";
    bar.style.width = "0%";
    document.body.appendChild(bar);
    const onScroll = () => {
      const tot = document.documentElement.scrollHeight - window.innerHeight;
      if (tot > 0) bar.style.width = (window.scrollY / tot * 100) + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); bar.remove(); };
  }, []);
  return null;
}

/* ─── LOADER ─── */
function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(() => onDone(), 2200);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div id="loader">
      <div className="loader-brand">URBAN NEST <span style={{ color: "#C9A96E" }}>INTERIORS</span></div>
      <div className="loader-bar" />
      <div className="loader-sub">Crafting Spaces of Distinction</div>
    </div>
  );
}

/* ─── LOGO ─── */
const Logo = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2C2C2C" />
        <stop offset="100%" stopColor="#0A0A0A" />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="180" height="180" rx="15" fill="url(#metalGrad)" stroke="url(#goldGrad)" strokeWidth="2" />
    <rect x="18" y="18" width="164" height="164" rx="10" fill="none" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.6" />
    <g fill="url(#goldGrad)">
      <path d="M45 60 L45 115 Q45 125 55 125 L65 125 Q75 125 75 115 L75 60 L85 60 L85 115 Q85 135 65 135 L55 135 Q35 135 35 115 L35 60 Z" />
      <path d="M95 60 L95 135 L105 135 L105 85 L125 135 L135 135 L135 60 L125 60 L125 110 L105 60 Z" />
    </g>
    <line x1="35" y1="145" x2="165" y2="145" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.8" />
    <text x="100" y="162" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="url(#goldGrad)">URBAN NEST</text>
    <text x="100" y="175" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fontWeight="400" letterSpacing="4" fill="#C9A96E" opacity="0.8">INTERIORS</text>
    <g fill="url(#goldGrad)" opacity="0.4">
      <circle cx="22" cy="22" r="2" /><circle cx="178" cy="22" r="2" /><circle cx="22" cy="178" r="2" /><circle cx="178" cy="178" r="2" />
    </g>
  </svg>
);

/* ─── NAVBAR ─── */
function Navbar({ page, setPage, dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (pg) => { setPage(pg); setMobOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <>
      <nav style={{ boxShadow: scrolled ? "0 1px 0 var(--border)" : "none" }}>
        <div className="nav-brand" onClick={() => go("Home")}>
          <Logo />
          <div className="brand-text">
            <span>URBAN NEST <span>INTERIORS</span></span>
          </div>
        </div>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}><button className={page === l ? "active" : ""} onClick={() => go(l)}>{l}</button></li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="theme-btn" onClick={() => setDark(!dark)}>{dark ? "☀" : "☾"}</button>
          <button className="nav-cta" onClick={() => go("Contact")}>Book Now</button>
          <button className={`hamburger ${mobOpen ? "open" : ""}`} onClick={() => setMobOpen(!mobOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mob-menu ${mobOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => <button key={l} onClick={() => go(l)}>{l}</button>)}
      </div>
    </>
  );
}

/* ─── HERO ─── */
function Hero({ setPage }) {
  const bgRef = useRef();
  useEffect(() => { setTimeout(() => bgRef.current?.classList.add("ready"), 100); }, []);
  useEffect(() => {
    const h = () => {
      if (bgRef.current) {
        const scale = 1 + (window.scrollY * 0.0002);
        bgRef.current.style.transform = `scale(${Math.max(1, scale)}) translateY(${window.scrollY * 0.18}px)`;
      }
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef}>
        <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1800&auto=format&fit=crop&q=85" className="hero-video">
          <source src="https://videos.pexels.com/video-files/7578551/7578551-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-label">Luxury Interior Design</span>
        <h1 className="hero-title">Where <em>Spaces</em><br />Tell Stories</h1>
        <p className="hero-sub">We craft environments that transcend the ordinary — blending artistry, functionality and timeless elegance into every corner of your world.</p>
        <div className="hero-actions">
          <button className="btn-g" onClick={() => { setPage("Portfolio"); window.scrollTo({ top: 0 }); }}>Explore Work</button>
          <button className="btn-o" onClick={() => { setPage("Contact"); window.scrollTo({ top: 0 }); }}>Book Consultation</button>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  return (
    <div className="stats-row">
      {[{ n: "500+", l: "Projects Completed" }, { n: "16", l: "Years of Excellence" }, { n: "98%", l: "Client Satisfaction" }, { n: "12", l: "Design Awards" }].map((s) => (
        <div className="stat-item" key={s.l}>
          <span className="stat-num">{s.n}</span>
          <span className="stat-lbl">{s.l}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── CATEGORY SLIDER ─── */
function CategorySlider({ onCategoryClick }) {
  const scrollRef = useRef(null);
  useReveal();
  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };
  return (
    <section className="category-section">
      <div className="category-hd reveal-up">
        <span className="sect-label">Our Expertise</span>
        <h2 className="sect-title">Design <em>Categories</em></h2>
        <div className="gold-rule" style={{ margin: "20px auto" }} />
        <p style={{ fontSize: ".88rem", color: "var(--sub)", fontWeight: "300", maxWidth: "500px", margin: "0 auto", lineHeight: "1.8" }}>
          Explore our specialized interior design services for every space in your home
        </p>
      </div>
      <div className="category-scroll-wrap">
        <button className="category-scroll-left" onClick={() => scroll("left")}>‹</button>
        <div className="category-scroll" ref={scrollRef}>
          {CATEGORIES.map((cat, i) => (
            <div className="category-card reveal-scale" key={cat.id} style={{ transitionDelay: `${i * 0.08}s` }} onClick={() => onCategoryClick && onCategoryClick(cat)}>
              <div className="category-circle">
                <img src={cat.img} alt={cat.name} loading="lazy" />
              </div>
              <p className="category-name">{cat.name}</p>
            </div>
          ))}
        </div>
        <button className="category-scroll-right" onClick={() => scroll("right")}>›</button>
      </div>
    </section>
  );
}

/* ─── FEATURED STRIP ─── */
function FeaturedStrip({ setPage }) {
  return (
    <div className="strip-wrap">
      <div className="strip-hd">
        <div className="reveal-up"><span className="sect-label">Featured Work</span><h2 className="sect-title" style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)" }}>Selected <em>Projects</em></h2></div>
        <button className="btn-o reveal-up" style={{ padding: "8px 20px" }} onClick={() => { setPage("Portfolio"); window.scrollTo({ top: 0 }); }}>View All →</button>
      </div>
      <div className="strip-scroll">
        {PROJECTS.slice(0, 6).map((p) => (
          <div className="strip-card card-lift" key={p.id}>
            <img src={p.img} alt={p.title} />
            <div className="strip-ov"><span className="strip-cat">{p.sub}</span><h3 className="strip-name">{p.title}</h3></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PORTFOLIO ─── */
function Portfolio() {
  const [filt, setFilt] = useState("all");
  useReveal();
  const cats = ["all", ...Array.from(new Set(PROJECTS.map(p => p.cat)))]
  const filtered = filt === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === filt);
  return (
    <section className="port-section">
      <div className="reveal-up" style={{ textAlign: "center", marginBottom: "52px" }}>
        <span className="sect-label">Our Work</span>
        <h2 className="sect-title">Portfolio of <em>Excellence</em></h2>
        <div className="gold-rule" style={{ margin: "20px auto" }} />
      </div>
      <div className="filter-row">
        {cats.map(c => (
          <button key={c} className={`filt-btn ${filt === c ? "on" : ""}`} onClick={() => setFilt(c)}>
            {c.replace("-", " ")}
          </button>
        ))}
      </div>
      <div className="port-grid">
        {filtered.map((p, i) => (
          <div className="port-item img-zoom card-lift reveal-up" key={p.id} style={{ transitionDelay: `${i * 0.08}s` }}>
            <img src={p.img} alt={p.title} />
            <div className="port-ov">
              <span className="port-cat">{p.cat.replace("-", " ")}</span>
              <h3 className="port-name">{p.title}</h3>
              <span className="port-link">View Project →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  useReveal();
  return (
    <section className="svc-section">
      <div className="reveal-up" style={{ textAlign: "center", marginBottom: "52px" }}>
        <span className="sect-label">What We Do</span>
        <h2 className="sect-title">Our <em>Services</em></h2>
        <div className="gold-rule" style={{ margin: "20px auto" }} />
      </div>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <div className="svc-card reveal-scale" key={s.name} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="svc-icon">{s.icon}</div>
            <span className="svc-badge">{s.badge}</span>
            <h3 className="svc-name">{s.name}</h3>
            <p className="svc-desc">{s.desc}</p>
            <p className="svc-price">{s.price}</p>
            <p className="svc-offer">✓ {s.offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── BEFORE AFTER SLIDER ─── */
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  useReveal();

  const handleMove = useCallback((clientX) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
    }
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e) => handleMove(e.clientX);
    const onTouch = (e) => handleMove(e.touches[0].clientX);
    const stop = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="ba-section">
      <div className="reveal-up" style={{ textAlign: "center", marginBottom: "52px" }}>
        <span className="sect-label">Transformations</span>
        <h2 className="sect-title">Before & <em>After</em></h2>
        <div className="gold-rule" style={{ margin: "20px auto" }} />
        <p style={{ fontSize: ".88rem", color: "var(--sub)", fontWeight: "300" }}>Drag to reveal the transformation</p>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          className="ba-slider"
          ref={sliderRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onClick={(e) => handleMove(e.clientX)}
        >
          <div className="ba-after" />
          <div className="ba-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
          <div className="ba-handle-line" style={{ left: `${position}%` }}>
            <div className="ba-circle" style={{ left: "50%", top: "50%", position: "absolute" }}>⟺</div>
          </div>
          <div className="ba-labels">
            <span className="ba-lbl">Before</span>
            <span className="ba-lbl">After</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  useReveal();
  return (
    <section className="test-section">
      <div className="reveal-up" style={{ textAlign: "center" }}>
        <span className="sect-label">Client Stories</span>
        <h2 className="sect-title">What Our <em>Clients</em> Say</h2>
        <div className="gold-rule" style={{ margin: "20px auto" }} />
      </div>
      <div className="test-grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card reveal-up card-lift" key={t.name} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-img"><img src={t.image} alt={t.name} /></div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
                <div className="testimonial-rating">{[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  useReveal();
  return (
    <section className="pricing-section">
      <div className="pricing-hero">
        <h2>Transparent Pricing for Exceptional Design</h2>
        <p>Choose the perfect plan that fits your needs and budget. From single room makeovers to complete home transformations, we have a solution for every project.</p>
        <button className="btn-g">Get Free Consultation</button>
      </div>
      <div className="pricing-grid">
        {PRICING_PLANS.map((plan, i) => (
          <div className={`pricing-card reveal-up card-lift ${plan.highlighted ? "highlighted" : ""}`} key={plan.name} style={{ transitionDelay: `${i * 0.15}s` }}>
            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
            <h3 className="pricing-name">{plan.name}</h3>
            <p className="pricing-desc">{plan.description}</p>
            <div className="pricing-price">
              <span className="pricing-amount">{plan.price}</span>
              <span className="pricing-period">{plan.period}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((f, j) => (
                <li key={j}><FaCheck /><span>{f}</span></li>
              ))}
            </ul>
            <button className="pricing-btn">Get Started →</button>
          </div>
        ))}
      </div>
      <div className="pricing-compare">
        <h3>Still not sure which plan is right for you?</h3>
        <button className="btn-o">Compare All Plans</button>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  useReveal();
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-img-wrap reveal-left">
          <div className="about-img img-zoom">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80" alt="About Urban Nest" />
          </div>
          <div className="about-img-accent" />
          <div className="about-yrs"><span className="n">16</span><span className="l">Years</span></div>
        </div>
        <div className="reveal-right">
          <span className="sect-label">Our Story</span>
          <h2 className="sect-title">Crafting <em>Timeless</em> Spaces</h2>
          <div className="gold-rule" />
          <p className="about-quote">"Design is not just what it looks like. Design is how it works."</p>
          <p className="about-body">Since 2009, Urban Nest Interiors has been transforming spaces across India. Our philosophy is simple: every space tells a story, and we help you tell yours through thoughtful, elegant design that stands the test of time.</p>
          <p className="about-body">From luxury residences to cutting-edge commercial spaces, our team of award-winning designers brings together craftsmanship, innovation, and a deep understanding of how people live and work.</p>
          <p className="about-sig">— Priya Sharma, Founder</p>
        </div>
      </div>
      <div className="process-wrap">
        <h2 className="proc-title reveal-up">Our <em>Process</em></h2>
        <div className="proc-steps">
          {[
            { n: "01", t: "Consultation", d: "Understanding your vision, needs and aspirations for the space." },
            { n: "02", t: "Design", d: "Creating concepts, mood boards and detailed 3D visualizations." },
            { n: "03", t: "Execution", d: "Managing every detail of implementation with precision." },
            { n: "04", t: "Handover", d: "Final walkthrough and project completion ceremony." },
          ].map((p, i) => (
            <div className="proc-step reveal-up" key={p.n} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="proc-num">{p.n}</div>
              <h4 className="proc-name">{p.t}</h4>
              <p className="proc-desc">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MOOD BOARD ─── */
function MoodBoard() {
  useReveal();
  return (
    <section className="mood-section">
      <div className="mood-hd reveal-up">
        <span className="sect-label">Inspiration</span>
        <h2 className="sect-title">Mood <em>Board</em></h2>
        <div className="gold-rule" style={{ margin: "20px auto" }} />
      </div>
      <div className="masonry">
        {MOOD_IMGS.map((m, i) => (
          <div className="mas-item img-zoom reveal-scale" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
            <img src={m.src} alt={`Mood ${i + 1}`} loading="lazy" />
            <div className="mas-ov">
              {m.tags.map(tag => <span className="mas-tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── HELP / FAQ ─── */
function Help() {
  const [open, setOpen] = useState(null);
  useReveal();
  return (
    <section className="help-section">
      <div className="reveal-up" style={{ textAlign: "center" }}>
        <span className="sect-label">Support</span>
        <h2 className="sect-title">Frequently Asked <em>Questions</em></h2>
        <div className="gold-rule" style={{ margin: "20px auto" }} />
        <p style={{ fontSize: ".88rem", color: "var(--sub)", fontWeight: "300", maxWidth: "500px", margin: "0 auto", lineHeight: "1.8" }}>
          Everything you need to know about working with us
        </p>
      </div>
      <div className="faq-list">
        {FAQS.map((faq, i) => (
          <div className={`faq-item reveal-up ${open === i ? "open" : ""}`} key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
            <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span className="faq-q-text">{faq.question}</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-a">
              <div className="faq-a-inner">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [sent, setSent] = useState(false);
  useReveal();
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="reveal-left">
          <span className="sect-label">Get in Touch</span>
          <h2 className="contact-title">Let's Create <em>Together</em></h2>
          <p className="contact-sub">Ready to transform your space? Schedule a consultation with our design experts.</p>
          <div className="c-detail">
            <div className="c-icon"><FaMapMarkerAlt /></div>
            <div><p className="c-lbl">Address</p><p className="c-val">Bandra West, Mumbai 400050</p></div>
          </div>
          <div className="c-detail">
            <div className="c-icon"><FaPhone /></div>
            <div><p className="c-lbl">Phone</p><p className="c-val">+91 98765 43210</p></div>
          </div>
          <div className="c-detail">
            <div className="c-icon"><FaEnvelope /></div>
            <div><p className="c-lbl">Email</p><p className="c-val">hello@urbannest.in</p></div>
          </div>
          <div className="soc-row">
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.url} className="soc-btn" target="_blank" rel="noopener noreferrer" title={s.label}>{s.icon}</a>
            ))}
          </div>
        </div>
        <form className="reveal-right" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="fg"><input type="text" placeholder=" " required /><label>Name</label></div>
            <div className="fg"><input type="email" placeholder=" " required /><label>Email</label></div>
            <div className="fg"><input type="tel" placeholder=" " /><label>Phone</label></div>
            <div className="fg">
              <select required defaultValue="">
                <option value="" disabled>Select Service</option>
                <option>Residential Design</option>
                <option>Commercial Design</option>
                <option>Turnkey Project</option>
                <option>Consultation</option>
              </select>
              <label>Service Type</label>
            </div>
            <div className="fg full"><textarea placeholder=" " rows="4" /><label>Message</label></div>
          </div>
          <button type="submit" className="form-btn">Send Message</button>
          {sent && <p className="form-success">✓ Thank you! We'll be in touch soon.</p>}
        </form>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer({ setPage }) {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="f-brand">URBAN NEST <span>INTERIORS</span></div>
          <p className="f-sub">Crafting spaces of distinction since 2009. Luxury interior design that transforms houses into homes.</p>
        </div>
        <div>
          <h4 className="f-ttl">Quick Links</h4>
          <div className="f-links">
            {NAV_LINKS.map(l => <button key={l} onClick={() => setPage(l)}>{l}</button>)}
          </div>
        </div>
        <div>
          <h4 className="f-ttl">Services</h4>
          <div className="f-links">
            {SERVICES.map(s => <span key={s.name} style={{ fontSize: ".8rem", color: "rgba(253,252,250,.45)", display: "block", marginBottom: "10px" }}>{s.name}</span>)}
          </div>
        </div>
        <div>
          <h4 className="f-ttl">Follow Us</h4>
          <div className="f-links">
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.url} className="f-soc-link" target="_blank" rel="noopener noreferrer">{s.icon} {s.label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <p className="f-copy">© 2026 Urban Nest Interiors. All rights reserved.</p>
        <p className="f-copy">Designed with ♥ in Mumbai</p>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FLOAT ─── */
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </a>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [page, setPage] = useState("Home");
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  const handleCategoryClick = () => {
    setPage("Portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <FontLink />
      <StyleInjector />
      <ScrollProgress />
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Navbar page={page} setPage={setPage} dark={dark} setDark={setDark} />
      <WhatsAppFloat />
      <main>
        {page === "Home" && (
          <>
            <Hero setPage={setPage} />
            <Stats />
            <CategorySlider onCategoryClick={handleCategoryClick} />
            <FeaturedStrip setPage={setPage} />
            <Services />
            <BeforeAfterSlider />
            <Testimonials />
            <Pricing />
            <About />
            <MoodBoard />
            <Contact />
          </>
        )}
        {page === "Portfolio" && <Portfolio />}
        {page === "Services" && <Services />}
        {page === "About" && <About />}
        {page === "Pricing" && <Pricing />}
        {page === "Help" && <Help />}
        {page === "Contact" && <Contact />}
      </main>
      <Footer setPage={setPage} />
    </>
  );
}    