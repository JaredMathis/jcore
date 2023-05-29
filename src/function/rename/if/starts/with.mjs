import { refactor_import_fix } from '../../../../refactor/import/fix.mjs';
import { file_js_all_map } from '../../../../file/js/all/map.mjs';
import { file_js_all_identifier_rename } from '../../../../file/js/all/identifier/rename.mjs';
import { error } from '../../../../error.mjs';
import { function_rename_without_all_refactor } from '../../without/all/refactor.mjs';
import { string_prefix_replace } from '../../../../string/prefix/replace.mjs';
import { string_starts_with } from '../../../../string/starts/with.mjs';
import { function_name_all } from '../../../name/all.mjs';
import { object_property_set } from '../../../../object/property/set.mjs';
export async function function_rename_if_starts_with(prefix_old, prefix_new) {
    let names = await function_name_all();
    let dictionary = {};
    for (let n_old of names) {
        if (string_starts_with(n_old, prefix_old)) {
            let n_new = string_prefix_replace(n_old, prefix_old, prefix_new);
            await function_rename_without_all_refactor(n_old, n_new);
            object_property_set(dictionary, n_old, n_new);
            error();
            await file_js_all_identifier_rename(n_old, n_new);
        }
    }
    await file_js_all_map(refactor_import_fix.name);
}