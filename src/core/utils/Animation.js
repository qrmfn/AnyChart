goog.provide('anychart.core.utils.Animation');
goog.require('anychart.core.Base');



/**
 * @constructor
 * @extends {anychart.core.Base}
 */
anychart.core.utils.Animation = function() {
  anychart.core.utils.Animation.base(this, 'constructor');

  /**
   * Descriptors meta.
   * @type {!Object.<string, anychart.core.settings.PropertyDescriptorMeta>}
   */
  this.descriptorsMeta = {};

  anychart.core.settings.createDescriptorsMeta(this.descriptorsMeta, [
    ['enabled', 0, anychart.Signal.NEEDS_REAPPLICATION],
    ['duration', 0, anychart.Signal.NEEDS_REAPPLICATION]
  ]);
};
goog.inherits(anychart.core.utils.Animation, anychart.core.Base);


/**
 * Supported signals.
 * @type {number}
 */
anychart.core.utils.Animation.prototype.SUPPORTED_SIGNALS = anychart.Signal.NEEDS_REAPPLICATION;


/**
 * @type {!Object<string, anychart.core.settings.PropertyDescriptor>}
 */
anychart.core.utils.Animation.PROPERTY_DESCRIPTORS = (function() {
  /** @type {!Object.<string, anychart.core.settings.PropertyDescriptor>} */
  var map = {};

  anychart.core.settings.createDescriptors(map, [
    [anychart.enums.PropertyHandlerType.SINGLE_ARG, 'enabled', anychart.core.settings.booleanNormalizer],
    [anychart.enums.PropertyHandlerType.SINGLE_ARG, 'duration', anychart.utils.normalizeToNaturalNumber]
  ]);

  return map;
})();
anychart.core.settings.populate(anychart.core.utils.Animation, anychart.core.utils.Animation.PROPERTY_DESCRIPTORS);


/** @inheritDoc */
anychart.core.utils.Animation.prototype.serialize = function() {
  var json = {};
  anychart.core.settings.serialize(this, anychart.core.utils.Animation.PROPERTY_DESCRIPTORS, json);
  return json;
};


/**
 * @inheritDoc
 */
anychart.core.utils.Animation.prototype.setupByJSON = function(json, opt_default) {
  anychart.core.settings.deserialize(this, anychart.core.utils.Animation.PROPERTY_DESCRIPTORS, json, opt_default);
};


/** @inheritDoc */
anychart.core.utils.Animation.prototype.setupSpecial = function(isDefault, var_args) {
  var arg0 = arguments[1];
  if (goog.isBoolean(arg0) || goog.isNull(arg0)) {
    this.setOption('enabled', !!arg0);
    var arg1 = arguments[2];
    if (goog.isDef(arg1)) this.setOption('duration', arg1);
    return true;
  }

  if (!isNaN(+arg0)) {
    this.setOption('enabled', true);
    this.setOption('duration', +arg0);
    return true;
  }

  return anychart.core.Base.prototype.setupSpecial.apply(this, arguments);
};


//exports
(function() {
  var proto = anychart.core.utils.Animation.prototype;
  proto['enabled'] = proto.enabled;
  proto['duration'] = proto.duration;
})();
