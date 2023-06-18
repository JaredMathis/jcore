import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../assert.mjs';
export function arguments_assert_todo(value) {
    arguments_assert(arguments, [() => true]);
    let v = tautology(value);
    return v;
}