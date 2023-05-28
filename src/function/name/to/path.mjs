import { array_join } from "../../../array/join.mjs";
import { directory_separator } from "../../../directory/separator.mjs";
import { directory_source } from "../../../directory/source.mjs";
import { string_split } from "../../../string/split.mjs";

export function function_name_to_path(function_name) {
    let ds = directory_separator();
    let directory_source_result = directory_source();

    let split = string_split(function_name, '_');
    let joined = array_join(split, '/');
    return joined
}