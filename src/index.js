import 'string.fromcodepoint';

const usualEscapeSequences = [
    [/\\0/g, '\0'],
    [/\\b/g, '\b'],
    [/\\f/g, '\f'],
    [/\\n/g, '\n'],
    [/\\r/g, '\r'],
    [/\\t/g, '\t'],
    [/\\v/g, '\v'],
    [/\\'/g, '\''],
    [/\\"/g, '\"'],
    [/\\\\/g, '\\']
];

const createUnescaper = (regexp, base) => {
    return (stringToUnescape) => {
        return stringToUnescape.replace(regexp, (_, submatch) => {
            const charCode = parseInt(submatch, base);
            return String.fromCodePoint(charCode);
        });
    }
}

/**
 * Unescape octal sequences with constant 3-digit length (\017, \251 etc.)
 */
const unescapeOctSequence = createUnescaper(/\\(\d\d\d)/g, 8);

/**
 * Unescape hexadecimal sequences with constant 2-digit length (\xA9, \x72 etc.)
 */
const unescapeShortHexSequence = createUnescaper(/\\x([0-9A-Fa-f]{2})/g, 16);

/**
 * Unescape hexadecimal sequences with constant 4-digit length (\u12A9, \u0072 etc.)
 */
const unescapeLongHexSequence = createUnescaper(/\\u([0-9A-Fa-f]{4})/g, 16);

/**
 * Unescape hexadecimal sequences with variable length. (\u{A9}, \u{2F804} etc.)
 */
const unescapeVariableHexSequence = createUnescaper(/\\u\{([0-9A-Fa-f]+)\}/g, 16);

export default (string) => {
    string = usualEscapeSequences.reduce((s, [sequence, equivalent]) => {
        return s.replace(sequence, equivalent);
    }, string);
    
    string = unescapeOctSequence(string);
    string = unescapeShortHexSequence(string);
    string = unescapeLongHexSequence(string);
    string = unescapeVariableHexSequence(string);
    return string;
}
