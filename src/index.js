import 'string.fromcodepoint';

const jsEscapeRegex = /\\(u(\{([0-9A-Fa-f]+)\}|[0-9A-Fa-f]{4})|x([0-9A-Fa-f]{2})|(\d{3})|['"tbrnfv0/\\])/g;

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
