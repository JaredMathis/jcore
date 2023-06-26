import { metadata } from '../../metadata.mjs';
import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_split } from '../split.mjs';
export function string_to_list(value) {
    arguments_assert(arguments, [string_is]);
    let v_2 = '';
    let v = string_split(value, v_2);
    return v;
    metadata([]);
}