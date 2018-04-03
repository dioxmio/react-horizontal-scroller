export function getPointFromTouch(touch) {
  return {
    x: touch.clientX,
    y: touch.clientY,
  };
}

export function getNewPointFromEvent(e) {
  let newPoint = undefined;
  if ('touches' in e) {
    newPoint = getPointFromTouch(e.touches[0]);
  } else {
    newPoint = getPointFromTouch(e);
  }
  return newPoint;
}
