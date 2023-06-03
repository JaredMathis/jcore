import { arguments_assert } from '../arguments/assert.mjs';
export function defined_is(variable) {
    arguments_assert(arguments, []);
    return typeof variable !== 'undefined';
}