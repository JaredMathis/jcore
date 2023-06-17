import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { comment } from '../comment.mjs';
import { string_is } from '../string/is.mjs';
import { defined_is } from '../defined/is.mjs';
export function object_properties(object) {
    arguments_assert(arguments, [defined_is]);
    let default_value = [];
    if (not(object)) {
        return default_value;
    }
    comment(`Strings infinitely recurse here - maybe there's other edge cases too besides strings`);
    if (string_is(object)) {
        return default_value;
    }
    return Object.values(object);
    metadata([]);
}