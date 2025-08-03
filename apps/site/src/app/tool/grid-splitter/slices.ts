export type SplitType = '3x1' | '3x2' | '3x3' | 'panorama';

export interface Slice {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

export function calcSlices(type: SplitType, width: number, height: number): Slice[] {
  const slices: Slice[] = [];
  if (width <= 0 || height <= 0) return slices;

  if (type === 'panorama') {
    const tileSize = Math.min(height, Math.floor(width / 3));
    const offsetY = Math.floor((height - tileSize) / 2);
    for (let i = 0; i < 3; i++) {
      slices.push({ sx: i * tileSize, sy: offsetY, sw: tileSize, sh: tileSize });
    }
    return slices;
  }

  const cols = 3;
  const rows = type === '3x1' ? 1 : type === '3x2' ? 2 : 3;
  const tileW = Math.floor(width / cols);
  const tileH = Math.floor(height / rows);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      slices.push({ sx: x * tileW, sy: y * tileH, sw: tileW, sh: tileH });
    }
  }
  return slices;
}
