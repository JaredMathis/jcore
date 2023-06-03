import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
export function object_keys(object) {
    arguments_assert(arguments, [defined_is]);
    return Object.keys(object);
    metadata([]);
}