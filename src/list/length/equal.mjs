import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_length } from '../length.mjs';
export function list_length_equal(a, b) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let a_length = list_length(a);
    let b_length = list_length(b);
    return a_length === b_length;
    metadata([]);
}