import { js_identifier_rename } from '../../../../js/identifier/rename.mjs';
import { list_add_all } from '../../../../list/add/all.mjs';
import { file_js_all_map_args } from '../map/args.mjs';
export async function file_js_all_identifier_rename(identifier_name_old, identifier_name_new) {
    let file_paths_all_changed = [];
    await file_js_all_map_args(function mapper(args) {
        let file_paths_changed = js_identifier_rename(args, identifier_name_old, identifier_name_new);
        list_add_all(file_paths_all_changed, file_paths_changed)
    });
    return file_paths_all_changed;
}