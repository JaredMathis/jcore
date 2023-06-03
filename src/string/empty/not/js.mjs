import { string_length } from '../../length.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { tautology } from '../../../tautology.mjs';
export function string_empty_not_js(s) {
    arguments_assert(arguments, [tautology]);
    return string_length(s) >= 1;
}