import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { add } from '../add.mjs';
export function add_1(value) {
    arguments_assert(arguments, [tautology]);
    return add(value, 1);
    metadata([]);
}