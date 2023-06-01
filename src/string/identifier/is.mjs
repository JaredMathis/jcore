import { string_length_is_0 } from '../length/is/0.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../is.mjs';
import { string_split } from '../split.mjs';
export function string_identifier_is(value) {
    arguments_assert(arguments, [tautology]);
    if (!string_is(value)) {
        return false;
    }
    let list = string_split(value, '');
    if (string_length_is_0(value)) {
        return true;
    }
    return true;
    metadata([]);
}