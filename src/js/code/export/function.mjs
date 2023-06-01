import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_code_export_function_synchronized } from './function/synchronized.mjs';
export function js_code_export_function(function_name, function_statements_code) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let is_async = false;
    return js_code_export_function_synchronized(function_name, is_async, function_statements_code);
    metadata([]);
}