import { file_js_all_identifier_exists } from '../file/js/all/identifier/exists.mjs';
import { assert } from '../assert.mjs';
import { file_js_all_map } from '../file/js/all/map.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
import { function_exists } from './exists.mjs';
import { function_name_to_path } from './name/to/path.mjs';
import { file_rename } from '../file/rename.mjs';
import { file_js_identifier_rename } from '../file/js/identifier/rename.mjs';
export async function function_rename(function_name_old, function_name_new) {
    assert(await function_exists(function_name_old));
    assert(!await function_exists(function_name_new));
    assert(!await file_js_all_identifier_exists(function_name_new));
    let file_path_old = function_name_to_path(function_name_old);
    let file_path_new = function_name_to_path(function_name_new);
    await file_rename(file_path_old, file_path_new);
    await file_js_identifier_rename(file_path_new, function_name_old, function_name_new);
    await file_js_all_map(refactor_import_fix.name);
}