import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_merge } from './merge.mjs';
import { object_property_all_delete } from './property/all/delete.mjs';
export function object_replace(object, replacement) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    object_property_all_delete(object);
    object_merge(replacement, object);
    metadata([]);
}