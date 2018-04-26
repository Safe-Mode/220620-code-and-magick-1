'use strict';

(function () {
  // window.Wizard = function (names, surnames, coatColors, eyesColors) {
  //   this.name = names[window.Util.getRandomInt(0, names.length - 1)] + ' ' + surnames[window.Util.getRandomInt(0, surnames.length - 1)];
  //   this.coatColor = coatColors[window.Util.getRandomInt(0, coatColors.length - 1)];
  //   this.eyesColor = eyesColors[window.Util.getRandomInt(0, eyesColors.length - 1)];
  // };

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var changeColor = function (colors, input) {
    var currentColor = input.value || colors[0];
    var newColor;

    for (var i = 0; i < colors.length; i++) {
      if (colors[i] === currentColor && i < colors.length - 1) {
        newColor = colors[i + 1];
        break;
      } else if (i === colors.length - 1) {
        newColor = colors[0];
        break;
      }
    }

    return newColor;
  };

  var Wizard = function (options) {
    this.name = options.name + ' ' + options.surname;
    this.coatColor = options.coatColor;
    this.coatColorInput = options.coatColorInput;
    this.eyesColor = options.eyesColor;
    this.eyesColorInput = options.eyesColorInput;
  };

  Wizard.prototype.colorizeCoat = function () {
    var newColor = changeColor(COAT_COLORS, this.coatColorInput);

    this.coatColor = newColor;
    this.onChange(this);

    return newColor;
  };

  Wizard.prototype.colorizeEyes = function () {
    var newColor = changeColor(EYES_COLORS, this.eyesColorInput);

    this.eyesColor = newColor;
    this.onChange(this);

    return newColor;
  };

  Wizard.prototype.colorizeFireball = function () {
    var newColor = changeColor(FIREBALL_COLORS, this.fireballColorInput);

    this.fireballColor = newColor;
    this.onChange(this);

    return newColor;
  };

  Wizard.prototype.onChange = function (wizard) {
    return wizard;
  };

  window.Wizard = Wizard;
})();
