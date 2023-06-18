import { object_map_generic } from './generic.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_is } from '../../list/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_contains_not } from '../../list/contains/not.mjs';
export function object_map_without(object, values_without) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    let lambda = function v_2(key) {
        let v_3 = list_contains_not(values_without, key);
        return v_3;
    };
    let v = object_map_generic(object, lambda);
    return v;
}