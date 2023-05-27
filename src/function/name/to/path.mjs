import { string_split } from "../../../string/split.mjs";

export function function_name_to_path(function_name) {
    return string_split(function_name, '_');
}