import { error } from '../../error.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../assert.mjs';
export function arguments_assert_todo(value) {
    if (false)
    arguments_assert(arguments, [tautology]);
    return tautology(value);
}