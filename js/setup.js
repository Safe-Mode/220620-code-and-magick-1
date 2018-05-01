'use strict';

(function () {
  // var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  // var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var ENDPOINT_URL = 'https://js.dump.academy/code-and-magick';
  var STATUS_OK = 200;
  var SUCCESS_MESSAGE = 'Данные успешно отправлены';
  var MESSAGE_TIMEOUT = 5000;

  var dataURL = ENDPOINT_URL + '/data';
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

  // var getWizards = function (options) {
  //   var wizards = [];
  //
  //   options.names.forEach(function () {
  //     var wizard = new window.Wizard(options.names, options.surnames, options.coatColors, options.eyesColors);
  //     wizards.push(wizard);
  //   });
  //
  //   return wizards;
  // };
  //
  // var wizards = getWizards({
  //   names: NAMES,
  //   surnames: SURNAMES,
  //   coatColors: COAT_COLORS,
  //   eyesColors: EYES_COLORS
  // });

  var showStatusMessage = function (status, showTime) {
    var node = document.createElement('div');
    var messageColor = (status === STATUS_OK) ? 'green' : 'red';

    node.id = 'error';
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: ' + messageColor;
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = (status === STATUS_OK) ? SUCCESS_MESSAGE : status;

    var prevError = document.querySelector('#error');

    if (prevError) {
      window.Util.removeElement(prevError);
    }

    document.body.insertAdjacentElement('afterbegin', node);

    if (showTime) {
      var timeout = setTimeout(function () {
        window.Util.removeElement(node);
        clearTimeout(timeout);
      }, showTime);
    }
  };

  var onXHRSuccess = function (wizards) {
    window.render(wizards, wizardTemplate, similarWizards);
    toggleModal(similarBLock);
  };

  var onXHRError = function (errorMessage) {
    showStatusMessage(errorMessage, MESSAGE_TIMEOUT);
  };

  window.backend.load({
    url: dataURL,
    onLoad: onXHRSuccess,
    onError: onXHRError
  });

  var similarBLock = setupModal.querySelector('.setup-similar');
  var similarWizards = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var form = document.querySelector('.setup-wizard-form');

  var onFormSubmit = function (response, status) {
    toggleModal(setupModal);
    showStatusMessage(status, MESSAGE_TIMEOUT);
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save({
      url: ENDPOINT_URL,
      data: new FormData(evt.currentTarget),
      onLoad: onFormSubmit,
      onError: onXHRError
    });

    evt.preventDefault();
  });
})();
