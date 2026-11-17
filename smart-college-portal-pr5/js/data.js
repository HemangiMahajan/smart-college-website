'use strict';

const DATA_URLS = {
  departments: 'data/departments.json',
  faculty: 'data/faculty.json',
  notices: 'data/notices.json'
};
const dataCache = {};
const demoMode = new URLSearchParams(location.search).get('demo');

function el(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== '') node.textContent = text;
  return node;
}
function formatDate(value) {
  return new Date(value + 'T00:00:00').toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric'});
}
function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Could not load ' + url + ' (HTTP ' + response.status + ')');
  return response.json();
}
async function loadOne(name) {
  if (demoMode === 'slow') await wait(2000);
  const url = demoMode === 'error' ? 'data/missing-' + name + '.json' : DATA_URLS[name];
  const data = await fetchJSON(url);
  if (!data || !Array.isArray(data[name])) throw new Error('The file ' + url + ' must contain a "' + name + '" array.');
  return data[name];
}
function getData(name) {
  if (!dataCache[name]) {
    dataCache[name] = loadOne(name).catch(error => {
      delete dataCache[name];
      throw error;
    });
  }
  return dataCache[name];
}
function showDataStatus(root, message, type = 'loading', retry) {
  const box = el('div', 'data-status ' + type);
  if (type === 'loading') box.innerHTML = '<span class="spinner" aria-hidden="true"></span>';
  const p = el('p', '', message);
  box.appendChild(p);
  if (retry) {
    const button = el('button', '', 'Try again');
    button.type = 'button';
    button.addEventListener('click', retry);
    box.appendChild(button);
  }
  root.replaceChildren(box);
}
async function populate(root, name, draw) {
  showDataStatus(root, 'Loading ' + name + '...');
  try {
    const data = await getData(name);
    draw(data);
  } catch (error) {
    showDataStatus(root, error.message, 'error', () => populate(root, name, draw));
  }
}
