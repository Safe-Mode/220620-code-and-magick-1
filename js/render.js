'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var renderWizard = function (data, template) {
    var wizard = template.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = data.name;
    wizard.querySelector('.wizard-coat').style.fill = data.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = data.colorEyes;

    return wizard;
  };

  var appendElements = function (data, template, container) {
    var wizardsFragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      wizardsFragment.appendChild(renderWizard(data[i], template));
    }

    container.appendChild(wizardsFragment);
  };

  window.render = appendElements;
})();
