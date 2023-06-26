import { metadata } from '../../../../metadata.mjs';
import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { integer_value_0 } from '../../../../integer/value/0.mjs';
import { string_skip } from '../../../skip.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_get } from '../../../get.mjs';
import { string_combine } from '../../../combine.mjs';
import { string_to_case_upper } from '../../../to/case/upper.mjs';
import { string_is } from '../../../is.mjs';
export function string_case_upper_character_first(value) {
    arguments_assert(arguments, [string_is]);
    let first = string_get(value, integer_value_0());
    let first_upper = string_to_case_upper(first);
    let remaining = string_skip(value, integer_value_1());
    let result = string_combine(first_upper, remaining);
    return result;
    metadata([]);
}