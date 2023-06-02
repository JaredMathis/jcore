import { arguments_assert } from '../../assert.mjs';
import { tautology } from '../../../tautology.mjs';
export function arguments_assert_predicate_default() {
    arguments_assert(arguments, []);
    return tautology;
}