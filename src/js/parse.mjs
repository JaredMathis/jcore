import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { try_catch } from '../try/catch.mjs';
import { Parser } from 'acorn';
import { string_is } from '../string/is.mjs';
export function js_parse(unparsed) {
    arguments_assert(arguments, [string_is]);
    return try_catch(js_parse, lambda, unparsed);
    function lambda() {
        let parsed = Parser.parse(unparsed, {
            sourceType: 'module',
            ecmaVersion: '2020'
        });
        return parsed;
    }
    metadata([]);
}