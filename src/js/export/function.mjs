import { assert } from '../../assert.mjs';
import { string_empty } from '../../string/empty.mjs';
import { string_length } from '../../string/length.mjs';
export function js_export_function(function_name, function_statements_code) {
    assert(string_length(function_name) >= 1);
    let is_async = false;
    let async_code = string_empty();
    if (is_async) {
        async_code = js_keyword_async();
    }
    return `export ${async_code} function ${ function_name }() { ${ function_statements_code } }`;
}

function js_keyword_async() {
    return 'async';
}
