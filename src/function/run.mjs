import { directory_separator } from '../directory/separator.mjs';
import { function_name_to_path } from './name/to/path.mjs';
import { directory_current } from '../directory/current.mjs';
import { js_import_path_normalize } from '../js/import/path/normalize.mjs';
export async function function_run(function_name, args) {
    let function_path = function_name_to_path(function_name);
    let concated = '../../' + directory_current() + directory_separator() + function_path;
    let replaced = js_import_path_normalize(concated);
    let imported = await import(replaced);
    let imported_function = imported[function_name];
    let result = await imported_function(...args);
    console.log({result});
    return result;
}