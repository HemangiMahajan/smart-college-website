'use strict';

function departmentsView(root, ctx) {
  root.innerHTML = `
    <p class="eyebrow">Academics</p><h1>Departments & Courses</h1>
    <p class="muted">Explore our departments, programmes and course details.</p>
    <div class="filter-bar"><label for="dept-filter">Filter departments:</label><select id="dept-filter"><option value="all">All departments</option></select></div>
    <p id="filter-status" class="meta"></p><div id="dept-cards" class="grid"></div>
    <section class="section-heading"><h2>Department summary</h2></section>
    <details><summary>View department table</summary><div class="table-wrap"><table><thead><tr><th>Department</th><th>Code</th><th>Intake</th></tr></thead><tbody id="dept-table"></tbody><tfoot><tr><th>Total</th><td></td><th id="total-intake"></th></tr></tfoot></table></div></details>`;
  const cards = root.querySelector('#dept-cards');
  populate(cards, 'departments', departments => {
    const filter = root.querySelector('#dept-filter');
    departments.forEach(d => filter.add(new Option(d.name,d.id)));
    const draw = () => {
      const selected = filter.value;
      const shown = departments.filter(d => selected === 'all' || d.id === selected);
      cards.replaceChildren();
      shown.forEach(d => {
        const card = el('article','card dept-card');
        card.id = d.id;
        card.append(el('span','badge',d.code),el('h3','',d.name),el('p','',d.description),el('p','meta','Annual intake: ' + d.intake));
        const courses = el('ul');
        d.courses.forEach(c => courses.append(el('li','',c.name + ' — ' + c.credits + ' credits')));
        card.append(courses);
        cards.append(card);
      });
      root.querySelector('#filter-status').textContent = 'Showing ' + shown.length + ' of ' + departments.length + ' departments.';
    };
    filter.addEventListener('change',draw);
    const tbody = root.querySelector('#dept-table');
    departments.forEach(d => {
      const tr = el('tr');
      [d.name,d.code,d.intake].forEach(v => tr.append(el('td','',String(v))));
      tbody.append(tr);
    });
    root.querySelector('#total-intake').textContent = departments.reduce((sum,d) => sum + d.intake,0);
    draw();
    if (ctx.param) {
      const target = root.querySelector('#' + CSS.escape(ctx.param));
      if (target) target.classList.add('targeted');
    }
  });
}
