import { directory_read } from "../../directory/read.mjs";
import { array_filter } from "../../array/filter.mjs";
import { string_ends_with } from "../../string/ends/with.mjs";
import { string_split } from "../../string/split.mjs";
import { array_join } from "../../array/join.mjs";
import { directory_separator } from "../../directory/separator.mjs";
import { function_name_separator } from "../name/separator.mjs";
import { string_includes } from "../../string/includes.mjs";

export async function function_name_all() {
    let ds = directory_separator();
    let result = await directory_read('.');
    let filtered = array_filter(
        result, 
        a => string_ends_with(a, '.mjs') && !string_includes(a, `${ds}test${ds}`));
    let split = array_map(filtered, a => string_split(a, ds));
    let joined = array_join(split, function_name_separator());
    return joined;
}