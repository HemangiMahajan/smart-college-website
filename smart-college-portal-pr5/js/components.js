'use strict';

const SITE = {
  name: 'Smart College of Engineering & Technology',
  subtitle: 'Learn • Create • Lead',
  year: 2026,
  address: 'Campus Road, Akurdi, Pune, Maharashtra 411035',
  email: 'info@smartcollege.example',
  phone: '+91 20 5555 0100'
};
const NAV_ITEMS = [
  {path:'', label:'Home'},
  {path:'departments', label:'Departments'},
  {path:'faculty', label:'Faculty'},
  {path:'admissions', label:'Admissions'},
  {path:'contact', label:'Contact'}
];
function routeHref(path, param) { return '#/' + path + (param ? '/' + param : ''); }

function renderHeader(box) {
  const img = el('img');
  img.src = 'images/logo.svg';
  img.alt = 'Smart College logo';
  const details = el('div');
  details.append(el('p','site-name',SITE.name), el('p','site-subtitle',SITE.subtitle));
  box.replaceChildren(img, details);
}
function renderNav(box) {
  const list = el('ul');
  NAV_ITEMS.forEach(item => {
    const li = el('li');
    const a = el('a','',item.label);
    a.href = routeHref(item.path);
    a.dataset.path = item.path;
    li.appendChild(a);
    list.appendChild(li);
  });
  box.replaceChildren(list);
}
function renderFooter(box) {
  box.innerHTML = `
    <div class="footer-grid">
      <div><h3>${SITE.name}</h3><p>A welcoming place to learn, explore technology and build your future.</p></div>
      <div><h3>Quick links</h3><p><a href="#/departments">Departments</a></p><p><a href="#/admissions">Admissions</a></p></div>
      <div><h3>Contact</h3><p>${SITE.address}</p><p><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
    </div>
    <p class="copyright">© ${SITE.year} Smart College of Engineering & Technology. All rights reserved.</p>`;
}
function updateActiveNav(path) {
  document.querySelectorAll('#site-nav a').forEach(a => {
    if (a.dataset.path === path) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
}
