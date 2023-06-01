import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_unique } from '../unique.mjs';
import { list_length_equal } from '../length/equal.mjs';
export function list_unique_is(list) {
    arguments_assert(arguments, [tautology]);
    let u = list_unique(list);
    return list_length_equal(u, list);
    metadata([]);
}