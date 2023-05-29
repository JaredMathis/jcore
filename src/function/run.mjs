import { string_replace } from '../string/replace.mjs';
import { directory_separator } from '../directory/separator.mjs';
import { function_name_to_path } from '../function/name/to/path.mjs';
import { directory_current } from '../directory/current.mjs';
import { js_directory_separator } from '../js/directory/separator.mjs';
export async function function_run(function_name, args) {
    let function_path = function_name_to_path(function_name);
    let concated = '../../' + directory_current() + directory_separator() + function_path;
    let replaced = js_import_path_normalize(concated);
    let imported = await import(replaced);
    let imported_function = imported[function_name];
    let result = await imported_function(...args);
    return result;
}

function js_import_path_normalize(import_path) {
    return string_replace(import_path, directory_separator(), js_directory_separator());
}
