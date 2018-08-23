goog.provide('anychart.core.SeriesSettings');

goog.require('anychart.core.BaseSettings');


/**
 * Series theme settings getter class.
 *
 * @constructor
 * @extends {anychart.core.BaseSettings}
 */
anychart.core.SeriesSettings = function() {
  anychart.core.SeriesSettings.base(this, 'constructor');

  this.defaultsMap_ = [
    {
      'seriesType': ['area', 'splineArea', 'stepArea', 'rangeArea', 'rangeSplineArea', 'rangeStepArea'],
      'defaults': ['base', 'areaLike']
    },
      // todo: Extend me!
  ];

  this.themeSettingsCache_ = {};
};
goog.inherits(anychart.core.SeriesSettings, anychart.core.BaseSettings);



anychart.core.BaseSettings.prototype.getSeriesTypeSettings = function(seriesName) {
  if (!goog.isDef(this.themeSettingsCache_[seriesName])) {
    var baseThemePaths = this.getThemes();
    var settings = new  anychart.core.BaseSettings();
    settings.addThemes(this.createExtendedThemes(baseThemePaths, 'base'));
    settings.addThemes(this.createExtendedThemes(baseThemePaths, 'areaLike'));
    settings.addThemes(this.createExtendedThemes(baseThemePaths, 'area'));
    this.registerDisposable(settings);
    this.themeSettingsCache_[seriesName] = settings;
  }

  return this.themeSettingsCache_[seriesName];
};
