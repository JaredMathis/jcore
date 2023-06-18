import { defined_is } from '../../defined/is.mjs';
import { equal_not } from '../../equal/not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_filter } from '../../list/filter.mjs';
import { object_properties } from '../properties.mjs';
import { list_is } from '../../list/is.mjs';
export function object_keys_without(value, excluded) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    let all = object_properties(value);
    let filtered = list_filter(all, function v_2(v) {
        return equal_not(v, excluded);
    });
    return filtered;
}