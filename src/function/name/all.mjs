import { array_filter } from "../../array/filter.mjs";
import { function_name_separator } from "../name/separator.mjs";
import { string_includes } from "../../string/includes.mjs";
import { file_js_all } from "../../file/js/all.mjs";

export async function function_name_all() {
    let mapped4 = await file_js_all();
    let fns = function_name_separator();
    let filtered2 =  array_filter(
        mapped4, 
        a => !string_includes(a, `${fns}test${fns}`));
    return filtered2;
}
