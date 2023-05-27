import { array_filter } from "../../array/filter.mjs";
import { file_js_all } from "../../file/js/all.mjs";
import { string_function_tests_name_is } from "../../string/function/test/name/is.mjs";
import { string_starts_with } from "../../string/starts/with.mjs";
import { function_name_separator } from "../name/separator.mjs";

export async function function_tests_all(function_name) {
    let all = await file_js_all();
    let filtered = array_filter(
        all, 
        a => string_starts_with(a, function_name + function_name_separator()));
    let filtered2 = array_filter(
        filtered, 
        a => !string_function_tests_name_is(a));
    return filtered2;
}