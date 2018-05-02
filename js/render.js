'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var similarWizards = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (data) {
    var wizard = wizardTemplate.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = data.name;
    wizard.querySelector('.wizard-coat').style.fill = data.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = data.colorEyes;

    return wizard;
  };

  var appendElements = function (data) {
    var wizardsFragment = document.createDocumentFragment();
    var count = (data.length > WIZARDS_COUNT) ? WIZARDS_COUNT : data.length;

    for (var i = 0; i < count; i++) {
      wizardsFragment.appendChild(renderWizard(data[i]));
    }

    similarWizards.innerHTML = '';
    similarWizards.appendChild(wizardsFragment);
  };

  window.render = appendElements;
})();
