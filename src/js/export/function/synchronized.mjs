import { string_length } from '../../../string/length.mjs';
import { assert } from '../../../assert.mjs';
import { js_keyword_async } from '../../keyword/async.mjs';
import { string_empty } from '../../../string/empty.mjs';
export function js_export_function_synchronized(is_async, function_name, function_statements_code) {
    assert(string_length(function_name) >= 1);
    let async_code = string_empty();
    if (is_async) {
        async_code = js_keyword_async();
    }
    return `export ${ async_code } function ${ function_name }() { ${ function_statements_code } }`;
}