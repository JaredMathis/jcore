import { comment } from "../comment.mjs";
import { string_is } from "../string/is.mjs";

export function object_properties(object) {
    comment(`Strings infinitely recurse here - maybe there's other edge cases too besides strings`)
    if (string_is(object)) {
        return [];
    }
    return Object.values(object)
}
