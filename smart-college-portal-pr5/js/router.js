'use strict';

const TITLE_SUFFIX = ' | Smart College Portal';
const routes = [
  {path:'', title:'Home', view:homeView},
  {path:'departments', title:'Departments & Courses', view:departmentsView},
  {path:'faculty', title:'Faculty', view:facultyView},
  {path:'admissions', title:'Admissions', view:admissionsView},
  {path:'contact', title:'Contact & Enquiry', view:contactView}
];
const notFoundRoute = {path:null, title:'Page not found', view:notFoundView};
let renderCounter = 0;

function parseHash(hash) {
  const parts = hash.replace(/^#\/?/,'').split('/').filter(Boolean).map(part => {
    try { return decodeURIComponent(part); } catch { return part; }
  });
  return {path:parts[0] || '', param:parts[1] || '', requested:parts.join('/')};
}
function navigate() {
  const parsed = parseHash(location.hash);
  const route = routes.find(item => item.path === parsed.path) || notFoundRoute;
  const current = ++renderCounter;
  const app = document.getElementById('app');
  const root = el('div','view');
  root.dataset.route = route.path === null ? '404' : (route.path || 'home');
  app.replaceChildren(root);
  document.title = route.title + TITLE_SUFFIX;
  updateActiveNav(route.path);
  route.view(root, {param:parsed.param, requested:parsed.requested, renderId:current});
  const announcer = document.getElementById('route-announcer');
  if (announcer) announcer.textContent = route.title + ' page loaded';
  app.focus({preventScroll:true});
}
function startRouter() {
  if (!location.hash || location.hash === '#') location.hash = '#/';
  window.addEventListener('hashchange', navigate);
  navigate();
}
