import { integer_odd_is } from '../../integer/odd/is.mjs';
import { string_split_at } from '../split/at.mjs';
import { list_all_equal } from '../../list/all/equal.mjs';
import { integer_divide_evenly } from '../../integer/divide/evenly.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
import { object_properties } from '../../object/properties.mjs';
import { string_is } from '../is.mjs';
export function string_repeat_is(input) {
    arguments_assert(arguments, [string_is]);
    let length = string_length(input);
    if (false)
        if (integer_odd_is(length)) {
            return false;
        }
    let half = integer_divide_evenly(length, 2);
    let split = string_split_at(input, half);
    let values = object_properties(split);
    return list_all_equal(values);
}