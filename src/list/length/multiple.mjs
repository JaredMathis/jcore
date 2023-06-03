import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_length } from '../length.mjs';
export function list_length_multiple(matches) {
    arguments_assert(arguments, [tautology]);
    return list_length(matches) >= 2;
}