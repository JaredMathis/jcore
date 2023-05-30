import { js_export_function_synchronized } from './function/synchronized.mjs';
import { assert } from '../../assert.mjs';
import { string_length } from '../../string/length.mjs';
export function js_export_function(function_name, function_statements_code) {
    assert(string_length(function_name) >= 1);
    let is_async = false;
    return js_export_function_synchronized(is_async, function_name, function_statements_code);
}