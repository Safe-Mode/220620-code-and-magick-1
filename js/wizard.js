'use strict';

(function () {
  window.Wizard = function (names, surnames, coatColors, eyesColors) {
    this.name = names[window.Util.getRandomInt(0, names.length - 1)] + ' ' + surnames[window.Util.getRandomInt(0, surnames.length - 1)];
    this.coatColor = coatColors[window.Util.getRandomInt(0, coatColors.length - 1)];
    this.eyesColor = eyesColors[window.Util.getRandomInt(0, eyesColors.length - 1)];
  };
})();
