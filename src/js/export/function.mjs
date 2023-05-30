import { js_export_function_synchronized } from './function/synchronized.mjs';
export function js_export_function(function_name, function_statements_code) {
    let is_async = false;
    return js_export_function_synchronized(function_name, is_async, function_statements_code);
}