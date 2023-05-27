import { array_filter } from "../../array/filter.mjs";
import { file_js_all } from "../../file/js/all.mjs";

export async function function_name_all() {
    let all = await file_js_all();
    let filtered =  array_filter(
        all, 
        a => !string_function_test_name_is(a));
    return filtered;
}