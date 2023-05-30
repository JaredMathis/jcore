export function function_tests_filtered() {
    let all = await file_js_all();
    let filtered = filter(all);
    let filtered2 = list_filter(filtered, string_function_tests_name_is);
    return filtered2;
}