import { metadata } from '../../metadata.mjs';
import { function_rename_after } from './after.mjs';
import { list_multiple_combine } from '../../list/multiple/combine.mjs';
import { file_js_all_identifier_rename } from '../../file/js/all/identifier/rename.mjs';
import { file_js_all_identifier_multiple } from '../../file/js/all/identifier/multiple.mjs';
import { function_rename_without_all_refactor } from './without/all/refactor.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_rename_single(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    let tests_renames = await function_rename_without_all_refactor(function_name_old, function_name_new);
    let file_paths_tests_changed = await file_js_all_identifier_multiple(tests_renames);
    let file_paths_changed = await file_js_all_identifier_rename(function_name_old, function_name_new);
    let v_2 = [
        file_paths_tests_changed,
        file_paths_changed
    ];
    let v = list_multiple_combine(v_2);
    await function_rename_after(v);
    metadata([]);
}