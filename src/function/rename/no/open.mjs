import { metadata } from '../../../metadata.mjs';
import { function_rename_after } from '../after.mjs';
import { file_js_all_identifier_rename } from '../../../file/js/all/identifier/rename.mjs';
import { function_rename_without_all_refactor } from '../without/all/refactor.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_rename_no_open(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_rename_without_all_refactor(function_name_old, function_name_new);
    let file_paths_changed = await file_js_all_identifier_rename(function_name_old, function_name_new);
    await function_rename_after(file_paths_changed);
    metadata([]);
}