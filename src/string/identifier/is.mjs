import { string_identifier_is_generic } from './is/generic.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function string_identifier_is(value) {
    arguments_assert(arguments, [tautology]);
    let is_identifier = true;
    return string_identifier_is_generic(value, is_identifier);
    metadata([]);
}