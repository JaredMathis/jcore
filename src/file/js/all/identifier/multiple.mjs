import { metadata } from '../../../../metadata.mjs';
import { list_add_property_generic } from '../../../../list/add/property/generic.mjs';
import { js_identifier_rename } from '../../../../js/identifier/rename.mjs';
import { occurs } from '../../../../occurs.mjs';
import { object_keys_each } from '../../../../object/keys/each.mjs';
import { file_js_all_map_args } from '../map/args.mjs';
import { list_adder_async } from '../../../../list/adder/async.mjs';
export async function file_js_all_identifier_multiple(renames) {
    let v_3 = async function v(la) {
        let v_4 = function mapper(args) {
            let v_5 = function v_2(identifier_name_new, identifier_name_old) {
                let occurs = js_identifier_rename(args, identifier_name_old, identifier_name_new);
                if (occurs) {
                    let v_6 = 'file_path';
                    list_add_property_generic(la, args, v_6);
                }
            };
            object_keys_each(renames, v_5);
        };
        await file_js_all_map_args(v_4);
    };
    let file_paths_changed = await list_adder_async(v_3);
    return file_paths_changed;
    metadata([]);
}