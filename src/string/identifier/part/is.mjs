import { metadata } from '../../../metadata.mjs';
import { string_identifier_is_generic } from '../is/generic.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_identifier_part_is(value) {
    arguments_assert(arguments, [string_is]);
    let enforce_first_and_last = true;
    const allow_underscores = false;
    return string_identifier_is_generic(value, enforce_first_and_last, enforce_first_and_last, allow_underscores);
    metadata([]);
}