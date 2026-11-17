'use strict';

function notFoundView(root, ctx) {
  root.innerHTML = `
    <section class="card">
      <p class="eyebrow">Error 404</p><h1>Page not found</h1>
      <p>We could not find the page <strong>${ctx.requested || ''}</strong>.</p>
      <a class="btn" href="#/">Go to the Home page</a>
    </section>`;
}
