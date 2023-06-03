import { object_merge_filtered } from './merge/filtered.mjs';
import { defined_is } from '../defined/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function object_merge(from, to) {
    arguments_assert(arguments, [
        defined_is,
        tautology
    ]);
    let filter = tautology;
    object_merge_filtered(from, filter, to);
    metadata([]);
}