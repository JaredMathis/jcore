import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function list_add_beginning(list, element) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    list.unshift(element);
    metadata([]);
}