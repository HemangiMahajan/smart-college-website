'use strict';

function homeView(root) {
  root.innerHTML = `
    <section class="hero">
      <p class="eyebrow">Welcome to our campus</p>
      <h1>Build your future with knowledge and innovation.</h1>
      <p>Explore programmes, meet our faculty and discover opportunities to learn, create and grow at Smart College.</p>
      <a class="btn" href="#/departments">Explore departments</a>
      <a class="btn secondary" href="#/admissions">Admission details</a>
    </section>
    <section class="stats">
      <div class="stat"><strong>4</strong><span>Academic departments</span></div>
      <div class="stat"><strong>660</strong><span>Total student intake</span></div>
      <div class="stat"><strong>6</strong><span>Faculty profiles</span></div>
    </section>
    <section class="section-heading"><h2>Our vision and mission</h2></section>
    <div class="grid two">
      <article class="card"><div class="icon-box">◎</div><h3>Our Vision</h3><p>To create skilled, responsible and innovative professionals who contribute positively to society.</p></article>
      <article class="card"><div class="icon-box">✦</div><h3>Our Mission</h3><p>To provide quality education, practical learning and an environment that encourages curiosity and lifelong learning.</p></article>
    </div>
    <section class="section-heading"><h2>Announcements & notices</h2><p class="muted">Latest updates from the college</p></section>
    <div id="notice-list" class="notice-list"></div>`;
  const list = root.querySelector('#notice-list');
  populate(list, 'notices', notices => {
    list.replaceChildren();
    notices.slice().sort((a,b) => b.date.localeCompare(a.date)).forEach(notice => {
      const card = el('article');
      const meta = el('p','meta');
      meta.append(el('span','badge' + (notice.type === 'important' ? ' badge-important' : ''),notice.type || 'update'));
      meta.append('  •  ' + formatDate(notice.date));
      card.append(meta, el('h3','',notice.title), el('p','',notice.description));
      if (notice.link) {
        const link = el('a','',notice.linkText || 'Read more');
        link.href = notice.link;
        card.append(link);
      }
      list.append(card);
    });
  });
}
