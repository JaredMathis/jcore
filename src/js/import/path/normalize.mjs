import { directory_separator } from "../../../directory/separator.mjs";
import { string_replace } from "../../../string/replace.mjs";
import { js_directory_separator } from "../../directory/separator.mjs";

export function js_import_path_normalize(import_path) {
    return string_replace(import_path, directory_separator(), js_directory_separator());
}
