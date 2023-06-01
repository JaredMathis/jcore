import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_slice } from './slice.mjs';
import { list_length } from './length.mjs';
export function list_skip(list, skip_count) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list_slice(list, skip_count, list_length(list));
    metadata([]);
}