import { array_join } from "../../../array/join.mjs";
import { string_split } from "../../../string/split.mjs";

export function function_name_to_path(function_name) {
    let split = string_split(function_name, '_');
    let joined = array_join(split, '/');
    return joined
}