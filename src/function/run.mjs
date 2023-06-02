import { js_import_meta_to_file_path } from '../js/import/meta/to/file/path.mjs';
import { log } from '../log.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { directory_separator } from '../directory/separator.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
import { directory_current } from '../directory/current.mjs';
import { js_import_path_normalize } from '../js/import/path/normalize.mjs';
import { fileURLToPath } from 'url';
export async function function_run(function_name, args) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let import_meta = import.meta;
    const __filename = js_import_meta_to_file_path(import_meta);
    console.log(__filename);
    let function_path = function_name_to_file_path(function_name);
    let concated = '../../' + directory_current() + directory_separator() + function_path;
    let replaced = js_import_path_normalize(concated);
    let imported = await import(replaced);
    let imported_function = imported[function_name];
    let result = await imported_function(...args);
    return result;
    metadata([]);
}