import { string_to_case_lower } from '../../../to/case/lower.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_character_first_generic } from '../../../character/first/generic.mjs';
import { string_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_case_lower_character_first(value) {
    arguments_assert(arguments, [string_is]);
    let lambda_map_first = string_to_case_lower;
    return string_character_first_generic(value, lambda_map_first);
    metadata([]);
}