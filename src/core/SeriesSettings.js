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

  this.defaultsMap_ = [
    {
      'seriesType': ['area', 'splineArea', 'stepArea', 'rangeArea', 'rangeSplineArea', 'rangeStepArea'],
      'defaults': ['base', 'areaLike']
    },
      // todo: Extend me!
  ];

  this.themeSettingsCache_ = {};
};
goog.inherits(anychart.core.SeriesSettings, anychart.core.Base);



anychart.core.Base.prototype.getSettingsForType = function(seriesType) {
  seriesType = anychart.utils.toCamelCase(seriesType);
  if (!goog.isDef(this.themeSettingsCache_[seriesType])) {
    var baseThemePaths = this.getThemes();
    var settings = new  anychart.core.Base();
    settings.addThemes(this.createExtendedThemes(baseThemePaths, 'base'));
    settings.addThemes(this.createExtendedThemes(baseThemePaths, 'areaLike'));
    settings.addThemes(this.createExtendedThemes(baseThemePaths, 'area'));
    this.registerDisposable(settings);
    this.themeSettingsCache_[seriesType] = settings;
  }

  return this.themeSettingsCache_[seriesType].themeSettings;
};
