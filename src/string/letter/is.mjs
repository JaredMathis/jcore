import { metadata } from '../../metadata.mjs';
import { string_to_case_lower } from '../to/case/lower.mjs';
import { string_to_case_upper } from '../to/case/upper.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_letter_is(first) {
    arguments_assert(arguments, [string_is]);
    return string_to_case_upper(first) != string_to_case_lower(first);
    metadata([]);
}