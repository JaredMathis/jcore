import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_identifier_rename } from '../../../../js/identifier/rename.mjs';
import { file_js_all_map_args } from '../map/args.mjs';
import { list_add } from '../../../../list/add.mjs';
export async function file_js_all_identifier_rename(identifier_name_old, identifier_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let file_paths_changed = [];
    await file_js_all_map_args(function mapper(args) {
        let changed = js_identifier_rename(args, identifier_name_old, identifier_name_new);
        if (changed) {
            let file_path = object_property_get(args, 'file_path');
            list_add(file_paths_changed, file_path);
        }
    });
    return file_paths_changed;
    metadata([]);
}