'use strict';

(function () {
  var wizardCoatEl = document.querySelector('.setup-wizard .wizard-coat');
  var coatColorInputEl = document.querySelector('input[name="coat-color"]');
  var wizardEyesEl = document.querySelector('.setup-wizard .wizard-eyes');
  var eyesColorInputEl = document.querySelector('input[name="eyes-color"]');
  var wizardFireballEl = document.querySelector('.setup-fireball-wrap');
  var fireballColorInputEl = document.querySelector('input[name="fireball-color"]');
  var wizardName = document.querySelector('.setup-user-name');

  var userWizard = new window.Wizard({
    name: wizardName.value,
    coatColor: wizardCoatEl.style.fill,
    coatColorInput: coatColorInputEl,
    eyesColor: wizardEyesEl.style.fill,
    eyesColorInput: eyesColorInputEl,
    fireballColor: wizardFireballEl.style.backgroundColor,
    fireballColorInput: fireballColorInputEl
  });

  wizardCoatEl.addEventListener('click', function (evt) {
    evt.target.style.fill = userWizard.colorizeCoat();
  });

  wizardEyesEl.addEventListener('click', function (evt) {
    evt.target.style.fill = userWizard.colorizeEyes();
  });

  wizardFireballEl.addEventListener('click', function (evt) {
    evt.target.style.backgroundColor = userWizard.colorizeFireball();
  });

  window.userWizard = userWizard;
})();
