import { string_empty_is } from '../string/empty/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { try_catch } from '../try/catch.mjs';
import { Parser } from 'acorn';
import { string_is } from '../string/is.mjs';
export function js_parse(unparsed) {
    arguments_assert(arguments, [string_is]);
    let error_message = unparsed;
    if (false)
        if (string_empty_is()) {
        }
    let v = try_catch(js_parse, lambda, unparsed);
    return v;
    function lambda() {
        let parsed = Parser.parse(unparsed, {
            sourceType: 'module',
            ecmaVersion: '2020'
        });
        return parsed;
    }
    metadata([]);
}