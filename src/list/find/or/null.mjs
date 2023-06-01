import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_find_generic } from '../generic.mjs';
export function list_find_or_null(list, predicate) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let or_null = true;
    let result = list_find_generic(list, predicate, or_null);
    return result;
}