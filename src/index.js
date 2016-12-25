import 'string.fromcodepoint';

/**
 * \\ - matches the backslash which indicates the beginning of an escape sequence
 * (
 *   u\{([0-9A-Fa-f]+)\} - first alternative; matches the variable-length hexadecimal escape sequence (\u{ABCD0})
 * |
 *   u([0-9A-Fa-f]{4}) - second alternative; matches the 4-digit hexadecimal escape sequence (\uABCD)
 * | 
 *   x([0-9A-Fa-f]{2}) - third alternative; matches the 2-digit hexadecimal escape sequence (\xA5)
 * | 
 *   (\d{3}) - fourth alternative; matches the 3-digit octal escape sequence (\512)
 * | 
 *   (['"tbrnfv0\\]) - fifth alternative; matches the special escape characters (\t, \n and so on)
 * )
 */
const jsEscapeRegex = /\\(u\{([0-9A-Fa-f]+)\}|u([0-9A-Fa-f]{4})|x([0-9A-Fa-f]{2})|(\d{3})|(['"tbrnfv0\\]))/g;

const usualEscapeSequences = {
    '0': '\0',
    'b': '\b',
    'f': '\f',
    'n': '\n',
    'r': '\r',
    't': '\t',
    'v': '\v',
    '\'': '\'',
    '"': '"',
    '\\': '\\'
};

const fromHex = (str) => String.fromCodePoint(parseInt(str, 16));
const fromOct = (str) => String.fromCodePoint(parseInt(str, 8));

export default (string) => {
    return string.replace(jsEscapeRegex, (_, match, longHex, varHex, shortHex, octal) => {
        if (shortHex !== undefined) {
            return fromHex(shortHex);
        } else if (varHex !== undefined) {
            return fromHex(varHex);
        } else if (longHex !== undefined) {
            return fromHex(longHex);
        } else if (octal !== undefined) {
            return fromOct(octal);
        } else {
            return usualEscapeSequences[match];
        }
    });
}
