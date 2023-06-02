import { js_import_meta_to_file_path } from '../js/import/meta/to/file/path.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
import { js_import_path_normalize } from '../js/import/path/normalize.mjs';
import { path_relative_file } from '../path/relative/file.mjs';
export async function function_run(function_name, args) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    const __filename = js_import_meta_to_file_path(import.meta);
    let function_path = function_name_to_file_path(function_name);
    let concated = path_relative_file(__filename, function_path);
    let replaced = js_import_path_normalize(concated);
    let imported = await import(replaced);
    let imported_function = imported[function_name];
    let result = await imported_function(...args);
    return result;
    metadata([]);
}