'use strict';

(function () {
  var artifactsShopEl = document.querySelector('.setup-artifacts-shop');
  var artifactsEl = document.querySelector('.setup-artifacts');
  var draggedItemEl = null;
  var currentTargetEl = null;
  var nextTargetEl = null;

  var colorizeCell = function (target, color) {
    if (window.Util.isImage(target)) {
      target.parentElement.style.backgroundColor = (color) ? color : '';
    } else {
      target.style.backgroundColor = (color) ? color : '';
    }
  };

  var onArtifactsDragover = function (evt) {
    evt.preventDefault();
    return false;
  };

  var onArtifactsDragenter = function (evt) {
    if (currentTargetEl && currentTargetEl !== evt.target.parentElement) {
      colorizeCell(currentTargetEl, '');
    }

    nextTargetEl = evt.target;
    colorizeCell(evt.target, 'yellow');

    evt.preventDefault();
  };

  var onArtifactsDrop = function (evt) {
    if (evt.target.children.length === 0 && !window.Util.isImage(evt.target)) {
      evt.target.appendChild(draggedItemEl);
    }

    colorizeCell(evt.target);
    evt.preventDefault();
  };

  var onArtifactsDragleave = function (evt) {
    if (evt.target !== nextTargetEl.parentElement) {
      colorizeCell(evt.target);
    }

    currentTargetEl = evt.target;
    evt.preventDefault();
  };

  var onArtifactsShopDragend = function (evt) {
    draggedItemEl = null;
    artifactsEl.style.outline = 'none';
    artifactsEl.removeEventListener('dragover', onArtifactsDragover);
    artifactsEl.removeEventListener('dragenter', onArtifactsDragenter);
    artifactsEl.removeEventListener('drop', onArtifactsDrop);
    artifactsEl.removeEventListener('dragleave', onArtifactsDragleave);
    evt.currentTarget.removeEventListener('dragend', onArtifactsShopDragend);
  };

  var onArtifactsShopDragstart = function (evt) {
    if (window.Util.isImage(evt.target)) {
      draggedItemEl = evt.target.cloneNode(true);
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsEl.style.outline = '2px dashed red';
    }

    artifactsEl.addEventListener('dragover', onArtifactsDragover);
    artifactsEl.addEventListener('dragenter', onArtifactsDragenter);
    artifactsEl.addEventListener('drop', onArtifactsDrop);
    artifactsEl.addEventListener('dragleave', onArtifactsDragleave);
    evt.currentTarget.addEventListener('dragend', onArtifactsShopDragend);
  };

  artifactsShopEl.addEventListener('dragstart', onArtifactsShopDragstart);
})();
