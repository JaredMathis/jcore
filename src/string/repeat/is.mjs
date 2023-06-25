import { integer_value_2 } from '../../integer/value/2.mjs';
import { integer_odd_is } from '../../integer/odd/is.mjs';
import { string_split_at } from '../split/at.mjs';
import { list_elements_all_equal } from '../../list/elements/all/equal.mjs';
import { integer_divide_evenly } from '../../integer/divide/evenly.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
import { object_properties } from '../../object/properties.mjs';
import { string_is } from '../is.mjs';
export function string_repeat_is(input) {
    arguments_assert(arguments, [string_is]);
    let length = string_length(input);
    let v_2 = integer_odd_is(length);
    if (v_2) {
        return false;
    }
    let half = integer_divide_evenly(length, integer_value_2());
    let split = string_split_at(input, half);
    let values = object_properties(split);
    let v = list_elements_all_equal(values);
    return v;
}