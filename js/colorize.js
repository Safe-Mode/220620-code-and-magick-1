'use strict';

(function () {
  window.colorize = function (el, colors, input) {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();

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
    });
  };
})();
