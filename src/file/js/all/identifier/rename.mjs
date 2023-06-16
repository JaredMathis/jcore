import { list_adder_async } from '../../../../list/adder/async.mjs';
import { list_add_property_generic } from '../../../../list/add/property/generic.mjs';
import { changed } from '../../../../changed.mjs';
import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_identifier_rename } from '../../../../js/identifier/rename.mjs';
import { file_js_all_map_args } from '../map/args.mjs';
export async function file_js_all_identifier_rename(identifier_name_old, identifier_name_new) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let file_paths_changed = await list_adder_async(async la => {
        await file_js_all_map_args(function mapper(args) {
            let changed = js_identifier_rename(args, identifier_name_old, identifier_name_new);
            if (changed) {
                list_add_property_generic(la, args, 'file_path');
            }
        });
    });
    return file_paths_changed;
    metadata([]);
}