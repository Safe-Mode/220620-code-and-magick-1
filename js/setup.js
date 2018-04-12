'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_COUNT = 4;

  var setupModal = document.querySelector('.setup');
  var setupOpenEl = document.querySelector('.setup-open');
  var setupCloseEl = setupModal.querySelector('.setup-close');
  var userIconEl = document.querySelector('.setup-open-icon');

  var toggleModal = function (modal) {
    modal.classList.toggle('hidden');
  };

  var onSetupOpenClick = function (evt) {
    evt.preventDefault();

    toggleModal(setupModal);
    document.addEventListener('keyup', onSetupEscPressed);
  };

  var onSetupCloseClick = function (evt) {
    evt.preventDefault();
    toggleModal(setupModal);
  };

  var onSetupEscPressed = function (evt) {
    evt.preventDefault();

    if (window.Util.isEscPressed(evt)) {
      toggleModal(setupModal);
      userIconEl.addEventListener('keyup', onUserEnterPress);
      document.removeEventListener('keyup', onSetupEscPressed);
    }
  };

  var onUserEnterPress = function (evt) {
    evt.preventDefault();

    if (window.Util.isEnterPressed(evt)) {
      toggleModal(setupModal);
      document.addEventListener('keyup', onSetupEscPressed);
      userIconEl.removeEventListener('keyup', onUserEnterPress);
    }
  };

  setupOpenEl.addEventListener('click', onSetupOpenClick);
  setupCloseEl.addEventListener('click', onSetupCloseClick);
  userIconEl.addEventListener('keyup', onUserEnterPress);

  var getWizards = function (names, surnames, coatColors, eyesColors) {
    var wizards = [];

    names.forEach(function () {
      var wizard = new window.Wizard(names, surnames, coatColors, eyesColors);
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
