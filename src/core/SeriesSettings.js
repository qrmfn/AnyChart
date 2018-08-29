goog.provide('anychart.core.SeriesSettings');

goog.require('anychart.core.Base');


/**
 * Series theme settings getter class.
 *
 * @constructor
 * @extends {anychart.core.Base}
 */
anychart.core.SeriesSettings = function() {
  anychart.core.SeriesSettings.base(this, 'constructor');

  this.themeDependencies_ = [
    {
      seriesType: ['area', 'splineArea', 'stepArea', 'rangeArea', 'rangeSplineArea', 'rangeStepArea'],
      theme: 'areaLike'
    },
    {
      seriesType: ['rangeBar', 'rangeColumn', 'bar', 'column', 'box', 'candlestick'],
      theme: 'barLike'
    },
    {
      seriesType: ['hilo', 'line', 'spline', 'stepLine', 'jumpLine', 'ohlc', 'stick'],
      theme: 'lineLike'
    },
    {
      seriesType: ['rangeBar', 'rangeColumn', 'rangeArea', 'rangeSplineArea', 'rangeStepArea', 'hilo'],
      theme: 'rangeLike'
    }
  ];

  this.themesCache_ = {};
};
goog.inherits(anychart.core.SeriesSettings, anychart.core.Base);


/**
 * Returns theme path for series type.
 *
 * @param {string} seriesType
 * @return {Array.<string>}
 */
anychart.core.Base.prototype.getThemesForType = function(seriesType) {
  if (!goog.isDef(this.themesCache_[seriesType])) {
    seriesType = anychart.utils.toCamelCase(seriesType);

    var baseThemePaths = this.getThemes();
    this.themesCache_[seriesType] = this.createExtendedThemes(baseThemePaths, 'base');
    for (var i = 0; i < this.themeDependencies_.length; i++) {
      var types = this.themeDependencies_[i].seriesType;
      if (goog.array.indexOf(types, seriesType) != -1)
        this.themesCache_[seriesType] = goog.array.concat(this.themesCache_[seriesType], this.createExtendedThemes(baseThemePaths, this.themeDependencies_[i].theme));
    }
    this.themesCache_[seriesType] = goog.array.concat(this.themesCache_[seriesType], this.createExtendedThemes(baseThemePaths, seriesType));
  }
  return this.themesCache_[seriesType];
};