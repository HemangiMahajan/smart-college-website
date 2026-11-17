'use strict';

function initEnquiryForm(root) {
  const area = root.querySelector('#enquiry-form-area');
  area.innerHTML = `
    <form id="enquiry-form" novalidate>
      <div class="field"><label for="full-name">Full name *</label><input id="full-name" name="name" type="text" required minlength="2" placeholder="Enter your name"><small class="error-msg" data-error="name"></small></div>
      <div class="field"><label for="email">Email address *</label><input id="email" name="email" type="email" required placeholder="name@example.com"><small class="error-msg" data-error="email"></small></div>
      <div class="field"><label for="phone">Phone number *</label><input id="phone" name="phone" type="tel" required pattern="[0-9+ -]{10,15}" placeholder="Enter phone number"><small class="error-msg" data-error="phone"></small></div>
      <div class="field"><label for="subject">Enquiry about *</label><select id="subject" name="subject" required><option value="">Select a topic</option><option>Admissions</option><option>Departments and courses</option><option>Faculty</option><option>Other</option></select><small class="error-msg" data-error="subject"></small></div>
      <div class="field"><label for="message">Message *</label><textarea id="message" name="message" required minlength="10" maxlength="500" placeholder="Write your question (at least 10 characters)"></textarea><small class="error-msg" data-error="message"></small></div>
      <label><input type="checkbox" name="consent" required style="width:auto"> I agree to be contacted about this enquiry.</label>
      <div class="actions"><button type="submit">Submit enquiry</button><button type="reset" class="secondary">Clear form</button></div>
      <div id="form-status" aria-live="polite"></div>
    </form>`;
  const form = area.querySelector('form');
  const savedBox = root.querySelector('#saved-enquiries');

  function getSaved() {
    try { return JSON.parse(localStorage.getItem('collegeEnquiries') || '[]'); }
    catch { return []; }
  }
  function renderSaved() {
    const items = getSaved();
    savedBox.replaceChildren();
    if (!items.length) { savedBox.append(el('p','muted','No enquiries have been saved yet.')); return; }
    items.slice().reverse().forEach((item,index) => {
      const card = el('article','card');
      card.append(el('h3','',item.name + ' — ' + item.subject),el('p','meta',item.email + ' • ' + item.date),el('p','',item.message));
      const remove = el('button','secondary','Delete');
      remove.type = 'button';
      remove.addEventListener('click',() => {
        const updated = getSaved();
        updated.splice(updated.length - 1 - index,1);
        localStorage.setItem('collegeEnquiries',JSON.stringify(updated));
        renderSaved();
      });
      card.append(remove);
      savedBox.append(card);
    });
  }
  form.addEventListener('submit',event => {
    event.preventDefault();
    const fields = ['name','email','phone','subject','message'];
    let valid = true;
    fields.forEach(name => {
      const input = form.elements[name];
      const error = form.querySelector('[data-error="' + name + '"]');
      let message = '';
      if (!input.value.trim()) message = 'This field is required.';
      else if (!input.checkValidity()) message = 'Please enter a valid value.';
      error.textContent = message;
      if (message) valid = false;
    });
    if (!form.elements.consent.checked) {
      valid = false;
      form.querySelector('#form-status').textContent = 'Please agree to be contacted before submitting.';
      form.querySelector('#form-status').className = 'form-status error';
    }
    if (!valid) return;
    const saved = getSaved();
    saved.push({
      name:form.elements.name.value.trim(),
      email:form.elements.email.value.trim(),
      phone:form.elements.phone.value.trim(),
      subject:form.elements.subject.value,
      message:form.elements.message.value.trim(),
      date:new Date().toLocaleString('en-IN')
    });
    localStorage.setItem('collegeEnquiries',JSON.stringify(saved));
    const status = form.querySelector('#form-status');
    status.textContent = 'Your enquiry has been saved successfully on this browser.';
    status.className = 'form-status success';
    form.reset();
    fields.forEach(name => form.querySelector('[data-error="' + name + '"]').textContent = '');
    renderSaved();
  });
  renderSaved();
}
