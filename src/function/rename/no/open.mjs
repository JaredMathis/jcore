import { log } from '../../../log.mjs';
import { file_js_all_identifier_multiple } from '../../../file/js/all/identifier/multiple.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_rename_after } from '../after.mjs';
import { file_js_all_identifier_rename } from '../../../file/js/all/identifier/rename.mjs';
import { function_rename_without_all_refactor } from '../without/all/refactor.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_multiple_combine } from '../../../list/multiple/combine.mjs';
export async function function_rename_no_open(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    log('a');
    let tests_renames = await function_rename_without_all_refactor(function_name_old, function_name_new);
    log('a');
    let file_paths_tests_changed = await file_js_all_identifier_multiple(tests_renames);
    log('a');
    let file_paths_changed = await file_js_all_identifier_rename(function_name_old, function_name_new);
    log('a');
    let v = list_multiple_combine([
        file_paths_tests_changed,
        file_paths_changed
    ]);
    log('a');
    await function_rename_after(v);
    log('a');
    metadata([]);
}