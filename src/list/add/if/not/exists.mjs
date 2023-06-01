import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_add } from '../../../add.mjs';
import { list_contains } from '../../../contains.mjs';
export function list_add_if_not_exists(list, element) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    if (list_contains(list, element)) {
        return;
    }
    list_add(list, element);
    metadata([]);
}