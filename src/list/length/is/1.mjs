import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_length_is_value } from './value.mjs';
export function list_length_is_1(specifiers) {
    arguments_assert(arguments, [tautology]);
    return list_length_is_value(specifiers, 1);
    metadata([]);
}