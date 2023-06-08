import { tests_generate } from '../../../../tests/generate.mjs';
import { function_rename_after } from '../../after.mjs';
import { string_identifier_sub_is } from '../../../../string/identifier/sub/is.mjs';
import { list_to_dictionary } from '../../../../list/to/dictionary.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_identifier_multiple_rename } from '../../../../file/js/all/identifier/multiple/rename.mjs';
import { function_rename_without_all_refactor } from '../../without/all/refactor.mjs';
import { string_prefix_replace } from '../../../../string/prefix/replace.mjs';
import { string_starts_with } from '../../../../string/starts/with.mjs';
import { function_name_all } from '../../../name/all.mjs';
export async function function_rename_if_starts_with(prefix_old, prefix_new) {
    arguments_assert(arguments, [
        string_identifier_sub_is,
        string_identifier_sub_is
    ]);
    let names = await function_name_all();
    let dictionary = await list_to_dictionary(names, key_to_value);
    async function key_to_value(n_old) {
        if (string_starts_with(n_old, prefix_old)) {
            let n_new = string_prefix_replace(n_old, prefix_old, prefix_new);
            await function_rename_without_all_refactor(n_old, n_new);
            return n_new;
        }
    }
    let file_paths_changed = await file_js_all_identifier_multiple_rename(dictionary);
    await function_rename_after(file_paths_changed);
    metadata([]);
}