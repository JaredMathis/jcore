import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function number_is(value) {
    if (false)
        assert_arguments_count(arguments, 1);
    arguments_assert(arguments, [tautology]);
    return typeof value === 'number';
    metadata([]);
}