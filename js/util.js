'use strict';

(function () {
  window.Util = {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,

    isEscPressed: function (evt) {
      return evt.keyCode === this.ESC_KEYCODE;
    },

    isEnterPressed: function (evt) {
      return evt.keyCode === this.ENTER_KEYCODE;
    },

    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };
})();
