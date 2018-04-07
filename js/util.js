'use strict';

(function () {
  window.Util = {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };
})();
