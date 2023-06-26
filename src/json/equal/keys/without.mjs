import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { list_is } from '../../../list/is.mjs';
import { json_equal } from '../../equal.mjs';
import { object_map_without } from '../../../object/map/without.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function json_equal_keys_without(a, b, values_without) {
    arguments_assert(arguments, [
        defined_is,
        defined_is,
        list_is
    ]);
    let filtered_a = object_map_without(a, values_without);
    let filtered_b = object_map_without(b, values_without);
    let v = json_equal(filtered_a, filtered_b);
    return v;
    metadata([]);
}