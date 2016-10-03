function sort(colors, selector, i1, i2) {
  const [c1, c2] = [colors[selector(i1).url], colors[selector(i2).url]];
  return ((c1 || {}).hsv || [0])[0] - ((c2 || {}).hsv || [0])[0];
}

export default function colorsort(colors, items, selector) {
  return items.filter(selector).sort((p1, p2) => sort(colors, selector, p1, p2));
}