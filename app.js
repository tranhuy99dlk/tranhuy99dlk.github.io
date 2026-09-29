/* =====================================================================
   app.js — LỚP HIỂN THỊ. Đọc dữ liệu từ cv-data.js và dựng thành trang.
   Bình thường KHÔNG cần sửa file này. Chỉ sửa khi muốn đổi cấu trúc trang
   (thêm/bớt loại mục, đổi tên tiêu đề mục, thêm icon).
   ===================================================================== */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var root = document.documentElement;

  /* ---------- 1. Kiểm tra dữ liệu: báo lỗi rõ ràng thay vì trang trắng ---------- */
  if (!window.CV) {
    var why = window.__cvDataError
      ? 'Chi tiết: ' + window.__cvDataError
      : 'Không tìm thấy file cv-data.js hoặc file bị lỗi cú pháp.';
    app.innerHTML =
      '<div class="data-error"><h2>Không đọc được dữ liệu CV</h2>' +
      '<p>' + esc(why) + '</p>' +
      '<p>Kiểm tra dòng được báo <strong>và dòng ngay phía trên</strong>. Lỗi hay gặp: thiếu dấu phẩy giữa 2 mục, thiếu dấu " đóng chuỗi, hoặc thiếu ngoặc } ].</p></div>';
    return;
  }
  var D = window.CV;
  var S = D.settings || {};

  /* ---------- 2. Chữ cố định của giao diện (tiêu đề mục, nút bấm) ---------- */
  var UI = {
    vi: { about: 'Tổng quan', expertise: 'Năng lực cốt lõi', experience: 'Kinh nghiệm làm việc',
          projects: 'Dự án trọng điểm', skills: 'Kỹ năng & công cụ', education: 'Học vấn & chứng chỉ',
          eduCol: 'Học vấn', certCol: 'Chứng chỉ & thành tích',
          nav: { about: 'Tổng quan', expertise: 'Năng lực', experience: 'Kinh nghiệm', projects: 'Dự án', skills: 'Kỹ năng', education: 'Học vấn' },
          contact: 'Liên hệ trao đổi', pdf: 'Tải CV (PDF)', updated: 'Cập nhật', skip: 'Chuyển tới nội dung' },
    en: { about: 'Profile', expertise: 'Core Expertise', experience: 'Experience',
          projects: 'Key Projects', skills: 'Skills & Tools', education: 'Education & Certifications',
          eduCol: 'Education', certCol: 'Certifications & Awards',
          nav: { about: 'About', expertise: 'Expertise', experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education' },
          contact: 'Get in touch', pdf: 'Download CV (PDF)', updated: 'Last updated', skip: 'Skip to content' }
  };

  var I = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"';
  var ICONS = {
    calendar: '<svg ' + I + '><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    bulb:     '<svg ' + I + '><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>',
    pulse:    '<svg ' + I + '><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    doc:      '<svg ' + I + '><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
    shield:   '<svg ' + I + '><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    users:    '<svg ' + I + '><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    chart:    '<svg ' + I + '><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/></svg>',
    mail:     '<svg ' + I + '><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    phone:    '<svg ' + I + '><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin:      '<svg ' + I + '><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    linkedin: '<svg ' + I + '><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>'
  };

  /* ---------- 3. Hàm tiện ích ---------- */
  var lang = 'vi';
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Lấy chữ đúng ngôn ngữ: chấp nhận "chuỗi" hoặc { vi, en }
  function t(v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    return v[lang] != null ? v[lang] : (v.vi || v.en || '');
  }
  // Như t() nhưng cho phép **in đậm**
  function rich(v) { return esc(t(v)).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
  function arr(a) { return Array.isArray(a) ? a : []; }
  function has(a) { return arr(a).length > 0; }
  function ui(k) { return UI[lang][k]; }

  /* ---------- 4. Các khối giao diện ---------- */
  function secHead(n, key) {
    return '<div class="sec-head reveal"><span class="idx">' + (n < 10 ? '0' : '') + n + '</span><h2>' + ui(key) + '</h2></div>';
  }
  function bullets(list) {
    if (!has(list)) return '';
    return '<ul class="bullets">' + arr(list).map(function (b) { return '<li>' + rich(b) + '</li>'; }).join('') + '</ul>';
  }

  function renderNav(sections) {
    var links = sections.map(function (k) { return '<a href="#' + k + '">' + UI[lang].nav[k] + '</a>'; }).join('');
    return '<header class="nav"><div class="wrap">' +
      '<a class="brand" href="#top"><b>' + esc(initials(t(D.profile.name))) + '</b><span class="full">' + esc(t(D.profile.name)) + '</span></a>' +
      '<nav class="nav-links">' + links + '</nav>' +
      '<div class="lang" role="group" aria-label="Language">' +
        '<button type="button" data-set="vi" aria-label="Tiếng Việt">VI</button>' +
        '<button type="button" data-set="en" aria-label="English">EN</button>' +
      '</div></div></header>';
  }
  function initials(name) {
    var p = name.trim().split(/\s+/);
    return p.length > 1 ? (p[p.length - 2][0] + p[p.length - 1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
  }

  function renderHero() {
    var P = D.profile, c = [];
    if (P.email) c.push('<a href="mailto:' + esc(P.email) + '">' + ICONS.mail + esc(P.email) + '</a>');
    if (P.phone && S.showPhone !== false) c.push('<a href="tel:' + esc(P.phone) + '">' + ICONS.phone + esc(P.phoneDisplay || P.phone) + '</a>');
    if (P.linkedin) c.push('<a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">' + ICONS.linkedin + 'LinkedIn</a>');
    if (P.location) c.push('<span>' + ICONS.pin + esc(t(P.location)) + '</span>');
    return '<div class="hero" id="top"><div class="wrap">' +
      (P.eyebrow ? '<span class="eyebrow">' + esc(t(P.eyebrow)) + '</span>' : '') +
      '<h1>' + esc(t(P.name)) + '</h1>' +
      '<p class="role">' + esc(t(P.title)) + '</p>' +
      (P.pitch ? '<p class="pitch">' + rich(P.pitch) + '</p>' : '') +
      '<div class="contact">' + c.join('') + '</div>' +
      '<div class="cta">' +
        (P.email ? '<a class="btn btn-primary" href="mailto:' + esc(P.email) + '">' + ui('contact') + '</a>' : '') +
        '<button class="btn btn-ghost" type="button" id="printBtn">' + ui('pdf') + '</button>' +
      '</div></div></div>';
  }

  function renderMetrics() {
    if (!has(D.metrics)) return '';
    return '<div class="metrics"><div class="wrap"><div class="metrics-grid reveal">' +
      D.metrics.map(function (m) {
        return '<div class="metric"><div class="num">' + esc(m.num) + '</div><div class="lbl">' + esc(t(m.label)) + '</div></div>';
      }).join('') + '</div></div></div>';
  }

  var SECTIONS = {
    about: function () {
      return has(D.about) && D.about.map(function (p) { return '<p class="lead">' + rich(p) + '</p>'; }).join('');
    },
    expertise: function () {
      return has(D.expertise) && '<div class="cards">' + D.expertise.map(function (e) {
        return '<article class="card reveal"><h3><span class="ic">' + (ICONS[e.icon] || ICONS.doc) + '</span>' + esc(t(e.title)) + '</h3>' +
          '<p>' + rich(e.text) + '</p></article>';
      }).join('') + '</div>';
    },
    experience: function () {
      return has(D.experience) && '<div class="timeline">' + D.experience.map(function (j) {
        return '<article class="job reveal"><div class="job-head"><h3>' + esc(t(j.role)) + '</h3>' +
          '<span class="period">' + esc(t(j.period)) + '</span></div>' +
          '<p class="org">' + esc(t(j.org)) + '</p>' + bullets(j.bullets) + '</article>';
      }).join('') + '</div>';
    },
    projects: function () {
      return has(D.projects) && '<div class="projects">' + D.projects.map(function (p) {
        var meta = [t(p.role), t(p.period)].filter(Boolean).join(' · ');
        var kpis = has(p.kpis) ? '<div class="kpis">' + p.kpis.map(function (k) {
          return '<div class="kpi"><b>' + esc(k.num) + '</b><span>' + esc(t(k.label)) + '</span></div>';
        }).join('') + '</div>' : '';
        return '<article class="project reveal"><div class="project-top"><div>' +
          '<h3>' + esc(t(p.name)) + '</h3><p class="meta">' + esc(meta) + '</p></div>' +
          (p.tag ? '<span class="tag">' + esc(t(p.tag)) + '</span>' : '') + '</div>' +
          kpis + bullets(p.bullets) + '</article>';
      }).join('') + '</div>';
    },
    skills: function () {
      return has(D.skills) && '<div class="skills reveal">' + D.skills.map(function (g) {
        return '<div class="skill-group"><h3>' + esc(t(g.group)) + '</h3><div class="chips">' +
          arr(g.items).map(function (s) { return '<span class="chip">' + esc(t(s)) + '</span>'; }).join('') +
          '</div></div>';
      }).join('') + '</div>';
    },
    education: function () {
      function col(title, items) {
        if (!has(items)) return '';
        return '<div class="list-card reveal"><h3>' + title + '</h3>' + items.map(function (it) {
          return '<div class="item"><div class="t">' + esc(t(it.title)) +
            (it.badge ? '<span class="badge">' + esc(t(it.badge)) + '</span>' : '') + '</div>' +
            (it.detail ? '<div class="s">' + esc(t(it.detail)) + '</div>' : '') + '</div>';
        }).join('') + '</div>';
      }
      var html = col(ui('eduCol'), arr(D.education)) + col(ui('certCol'), arr(D.certifications));
      return html && '<div class="two-col">' + html + '</div>';
    }
  };
  var ORDER = ['about', 'expertise', 'experience', 'projects', 'skills', 'education'];

  function renderClosing() {
    var C = D.closing, P = D.profile;
    if (!C) return '';
    return '<div class="closing"><div class="wrap"><div><h2>' + esc(t(C.title)) + '</h2><p>' + rich(C.text) + '</p></div>' +
      (P.email ? '<a class="btn btn-primary" href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a>' : '') +
      '</div></div>';
  }

  /* ---------- 5. Dựng toàn trang ---------- */
  function render() {
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);
    document.title = t(D.profile.name) + ' — ' + t(D.profile.title);

    var bodies = {}, visible = [];
    ORDER.forEach(function (k) { var b = SECTIONS[k](); if (b) { bodies[k] = b; visible.push(k); } });

    var main = visible.map(function (k, i) {
      var inner = k === 'about' ? '<div class="reveal">' + bodies[k] + '</div>' : bodies[k];
      return '<section id="' + k + '"><div class="wrap">' + secHead(i + 1, k) + inner + '</div></section>';
    }).join('');

    app.innerHTML =
      '<a class="skip" href="#main">' + ui('skip') + '</a>' +
      renderNav(visible) + renderHero() +
      '<main id="main">' + renderMetrics() + main + '</main>' +
      renderClosing() +
      '<footer><div class="wrap"><span>© ' + new Date().getFullYear() + ' ' + esc(t(D.profile.name)) + '</span>' +
      (S.updated ? '<span>' + ui('updated') + ': ' + esc(S.updated) + '</span>' : '') + '</div></footer>';

    bind();
  }

  function setLang(l) {
    lang = (l === 'en' || l === 'vi') ? l : 'vi';
    try { localStorage.setItem('cv-lang', lang); } catch (e) {}
    render();
  }

  var firstRender = true;
  function bind() {
    app.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-set')); });
    });
    var pb = document.getElementById('printBtn');
    if (pb) pb.addEventListener('click', function () { window.print(); });

    var els = app.querySelectorAll('.reveal');
    // Chỉ chạy hiệu ứng xuất hiện ở lần mở trang đầu; đổi ngôn ngữ thì hiện ngay
    if (!firstRender || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    firstRender = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
  window.addEventListener('beforeprint', function () {
    app.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  });

  /* ---------- 6. Dữ liệu có cấu trúc cho Google (JSON-LD) ---------- */
  (function jsonLd() {
    var P = D.profile, prevLang = lang; lang = 'vi';
    var ld = {
      '@context': 'https://schema.org', '@type': 'Person',
      name: t(P.name), alternateName: (P.name && P.name.en) || undefined,
      jobTitle: (P.title && P.title.en) || t(P.title),
      email: P.email ? 'mailto:' + P.email : undefined,
      telephone: (S.showPhone !== false && P.phone) || undefined,
      address: { '@type': 'PostalAddress', addressLocality: t(P.location), addressCountry: 'VN' },
      url: S.siteUrl || undefined,
      sameAs: P.linkedin ? [P.linkedin] : undefined,
      knowsAbout: arr(D.skills).reduce(function (a, g) { return a.concat(arr(g.items).map(t)); }, []).slice(0, 20)
    };
    lang = prevLang;
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  })();

  /* ---------- 7. Khởi động: ?lang=en trên URL → lựa chọn đã lưu → mặc định ---------- */
  var start = S.defaultLang || 'vi';
  try {
    start = new URLSearchParams(location.search).get('lang') || localStorage.getItem('cv-lang') || start;
  } catch (e) {}
  root.classList.add('js');
  setLang(start);
})();
