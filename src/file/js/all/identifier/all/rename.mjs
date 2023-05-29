import { array_unique_is } from '../../../../../array/unique/is.mjs';
import { array_all_combine } from '../../../../../array/all/combine.mjs';
import { object_properties } from '../../../../../object/properties.mjs';
import { object_keys } from '../../../../../object/keys.mjs';
import { assert } from '../../../../../assert.mjs';
import { object_each } from '../../../../../object/each.mjs';
import { file_js_map_args } from '../../../map/args.mjs';
export async function file_js_all_identifier_all_rename(dictionary) {
    let keys = object_keys(dictionary);
    let values = object_properties(dictionary);
    const concats = [
        keys,
        values
    ];
    let concat = array_all_combine(concats);
    assert(array_unique_is(concat));
    await file_js_all_map_args(function mapper(args) {
        object_each(dictionary, (to, from) => {
            js_identifier_rename(args, from, to);
        });
    });
}