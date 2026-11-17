'use strict';

document.addEventListener('DOMContentLoaded', function () {
  renderHeader(document.getElementById('site-header'));
  renderNav(document.getElementById('site-nav'));
  renderFooter(document.getElementById('site-footer'));
  startRouter();
});
