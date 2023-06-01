import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function value_new(default_value) {
    arguments_assert(arguments, [tautology]);
    return {
        value: default_value,
        set: false
    };
    metadata([]);
}