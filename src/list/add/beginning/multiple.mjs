import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_add_beginning } from '../beginning.mjs';
export function list_add_beginning_multiple(list, element_new_all) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let e of element_new_all) {
        list_add_beginning(list, e);
    }
    metadata([]);
}