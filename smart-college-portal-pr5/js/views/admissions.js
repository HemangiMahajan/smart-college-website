'use strict';

function admissionsView(root) {
  root.innerHTML = `
    <p class="eyebrow">Start your journey</p><h1>Admissions</h1>
    <p class="muted">Find the basic information you need to begin your application.</p>
    <div class="grid two">
      <article class="card"><div class="icon-box">01</div><h3>Choose a programme</h3><p>Explore the departments and select the programme that matches your interests.</p></article>
      <article class="card"><div class="icon-box">02</div><h3>Check eligibility</h3><p>Review the current eligibility requirements and admission guidelines.</p></article>
      <article class="card"><div class="icon-box">03</div><h3>Prepare documents</h3><p>Keep your academic marksheets, identity proof and required certificates ready.</p></article>
      <article class="card"><div class="icon-box">04</div><h3>Submit application</h3><p>Complete the application process and contact the admission office if you need help.</p></article>
    </div>
    <section class="section-heading"><h2>General eligibility</h2></section>
    <article class="card"><ul><li>Passed the required qualifying examination.</li><li>Meet the programme-specific eligibility criteria.</li><li>Follow the current admission and document verification process.</li></ul><p class="meta">Note: These are general sample details for this academic portal. Check the latest official admission notification for final requirements.</p></article>
    <p style="margin-top:20px"><a class="btn" href="#/contact">Ask an admission question</a></p>`;
}
