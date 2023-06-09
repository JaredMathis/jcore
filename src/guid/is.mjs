import { arguments_assert } from '../arguments/assert.mjs';
import uuid from 'uuid';
import { defined_is } from '../defined/is.mjs';
export function guid_is(value) {
    arguments_assert(arguments, [defined_is]);
    return uuid.validate(value);
}