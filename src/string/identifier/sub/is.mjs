import { string_identifier_is_generic } from '../is/generic.mjs';
import { metadata } from '../../../metadata.mjs';
import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_identifier_sub_is(value) {
    arguments_assert(arguments, [tautology]);
    return string_identifier_is_generic(value, false);
    metadata([]);
}