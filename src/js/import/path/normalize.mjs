import { comment } from "../../../comment.mjs";
import { directory_separator } from "../../../directory/separator.mjs";
import { string_replace } from "../../../string/replace.mjs";
import { js_directory_separator } from "../../directory/separator.mjs";

comment(`path.normalize slashes one way. However import statements in mjs require slashes another way. This function makes imports suitable for import usage in mjs.`)
export function js_import_path_normalize(import_path) {
    let result = string_replace(
        import_path, 
        directory_separator(), 
        js_directory_separator());
    return result;
}
