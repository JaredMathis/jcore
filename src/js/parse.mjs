import { string_empty_is } from '../string/empty/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { try_catch_log } from '../try/catch/log.mjs';
import { Parser } from 'acorn';
import { string_is } from '../string/is.mjs';
export function js_parse(unparsed) {
    arguments_assert(arguments, [string_is]);
    let error_message = unparsed;
    if (string_empty_is(unparsed)) {
        error_message = `[empty string]`;
    }
    let v = try_catch_log(js_parse, lambda, error_message);
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