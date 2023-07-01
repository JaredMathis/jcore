import { string_combine } from '../../combine.mjs';
import { string_skip } from '../../skip.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { string_get } from '../../get.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
export function string_character_first_generic(value, lambda_map_first) {
    let v = integer_value_0();
    let first = string_get(value, v);
    let first_upper = lambda_map_first(first);
    let v_2 = integer_value_1();
    let remaining = string_skip(value, v_2);
    let result = string_combine(first_upper, remaining);
    return result;
}