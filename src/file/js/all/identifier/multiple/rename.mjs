import { at_least_once } from '../../../../../at/least/once.mjs';
import { list_add_property } from '../../../../../list/add/property.mjs';
import { defined_is } from '../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_identifier_multiple_rename } from '../../../../../js/identifier/multiple/rename.mjs';
import { file_js_all_map_args } from '../../map/args.mjs';
import { list_unique_is } from '../../../../../list/unique/is.mjs';
import { list_multiple_combine } from '../../../../../list/multiple/combine.mjs';
import { object_properties } from '../../../../../object/properties.mjs';
import { object_keys } from '../../../../../object/keys.mjs';
import { assert } from '../../../../../assert.mjs';
export async function file_js_all_identifier_multiple_rename(dictionary) {
    arguments_assert(arguments, [defined_is]);
    let keys = object_keys(dictionary);
    let values = object_properties(dictionary);
    const concats = [
        keys,
        values
    ];
    let concat = list_multiple_combine(concats);
    let v = list_unique_is(concat);
    assert(v);
    let file_paths_changed = [];
    await file_js_all_map_args(function mapper(args) {
        let at_least_once = js_identifier_multiple_rename(dictionary, args);
        if (at_least_once) {
            list_add_property(file_paths_changed, args, 'file_path');
        }
    });
    return file_paths_changed;
    metadata([]);
}