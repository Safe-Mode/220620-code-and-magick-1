'use strict';

(function () {
  var STYLE_DIMENSION = 'px';

  var setupModalEl = document.querySelector('.setup');
  var dialogHandleEl = setupModalEl.querySelector('.setup-user-pic');

  dialogHandleEl.style.zIndex = '1';

  dialogHandleEl.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupModalEl.style.left = setupModalEl.offsetLeft - shift.x + STYLE_DIMENSION;
      setupModalEl.style.top = setupModalEl.offsetTop - shift.y + STYLE_DIMENSION;
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
