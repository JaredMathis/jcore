import { string_empty } from '../../../../string/empty.mjs';
import { js_code_export_function } from '../../../code/export/function.mjs';
export function js_function_name_to_export(function_name) {
    let function_statements_code = string_empty();
    return js_code_export_function(function_name, function_statements_code);
}