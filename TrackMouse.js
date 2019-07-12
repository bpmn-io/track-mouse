import {
  throttle
} from 'min-dash';


/**
 * Logs mouse coordinates and hover states to the console.
 *
 * @param {EventBus} eventBus
 * @param {Canvas} canvas
 */
export default function TrackMouse(eventBus, canvas) {

  var position;
  var hover;

  var changed = throttle(function changed() {
    if (hover && position) {
      console.log('TrackMouse', toLocalPoint(canvas, position), hover);
    }
  }, 500);

  function updatePosition(_position) {
    position = _position;

    changed();
  }

  function updateHover(_hover) {
    hover = _hover;

    changed();
  }

  eventBus.on('element.hover', function(event) {
    updateHover(event.element);
  });

  eventBus.on('element.out', function(event) {
    updateHover(null);
  });

  eventBus.on('element.mousemove', function(event) {
    updatePosition({
      x: event.originalEvent.offsetX,
      y: event.originalEvent.offsetY
    });
  });

}

/**
 * Add names of dependencies here for minification-safety.
 */
TrackMouse.$inject = [
  'eventBus',
  'canvas'
];


// helpers ////////////////

/**
 * Convert global position to local coordinates.
 *
 * @param {Canvas} canvas
 * @param {Point} globalPosition
 *
 * @return {Point}
 */
function toLocalPoint(canvas, globalPosition) {

  var viewbox = canvas.viewbox();

  var clientRect = canvas._container.getBoundingClientRect();

  return {
    x: viewbox.x + (globalPosition.x - clientRect.left) / viewbox.scale,
    y: viewbox.y + (globalPosition.y - clientRect.top) / viewbox.scale
  };
}