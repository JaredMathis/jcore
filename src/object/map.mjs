import { list_contains } from '../list/contains.mjs';
import { object_map_generic } from './map/generic.mjs';
import { list_is } from '../list/is.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function object_map(object, values_without) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    let lambda = function v_2(key) {
        let v_3 = list_contains(values_without, key);
        return v_3;
    };
    let v = object_map_generic(object, lambda);
    return v;
}