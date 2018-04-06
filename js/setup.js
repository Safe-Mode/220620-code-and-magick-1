'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_COUNT = 4;

  var setupModal = document.querySelector('.setup');

  var toggleModal = function (modal) {
    modal.classList.toggle('hidden');
  };

  toggleModal(setupModal);

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var getWizards = function (names, surnames, coatColors, eyesColors) {
    var wizards = [];

    names.forEach(function () {
      var wizard = {};

      wizard.name = names[getRandomInt(0, names.length - 1)] + ' ' + surnames[getRandomInt(0, surnames.length - 1)];
      wizard.coatColor = coatColors[getRandomInt(0, coatColors.length - 1)];
      wizard.eyesColor = eyesColors[getRandomInt(0, eyesColors.length - 1)];

      wizards.push(wizard);
    });

    return wizards;
  };

  var wizards = getWizards(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);
  var wizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var renderWizard = function (data, template) {
    var wizard = template.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = data.name;
    wizard.querySelector('.wizard-coat').style.fill = data.coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = data.eyesColor;

    return wizard;
  };

  var similarWizards = setupModal.querySelector('.setup-similar-list');

  var appendElements = function (data, template, container) {
    var wizardsFragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      wizardsFragment.appendChild(renderWizard(data[i], template));
    }

    container.appendChild(wizardsFragment);
  };

  appendElements(wizards, wizardTemplate, similarWizards);

  var similarBLock = setupModal.querySelector('.setup-similar');

  toggleModal(similarBLock);
})();
