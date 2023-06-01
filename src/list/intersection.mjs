import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_contains } from './contains.mjs';
import { list_filter } from './filter.mjs';
export function list_intersection(left, right) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list_filter(left, l => list_contains(right, l));
    metadata([]);
}