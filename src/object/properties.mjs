import { comment } from '../comment.mjs';
import { string_is } from '../string/is.mjs';
export function object_properties(object) {
    let default_value = [];
    if (!object) {
        return default_value;
    }
    comment(`Strings infinitely recurse here - maybe there's other edge cases too besides strings`);
    if (string_is(object)) {
        return default_value;
    }
    return Object.values(object);
}