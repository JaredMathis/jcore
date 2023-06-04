import { list_is } from '../../../is.mjs';
import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_first_remove } from '../../../first/remove.mjs';
import { list_first } from '../../../first.mjs';
export function list_remove_all_first_equals(args, value) {
    arguments_assert(arguments, [
        list_is,
        tautology
    ]);
    while (list_first(args) === value) {
        list_first_remove(args);
    }
    metadata([]);
}