import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_empty } from '../../../../string/empty.mjs';
import { js_code_export_function } from '../../../code/export/function.mjs';
export function js_function_name_to_export(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_statements_code = string_empty();
    let v = js_code_export_function(function_name, function_statements_code);
    return v;
    metadata([]);
}