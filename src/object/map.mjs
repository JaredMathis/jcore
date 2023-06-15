import { object_map_generic } from './map/generic.mjs';
import { list_contains_not } from '../list/contains/not.mjs';
import { list_is } from '../list/is.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function object_map(object, values_without) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    let lambda = key => list_contains_not(values_without, key);
    return object_map_generic(object, lambda);
}