import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_split } from '../split.mjs';
export function string_to_list(value) {
    arguments_assert(arguments, [tautology]);
    return string_split(value, '');
}