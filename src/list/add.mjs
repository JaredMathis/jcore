import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_add(list, element) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    list.push(element);
    metadata([]);
}