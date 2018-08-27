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

  this.themeSettingsCache_ = {};
};
goog.inherits(anychart.core.SeriesSettings, anychart.core.Base);


/**
 *
 * @param {string} seriesType
 * @return {Object}
 */
anychart.core.Base.prototype.getSettingsForType = function(seriesType) {
  if (!goog.isDef(this.themeSettingsCache_[seriesType])) {
    seriesType = anychart.utils.toCamelCase(seriesType);
    var settings = new anychart.core.Base();
    this.registerDisposable(settings);
    this.themeSettingsCache_[seriesType] = settings;

    var baseThemePaths = this.getThemes();
    settings.addThemes(this.createExtendedThemes(baseThemePaths, 'base'));
    for (var i = 0; i < this.themeDependencies_.length; i++) {
      var types = this.themeDependencies_[i].seriesType;
      if (goog.array.indexOf(types, seriesType) != -1)
        settings.addThemes(this.createExtendedThemes(baseThemePaths, this.themeDependencies_[i].theme));
    }
    settings.addThemes(this.createExtendedThemes(baseThemePaths, seriesType));
  }

  return this.themeSettingsCache_[seriesType].themeSettings;
};