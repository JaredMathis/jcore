import { assert } from '../../assert.mjs';
import { string_empty } from '../../string/empty.mjs';
import { string_length } from '../../string/length.mjs';
export function js_export_function(function_name, function_statements_code) {
    assert(string_length(function_name) >= 1);
    let is_async = false;
    let async_code = string_empty();
    if (is_async) {
        async_code = 'async';
    }
    return `export function ${ function_name }() { ${ function_statements_code } }`;
}