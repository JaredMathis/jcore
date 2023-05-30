export function js_export_function(function_name, function_statements_code) {
    return `export function ${ function_name }() { ${ function_statements_code } }`;
}