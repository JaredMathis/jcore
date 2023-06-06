import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
export function json_to(object) {
    arguments_assert(arguments, [defined_is]);
    return JSON.stringify(object, null, ' ');
    metadata([]);
}