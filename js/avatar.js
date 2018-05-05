'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var HOVER_COLOR = '#da641a';

  var fileChooserEl = document.querySelector('input[type=file]');
  var fileChooserBtn = document.querySelector('.setup-user-upload');
  var previewEl = document.querySelector('.setup-user-pic');
  var initColor = window.getComputedStyle(fileChooserBtn).color;

  var setUserFile = function (file) {
    file = (!file) ? fileChooserEl.files[0] : file;
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        previewEl.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  fileChooserEl.addEventListener('change', function () {
    setUserFile();
  });

  document.addEventListener('dragover', function (evt) {
    evt.preventDefault();
  });

  document.addEventListener('drop', function (evt) {
    evt.preventDefault();
  });

  fileChooserBtn.addEventListener('dragenter', function (evt) {
    evt.currentTarget.style.color = HOVER_COLOR;
  });

  fileChooserBtn.addEventListener('dragleave', function (evt) {
    evt.currentTarget.style.color = initColor;
  });

  fileChooserBtn.addEventListener('drop', function (evt) {
    evt.preventDefault();
    var file = evt.dataTransfer.files[0];
    setUserFile(file);
  });
})();
