export function convertObjectToCSSText(
  style: Partial<CSSStyleDeclaration>
): string {
  const hyphenSeparated = JSON.stringify(style).replace(
    /[A-Z]/g,
    (s) => "-" + s.toLowerCase()
  );

  return Object.entries(JSON.parse(hyphenSeparated))
    .map(([k, v]) => `${k}: ${v}`)
    .join(";");
}
