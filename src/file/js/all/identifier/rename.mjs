import { object_property_get } from '../../../../object/property/get.mjs';
import { js_identifier_rename } from '../../../../js/identifier/rename.mjs';
import { list_add_all } from '../../../../list/add/all.mjs';
import { file_js_all_map_args } from '../map/args.mjs';
export async function file_js_all_identifier_rename(identifier_name_old, identifier_name_new) {
    let file_paths_changed = [];
    await file_js_all_map_args(function mapper(args) {
        let changed = js_identifier_rename(args, identifier_name_old, identifier_name_new);
        if (changed) {
            let file_path = object_property_get(args, 'file_path');
            list_add_all(file_paths_changed, file_path);
        }
    });
    return file_paths_changed;
}