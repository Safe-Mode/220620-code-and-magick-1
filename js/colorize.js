'use strict';

(function () {
  window.colorize = function (options) {
    options.el.addEventListener('click', function (evt) {
      evt.preventDefault();

      var currentColor = options.input.value || options.colors[0];

      var setColor = function (element, value) {
        if (element.tagName === 'use') {
          element.style.fill = value;
        } else {
          element.style.backgroundColor = value;
        }

        options.input.value = value;
      };

      for (var i = 0; i < options.colors.length; i++) {
        if (options.colors[i] === currentColor && i < options.colors.length - 1) {
          setColor(options.el, options.colors[i + 1]);
          break;
        } else if (i === options.colors.length - 1) {
          setColor(options.el, options.colors[0]);
          break;
        }
      }

      if (options.cb) {
        options.cb();
      }
    });
  };
})();
