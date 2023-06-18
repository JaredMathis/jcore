import { list_add_property_generic } from '../../../../list/add/property/generic.mjs';
import { js_identifier_rename } from '../../../../js/identifier/rename.mjs';
import { changed } from '../../../../changed.mjs';
import { object_keys_each } from '../../../../object/keys/each.mjs';
import { file_js_all_map_args } from '../map/args.mjs';
import { list_adder_async } from '../../../../list/adder/async.mjs';
export async function file_js_all_identifier_multiple(renames) {
    let file_paths_changed = await list_adder_async(async function v(la) {
        await file_js_all_map_args(function mapper(args) {
            object_keys_each(renames, function v_2(identifier_name_new, identifier_name_old) {
                let changed = js_identifier_rename(args, identifier_name_old, identifier_name_new);
                if (changed) {
                    list_add_property_generic(la, args, 'file_path');
                }
            });
        });
    });
    return file_paths_changed;
}