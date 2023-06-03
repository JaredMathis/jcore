import { string_identifier_is } from '../string/identifier/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_name_get } from './name/get.mjs';
import { file_js_multiple_map } from '../file/js/multiple/map.mjs';
import { refactor_import_fix } from '../refactor/import/fix.mjs';
import { file_js_all_identifier_rename } from '../file/js/all/identifier/rename.mjs';
import { function_rename_without_all_refactor } from './rename/without/all/refactor.mjs';
export async function function_rename(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        tautology,
        string_identifier_is
    ]);
    await function_rename_without_all_refactor(function_name_old, function_name_new);
    let file_paths_changed = await file_js_all_identifier_rename(function_name_old, function_name_new);
    await file_js_multiple_map(function_name_get(refactor_import_fix), file_paths_changed);
    metadata([]);
}