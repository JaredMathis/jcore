import { string_is } from '../../is.mjs';
import { string_identifier_is_generic } from '../is/generic.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_identifier_sub_is(value) {
    arguments_assert(arguments, [string_is]);
    return string_identifier_is_generic(value, false, true);
    metadata([]);
}