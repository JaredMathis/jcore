import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { defined_is } from './defined/is.mjs';
export function identity(value) {
    arguments_assert(arguments, [defined_is]);
    return value;
    metadata([]);
}