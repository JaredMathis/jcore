import { object_map_generic } from '../map/generic.mjs';
import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
import { list_is } from '../../list/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_contains } from '../../list/contains.mjs';
export function object_keys_include(value, include) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    let v_4 = function v(key) {
        let v_2 = list_contains(include, key);
        return v_2;
    };
    object_map_generic(value, v_4);
    metadata([]);
}