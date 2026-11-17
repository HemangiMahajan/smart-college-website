'use strict';

function facultyView(root) {
  root.innerHTML = `
    <p class="eyebrow">Our people</p><h1>Meet our Faculty</h1>
    <p class="muted">Learn from experienced teachers and mentors.</p>
    <div class="actions"><button type="button" id="expand-all">Expand all</button><button type="button" class="secondary" id="collapse-all">Collapse all</button></div>
    <p id="faculty-status" class="meta"></p><div id="faculty-list" class="grid"></div>`;
  const list = root.querySelector('#faculty-list');
  populate(list, 'faculty', faculty => {
    list.replaceChildren();
    faculty.forEach(person => {
      const card = el('article','card faculty-card');
      const head = el('div','faculty-head');
      head.append(el('div','avatar',person.name.split(' ').map(n => n[0]).slice(0,2).join('')), el('div'));
      head.lastChild.append(el('h3','',person.name),el('p','meta',person.designation));
      const dl = el('dl');
      [['Department',person.departmentId.toUpperCase()],['Qualification',person.qualification],['Expertise',person.expertise.join(', ')],['Email',person.email]].forEach(([k,v]) => {
        dl.append(el('dt','',k),el('dd','',v));
      });
      const details = el('div','faculty-details');
      details.append(dl);
      details.hidden = true;
      const toggle = el('button','secondary toggle-btn','Show details');
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded','false');
      toggle.addEventListener('click',() => {
        details.hidden = !details.hidden;
        toggle.textContent = details.hidden ? 'Show details' : 'Hide details';
        toggle.setAttribute('aria-expanded',String(!details.hidden));
        card.classList.toggle('expanded',!details.hidden);
        updateStatus();
      });
      card.append(head,details,toggle);
      list.append(card);
    });
    function updateStatus() {
      const count = list.querySelectorAll('.faculty-details:not([hidden])').length;
      root.querySelector('#faculty-status').textContent = count + ' of ' + faculty.length + ' profiles expanded.';
    }
    root.querySelector('#expand-all').addEventListener('click',() => {
      list.querySelectorAll('.faculty-details').forEach(d => d.hidden = false);
      list.querySelectorAll('.toggle-btn').forEach(b => {b.textContent='Hide details';b.setAttribute('aria-expanded','true');});
      updateStatus();
    });
    root.querySelector('#collapse-all').addEventListener('click',() => {
      list.querySelectorAll('.faculty-details').forEach(d => d.hidden = true);
      list.querySelectorAll('.toggle-btn').forEach(b => {b.textContent='Show details';b.setAttribute('aria-expanded','false');});
      updateStatus();
    });
    updateStatus();
  });
}
