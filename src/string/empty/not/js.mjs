import { string_length } from '../../length.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_empty_not_js() {
    arguments_assert(arguments, []);
    return string_length(s) >= 1;
}