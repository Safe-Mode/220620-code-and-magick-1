'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoatEl = document.querySelector('.setup-wizard .wizard-coat');
  var coatColorInputEl = document.querySelector('input[name="coat-color"]');
  var wizardEyesEl = document.querySelector('.setup-wizard .wizard-eyes');
  var eyesColorInputEl = document.querySelector('input[name="eyes-color"]');
  var wizardFireballEl = document.querySelector('.setup-fireball-wrap');
  var fireballColorInputEl = document.querySelector('input[name="fireball-color"]');

  window.colorize(wizardCoatEl, COAT_COLORS, coatColorInputEl);
  window.colorize(wizardEyesEl, EYES_COLORS, eyesColorInputEl);
  window.colorize(wizardFireballEl, FIREBALL_COLORS, fireballColorInputEl);
})();
