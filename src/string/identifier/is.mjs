import { string_to_list } from '../to/list.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../is.mjs';
export function string_identifier_is(value) {
    arguments_assert(arguments, [tautology]);
    if (!string_is(value)) {
        return false;
    }
    let list = string_to_list(value);
    return true;
    metadata([]);
}