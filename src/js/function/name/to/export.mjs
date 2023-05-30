export function js_function_name_to_export(function_name) {
    let function_statements_code = ''
    return js_export_function(function_name, function_statements_code);
}

function js_export_function(function_name, function_statements_code) {
    return `export function ${function_name}() { ${function_statements_code} }`;
}
