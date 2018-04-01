'use strict';

(function () {
  var STAT_INIT_X = 100;
  var STAT_INIT_Y = 10;
  var STAT_WIDTH = 420;
  var STAT_HEIGHT = 270;
  var STAT_COLOR = '#ffffff';
  var STAT_SHADOW_OFFSET_X = 10;
  var STAT_SHADOW_OFFSET_Y = 10;
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var STAT_PADDING_X = 20;
  var STAT_PADDING_Y = 10;
  var LINE_INDENT = 20;
  var CHART_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_INDENT = 50;
  var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';

  var statShadowInitX = STAT_INIT_X + STAT_SHADOW_OFFSET_X;
  var statShadowInitY = STAT_INIT_Y + STAT_SHADOW_OFFSET_Y;
  var textInitX = STAT_INIT_X + STAT_PADDING_X;
  var textInitY = STAT_INIT_Y + STAT_PADDING_Y;

  var getMaxOfArray = function (numArray) {
    return Math.max.apply(null, numArray);
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = SHADOW_COLOR;
    ctx.fillRect(statShadowInitX, statShadowInitY, STAT_WIDTH, STAT_HEIGHT);

    ctx.fillStyle = STAT_COLOR;
    ctx.fillRect(STAT_INIT_X, STAT_INIT_Y, STAT_WIDTH, STAT_HEIGHT);

    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillStyle = '#000000';
    ctx.fillText('Ура вы победили!', textInitX, textInitY);
    ctx.fillText('Список результатов:', textInitX, textInitY + LINE_INDENT);

    var maxTime = Math.round(getMaxOfArray(times));
    var barUnit = CHART_HEIGHT / maxTime;
    var barInitX = STAT_INIT_X + STAT_PADDING_Y;
    var barInitY = STAT_INIT_Y - LINE_INDENT;
    var step = BAR_WIDTH + BAR_INDENT;

    times.forEach(function (time, i) {
      time = Math.round(time);

      var barHeight = Math.round(time * barUnit);
      var barColorSaturation = getRandomInt(0, 100);
      var barColor = (names[i] === 'Вы') ? PLAYER_BAR_COLOR : 'hsl(240, ' + barColorSaturation + '%, 50%)';
      var pointsInitY = STAT_HEIGHT - LINE_INDENT + barInitY - barHeight;
      var nameInitY = STAT_INIT_Y + STAT_HEIGHT;

      ctx.fillStyle = '#000000';
      ctx.textBaseline = 'hanging';
      ctx.fillText(time, barInitX, pointsInitY);
      ctx.textBaseline = 'bottom';
      ctx.fillText(names[i], barInitX, nameInitY);

      ctx.fillStyle = barColor;
      ctx.fillRect(barInitX, barInitY + STAT_HEIGHT, BAR_WIDTH, -barHeight);
      barInitX += step;
    });
  };
})();
