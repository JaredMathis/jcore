import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_slice } from './slice.mjs';
export function list_take(list, count) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list_slice(list, 0, count);
    metadata([]);
}