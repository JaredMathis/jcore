import { array_filter } from "../../array/filter.mjs";
import { string_function_test_name_is } from "../../string/function/test/name/is.mjs";
import { file_js_all } from "../../file/js/all.mjs";

export async function function_name_all() {
    let mapped4 = await file_js_all();
    let filtered2 =  array_filter(
        mapped4, 
        a => !string_function_test_name_is(a));
    return filtered2;
}

