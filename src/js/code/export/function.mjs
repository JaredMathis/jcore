import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { string_is } from '../../../string/is.mjs';
import { js_identifier_is } from '../../identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_code_export_function_synchronized } from './function/synchronized.mjs';
export function js_code_export_function(function_name, function_statements_code) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is
    ]);
    let is_async = boolean_value_false();
    let v = js_code_export_function_synchronized(function_name, is_async, function_statements_code);
    return v;
    metadata([]);
}