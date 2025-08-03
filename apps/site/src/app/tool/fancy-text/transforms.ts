/*
 * Fancy text transformations.
 */

export type UnicodeStyle =
  | 'normal'
  | 'bold'
  | 'italic'
  | 'cursive'
  | 'gothic'
  | 'bubble'
  | 'smallcaps'
  | 'monospace';

export interface TransformOptions {
  unicodeStyle: UnicodeStyle;
  underline: boolean;
  strikethrough: boolean;
  superscript: boolean;
  subscript: boolean;
  case: 'none' | 'upper' | 'lower' | 'capitalize';
  emojify: boolean;
  reverse: boolean;
  zalgo: boolean;
  markdown: boolean;
}

/**
 * Strip very basic markdown syntax.
 */
function stripMarkdown(text: string): string {
  return text
    .replace(/(\*\*|__)(.+?)\1/g, '$2')
    .replace(/(\*|_)(.+?)\1/g, '$2')
    .replace(/`(.+?)`/g, '$1')
    .replace(/~~(.+?)~~/g, '$1')
    .replace(/^#{1,6}\s*(.+)$/gm, '$1');
}

const emojiMap: Record<string, string> = {
  love: '❤️',
  happy: '😊',
  smile: '😊',
  sad: '😢',
  ok: '👌',
  fire: '🔥',
  star: '⭐',
};

/** Replace certain words with emojis. */
function emojify(text: string): string {
  return text.replace(/\b(\w+)\b/gi, (m) => emojiMap[m.toLowerCase()] ?? m);
}

/** Apply case transformation. */
function applyCase(text: string, mode: TransformOptions['case']): string {
  switch (mode) {
    case 'upper':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    case 'capitalize':
      return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    default:
      return text;
  }
}

/** Reverse the text. */
function reverse(text: string): string {
  return Array.from(text).reverse().join('');
}

const superscriptMap: Record<string, string> = {
  0: '⁰',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
  a: 'ᵃ',
  b: 'ᵇ',
  c: 'ᶜ',
  d: 'ᵈ',
  e: 'ᵉ',
  f: 'ᶠ',
  g: 'ᵍ',
  h: 'ʰ',
  i: 'ᶦ',
  j: 'ʲ',
  k: 'ᵏ',
  l: 'ˡ',
  m: 'ᵐ',
  n: 'ⁿ',
  o: 'ᵒ',
  p: 'ᵖ',
  r: 'ʳ',
  s: 'ˢ',
  t: 'ᵗ',
  u: 'ᵘ',
  v: 'ᵛ',
  w: 'ʷ',
  x: 'ˣ',
  y: 'ʸ',
  z: 'ᶻ',
  A: 'ᴬ',
  B: 'ᴮ',
  D: 'ᴰ',
  E: 'ᴱ',
  G: 'ᴳ',
  H: 'ᴴ',
  I: 'ᴵ',
  J: 'ᴶ',
  K: 'ᴷ',
  L: 'ᴸ',
  M: 'ᴹ',
  N: 'ᴺ',
  O: 'ᴼ',
  P: 'ᴾ',
  R: 'ᴿ',
  T: 'ᵀ',
  U: 'ᵁ',
  V: 'ⱽ',
  W: 'ᵂ',
};

const subscriptMap: Record<string, string> = {
  0: '₀',
  1: '₁',
  2: '₂',
  3: '₃',
  4: '₄',
  5: '₅',
  6: '₆',
  7: '₇',
  8: '₈',
  9: '₉',
  a: 'ₐ',
  e: 'ₑ',
  h: 'ₕ',
  i: 'ᵢ',
  j: 'ⱼ',
  k: 'ₖ',
  l: 'ₗ',
  m: 'ₘ',
  n: 'ₙ',
  o: 'ₒ',
  p: 'ₚ',
  r: 'ᵣ',
  s: 'ₛ',
  t: 'ₜ',
  u: 'ᵤ',
  v: 'ᵥ',
  x: 'ₓ',
};

/** Map characters using provided table. */
function applyMapping(text: string, map: Record<string, string>): string {
  return Array.from(text)
    .map((ch) => map[ch] ?? ch)
    .join('');
}

const zalgoChars = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308'];

/** Add combining marks for a zalgo effect. */
function addZalgo(text: string): string {
  return Array.from(text)
    .map((ch) => ch + zalgoChars[Math.floor(Math.random() * zalgoChars.length)])
    .join('');
}

interface BlockMap {
  upper: number;
  lower: number;
  digits?: number;
  exceptions?: Record<string, string>;
}

const unicodeBlocks: Record<Exclude<UnicodeStyle, 'normal' | 'smallcaps'>, BlockMap> = {
  bold: { upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce },
  italic: { upper: 0x1d434, lower: 0x1d44e },
  cursive: {
    upper: 0x1d49c,
    lower: 0x1d4b6,
    exceptions: {
      B: '\u212C',
      E: '\u2130',
      F: '\u2131',
      H: '\u210B',
      I: '\u2110',
      L: '\u2112',
      M: '\u2133',
      R: '\u211B',
      e: '\u212F',
      g: '\u210A',
      o: '\u2134',
    },
  },
  gothic: {
    upper: 0x1d504,
    lower: 0x1d51e,
    exceptions: {
      C: '\u212D',
      H: '\u210C',
      I: '\u2111',
      R: '\u211C',
      Z: '\u2128',
    },
  },
  bubble: { upper: 0x24b6, lower: 0x24d0, digits: 0x2460 },
  monospace: { upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 },
};

const smallCapsMap: Record<string, string> = {
  a: 'ᴀ',
  b: 'ʙ',
  c: 'ᴄ',
  d: 'ᴅ',
  e: 'ᴇ',
  f: 'ꜰ',
  g: 'ɢ',
  h: 'ʜ',
  i: 'ɪ',
  j: 'ᴊ',
  k: 'ᴋ',
  l: 'ʟ',
  m: 'ᴍ',
  n: 'ɴ',
  o: 'ᴏ',
  p: 'ᴘ',
  q: 'ǫ',
  r: 'ʀ',
  s: 's',
  t: 'ᴛ',
  u: 'ᴜ',
  v: 'ᴠ',
  w: 'ᴡ',
  x: 'x',
  y: 'ʏ',
  z: 'ᴢ',
};

/** Convert ASCII characters into a given unicode style. */
function mapUnicode(text: string, style: UnicodeStyle): string {
  if (style === 'smallcaps') {
    return applyMapping(text.toLowerCase(), smallCapsMap);
  }
  if (style === 'normal') return text;
  const block = unicodeBlocks[style];
  return Array.from(text)
    .map((ch) => {
      const code = ch.codePointAt(0);
      if (!code) return ch;
      const exc = block.exceptions?.[ch];
      if (exc) return exc;
      if (code >= 0x41 && code <= 0x5a) {
        return String.fromCodePoint(code - 0x41 + block.upper);
      }
      if (code >= 0x61 && code <= 0x7a) {
        return String.fromCodePoint(code - 0x61 + block.lower);
      }
      if (block.digits && code >= 0x30 && code <= 0x39) {
        const offset = style === 'bubble' ? (code - 0x31 + block.digits) : (code - 0x30 + block.digits);
        return String.fromCodePoint(offset);
      }
      return ch;
    })
    .join('');
}

/** Append a combining mark to each character. */
function combine(text: string, mark: string): string {
  return Array.from(text)
    .map((ch) => ch + mark)
    .join('');
}

/**
 * Transform text with given options.
 */
export function transform(text: string, opts: TransformOptions): string {
  let result = opts.markdown ? stripMarkdown(text) : text;
  result = applyCase(result, opts.case);
  if (opts.emojify) result = emojify(result);
  if (opts.superscript) result = applyMapping(result, superscriptMap);
  else if (opts.subscript) result = applyMapping(result, subscriptMap);
  else result = mapUnicode(result, opts.unicodeStyle);
  if (opts.underline) result = combine(result, '\u0332');
  if (opts.strikethrough) result = combine(result, '\u0336');
  if (opts.reverse) result = reverse(result);
  if (opts.zalgo) result = addZalgo(result);
  return result;
}
