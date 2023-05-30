export function js_function_name_to_parsed(function_name) {
    return js_parse(js_function_name_to_export(function_name));
}