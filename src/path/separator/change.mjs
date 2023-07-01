import { string_replace } from '../../string/replace.mjs';
import { js_directory_separator } from '../../js/directory/separator.mjs';
import { directory_separator } from '../../directory/separator.mjs';
export function path_separator_change(import_path) {
    let v = directory_separator();
    let v_2 = js_directory_separator();
    let result = string_replace(import_path, v, v_2);
    return result;
}