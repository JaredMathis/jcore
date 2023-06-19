import { json_to_minimized } from '../../json/to/minimized.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function object_copy_json(value) {
    arguments_assert(arguments, [defined_is]);
    let json = json_to_minimized(value);
}