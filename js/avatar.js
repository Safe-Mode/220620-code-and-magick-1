'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooserEl = document.querySelector('input[type=file]');
  var fileChooserBtn = document.querySelector('.setup-user-upload');
  var previewEl = document.querySelector('.setup-user-pic');

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

  var toggleInitColor = function (el) {
    el.classList.toggle('upload-active');
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
    toggleInitColor(evt.currentTarget);
  });

  fileChooserBtn.addEventListener('dragleave', function (evt) {
    toggleInitColor(evt.currentTarget);
  });

  fileChooserBtn.addEventListener('drop', function (evt) {
    evt.preventDefault();

    var file = evt.dataTransfer.files[0];

    setUserFile(file);
    toggleInitColor(evt.currentTarget);
  });
})();
