import { defined_is } from '../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_identifier_multiple_rename } from '../../../../../js/identifier/multiple/rename.mjs';
import { file_js_all_map_args } from '../../map/args.mjs';
import { list_unique_is } from '../../../../../list/unique/is.mjs';
import { list_all_combine } from '../../../../../list/all/combine.mjs';
import { object_properties } from '../../../../../object/properties.mjs';
import { object_keys } from '../../../../../object/keys.mjs';
import { assert } from '../../../../../assert.mjs';
export async function file_js_all_identifier_all_rename(dictionary) {
    arguments_assert(arguments, [defined_is]);
    let keys = object_keys(dictionary);
    let values = object_properties(dictionary);
    const concats = [
        keys,
        values
    ];
    let concat = list_all_combine(concats);
    assert(list_unique_is(concat));
    await file_js_all_map_args(function mapper(args) {
        js_identifier_multiple_rename(dictionary, args);
    });
    metadata([]);
}