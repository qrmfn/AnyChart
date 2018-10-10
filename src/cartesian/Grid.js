goog.provide('anychart.cartesianModule.Grid');
goog.provide('anychart.standalones.grids.Linear');
goog.require('acgraph');
goog.require('anychart.color');
goog.require('anychart.core.GridBase');
goog.require('anychart.core.reporting');
goog.require('anychart.core.utils.Padding');
goog.require('anychart.enums');



/**
 * Grid.
 * @constructor
 * @extends {anychart.core.GridBase}
 */
anychart.cartesianModule.Grid = function() {
  anychart.cartesianModule.Grid.base(this, 'constructor');
};
goog.inherits(anychart.cartesianModule.Grid, anychart.core.GridBase);


//region --- Infrastructure
/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.scaleInvalidated = function(event) {
  var signal = 0;
  if (event.hasSignal(anychart.Signal.NEEDS_RECALCULATION))
    signal |= anychart.Signal.NEEDS_RECALCULATION;
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION))
    signal |= anychart.Signal.NEEDS_REDRAW;

  signal |= anychart.Signal.BOUNDS_CHANGED;

  var state = anychart.ConsistencyState.BOUNDS |
      anychart.ConsistencyState.APPEARANCE;

  this.invalidate(state, signal);
};


//endregion
//region --- Drawing
/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawLineHorizontal = function(ratio, shift) {
  var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
  /** @type {number}*/
  var y = parentBounds.getBottom() - ratio * parentBounds.height;
  y = anychart.utils.applyPixelShift(y, /** @type {number} */(this.lineElement().strokeThickness()), ratio == 0);
  this.lineElementInternal.moveTo(anychart.utils.applyPixelShift(parentBounds.getLeft(), 1), y);
  this.lineElementInternal.lineTo(anychart.utils.applyPixelShift(parentBounds.getRight(), 1), y);
};


/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawLineVertical = function(ratio, shift) {
  var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
  /** @type {number}*/
  var x = parentBounds.getLeft() + ratio * parentBounds.width;
  x = anychart.utils.applyPixelShift(x, /** @type {number} */(this.lineElement().strokeThickness()), ratio == 1);
  this.lineElementInternal.moveTo(x, anychart.utils.applyPixelShift(parentBounds.getBottom(), 1));
  this.lineElementInternal.lineTo(x, parentBounds.getTop());
};


/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawInterlaceHorizontal = function(ratio, prevRatio, path, shift) {
  if (!isNaN(prevRatio)) {
    var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
    var y1 = parentBounds.getBottom() - prevRatio * parentBounds.height;
    y1 = anychart.utils.applyPixelShift(y1, /** @type {number} */(this.lineElement().strokeThickness()), ratio == 0);

    var y2 = parentBounds.getBottom() - ratio * parentBounds.height;
    y2 = anychart.utils.applyPixelShift(y2, /** @type {number} */(this.lineElement().strokeThickness()), ratio == 0);


    path.moveTo(anychart.utils.applyPixelShift(parentBounds.getLeft(), 1), y1);
    path.lineTo(anychart.utils.applyPixelShift(parentBounds.getRight(), 1), y1);
    path.lineTo(anychart.utils.applyPixelShift(parentBounds.getRight(), 1), y2);
    path.lineTo(anychart.utils.applyPixelShift(parentBounds.getLeft(), 1), y2);
    path.close();
  }
};


/** @inheritDoc */
anychart.cartesianModule.Grid.prototype.drawInterlaceVertical = function(ratio, prevRatio, path, shift) {
  if (!isNaN(prevRatio)) {
    var parentBounds = this.parentBounds() || anychart.math.rect(0, 0, 0, 0);
    var x1 = parentBounds.getLeft() + prevRatio * parentBounds.width;
    x1 = anychart.utils.applyPixelShift(x1, /** @type {number} */(this.lineElement().strokeThickness()), ratio == 1);

    var x2 = parentBounds.getLeft() + ratio * parentBounds.width;
    x2 = anychart.utils.applyPixelShift(x2, /** @type {number} */(this.lineElement().strokeThickness()), ratio == 1);


    path.moveTo(x1, parentBounds.getTop());
    path.lineTo(x2, parentBounds.getTop());
    path.lineTo(x2, parentBounds.getBottom());
    path.lineTo(x1, parentBounds.getBottom());
    path.close();
  }
};


//endregion
//region --- Standalone



//------------------------------------------------------------------------------
//
//  Standalone
//
//------------------------------------------------------------------------------
/**
 * @constructor
 * @extends {anychart.cartesianModule.Grid}
 */
anychart.standalones.grids.Linear = function() {
  anychart.standalones.grids.Linear.base(this, 'constructor');
};
goog.inherits(anychart.standalones.grids.Linear, anychart.cartesianModule.Grid);
anychart.core.makeStandalone(anychart.standalones.grids.Linear, anychart.cartesianModule.Grid);


/**
 * Constructor function.
 * @return {!anychart.standalones.grids.Linear}
 */
anychart.standalones.grids.linear = function() {
  var grid = new anychart.standalones.grids.Linear();
  grid.setup(anychart.getFullTheme('standalones.linearGrid'));
  return grid;
};


//endregion
//region --- Exports
(function() {
  var proto = anychart.cartesianModule.Grid.prototype;
  proto['isHorizontal'] = proto.isHorizontal;
  proto['scale'] = proto.scale;
  proto['axis'] = proto.axis;
  // proto['isMinor'] = proto.isMinor;

  proto = anychart.standalones.grids.Linear.prototype;
  goog.exportSymbol('anychart.standalones.grids.linear', anychart.standalones.grids.linear);
  proto['layout'] = proto.layout;
  proto['draw'] = proto.draw;
  proto['parentBounds'] = proto.parentBounds;
  proto['container'] = proto.container;
})();
//endregion