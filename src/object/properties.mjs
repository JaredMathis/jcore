import { not } from '../not.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { comment } from '../comment.mjs';
import { string_is } from '../string/is.mjs';
import { defined_is } from '../defined/is.mjs';
export function object_properties(object) {
    arguments_assert(arguments, [defined_is]);
    let default_value = [];
    let v_2 = not(object);
    if (v_2) {
        return default_value;
    }
    comment(`Strings infinitely recurse here - maybe there's other edge cases too besides strings`);
    let v_3 = string_is(object);
    if (v_3) {
        return default_value;
    }
    let v = Object.values(object);
    return v;
    metadata([]);
}