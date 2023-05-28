import { directory_separator } from "../../directory/separator.mjs";
import { string_split } from "../../string/split.mjs";

export function file_path_split(file_path) {
    let ds = directory_separator();
    return string_split(file_path, ds)
}