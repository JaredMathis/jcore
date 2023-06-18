import { object_merge_filtered } from './merge/filtered.mjs';
import { defined_is } from '../defined/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function object_merge(from, to) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    object_merge_filtered(from, tautology, to);
    return to;
    metadata([]);
}