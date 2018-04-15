'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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


  var wizardEyesEl = document.querySelector('.setup-wizard .wizard-eyes');
  var eyesColorInputEl = document.querySelector('input[name="eyes-color"]');
  var wizardFireballEl = document.querySelector('.setup-fireball-wrap');
  var fireballColorInputEl = document.querySelector('input[name="fireball-color"]');

  var colorizeElement = function (el, colors, input) {
    var currentColor = input.value || colors[0];

    var setColor = function (element, value) {
      if (element.tagName === 'use') {
        element.style.fill = value;
      } else {
        element.style.backgroundColor = value;
      }

      input.value = value;
    };

    for (var i = 0; i < colors.length; i++) {
      if (colors[i] === currentColor && i < colors.length - 1) {
        setColor(el, colors[i + 1]);
        break;
      } else if (i === colors.length - 1) {
        setColor(el, colors[0]);
        break;
      }
    }
  };

  var onWizardEyesClick = function (evt) {
    evt.preventDefault();
    colorizeElement(evt.target, EYES_COLORS, eyesColorInputEl);
  };

  var onWizardFireballClick = function (evt) {
    evt.preventDefault();
    colorizeElement(evt.target, FIREBALL_COLORS, fireballColorInputEl);
  };

  wizardEyesEl.addEventListener('click', onWizardEyesClick);
  wizardFireballEl.addEventListener('click', onWizardFireballClick);
})();
