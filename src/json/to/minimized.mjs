import { metadata } from '../../metadata.mjs';
import { json_to_generic } from './generic.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function json_to_minimized(object) {
    arguments_assert(arguments, [defined_is]);
    const space = '';
    let v = json_to_generic(object, space);
    return v;
    metadata([]);
}