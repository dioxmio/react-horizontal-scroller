export function getPointFromTouch(touch) {
  return {
    x: touch.clientX,
    y: touch.clientY,
  };
}

export function getNewPointFromEvent(e) {
  if ('touches' in e) {
    return getPointFromTouch(e.touches[0]);
  } else {
    return getPointFromTouch(e);
  }
}
