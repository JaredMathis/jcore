import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function value_new() {
    arguments_assert(arguments, []);
    return {
        value: undefined,
        set: false
    };
    metadata([]);
}