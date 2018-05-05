'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooserEl = document.querySelector('input[type=file]');
  var previewEl = document.querySelector('.setup-user-pic');

  fileChooserEl.addEventListener('change', function () {
    var file = fileChooserEl.files[0];
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
  });
})();
