goog.provide('anychart.core.BaseSettings');

goog.require('anychart.core.Base');

/**
 * Theme settings wrapper
 * @constructor
 * @extends {anychart.core.Base}
 */
anychart.core.BaseSettings = function() {
  anychart.core.BaseSettings.base(this, 'constructor');
};
goog.inherits(anychart.core.BaseSettings, anychart.core.Base);


/** @override */
anychart.core.BaseSettings.prototype.setupByJSON = function(json, opt_default) {
  goog.mixin(this.themeSettings, json);
};
