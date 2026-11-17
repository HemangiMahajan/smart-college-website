'use strict';

function contactView(root) {
  root.innerHTML = `
    <p class="eyebrow">We are here to help</p><h1>Contact & Enquiry</h1>
    <p class="muted">Send us your question and our team will get back to you.</p>
    <div class="grid two">
      <article class="card"><h3>College address</h3><p>${SITE.address}</p><h3>Email</h3><p><a href="mailto:${SITE.email}">${SITE.email}</a></p><h3>Phone</h3><p>${SITE.phone}</p></article>
      <article class="card"><h3>Office hours</h3><p>Monday to Friday</p><p>9:30 AM – 5:00 PM</p><p class="meta">Please use the enquiry form for programme and admission questions.</p></article>
    </div>
    <section class="section-heading"><h2>Send an enquiry</h2></section>
    <div id="enquiry-form-area"></div>
    <section class="section-heading"><h2>Saved enquiries on this browser</h2></section>
    <div id="saved-enquiries"></div>`;
  initEnquiryForm(root);
}
