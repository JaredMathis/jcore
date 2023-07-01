import { string_character_first_generic } from '../../../character/first/generic.mjs';
import { metadata } from '../../../../metadata.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_to_case_upper } from '../../../to/case/upper.mjs';
import { string_is } from '../../../is.mjs';
export function string_case_upper_character_first(value) {
    arguments_assert(arguments, [string_is]);
    let lambda_map_first = string_to_case_upper;
    return string_character_first_generic(value, lambda_map_first);
    metadata([]);
}