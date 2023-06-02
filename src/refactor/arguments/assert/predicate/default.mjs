import { arguments_assert } from '../../../../arguments/assert.mjs';
import { tautology } from '../../../../tautology.mjs';
export function refactor_arguments_assert_predicate_default() {
    arguments_assert(arguments, []);
    return tautology;
}