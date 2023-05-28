import { array_join } from "../../../array/join.mjs";
import { array_add_beginning } from "../../../array/add/beginning.mjs";
import { directory_separator } from "../../../directory/separator.mjs";
import { directory_source } from "../../../directory/source.mjs";
import { string_split } from "../../../string/split.mjs";

export function function_name_to_path(function_name) {
    let ds = directory_separator();
    let directory_source_result = directory_source();
    let split = string_split(function_name, '_');
    array_add_beginning(split, directory_source_result);
    let joined = array_join(split, ds);
    return joined
}