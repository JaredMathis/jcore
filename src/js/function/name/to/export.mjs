export function js_function_name_to_export(function_name) {
    let function_statements_code = ''
    return `export function ${ function_name }() {}`;
}