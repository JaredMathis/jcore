import { js_export_function_synchronized } from './function/synchronized.mjs';
export function js_export_function(function_name, function_statements_code) {
    let is_async = false;
    return js_export_function_synchronized(is_async, function_name, function_statements_code);
}