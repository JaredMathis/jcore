import { string_is } from '../is.mjs';
import { string_identifier_is_generic } from './is/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function string_identifier_is(value) {
    arguments_assert(arguments, [string_is]);
    let is_identifier = true;
    return string_identifier_is_generic(value, is_identifier);
    metadata([]);
}