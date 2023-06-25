import { integer_value_3 } from '../../value/3.mjs';
import { integer_value_0 } from '../../value/0.mjs';
import { integer_value_1 } from '../../value/1.mjs';
import { integer_value_2 } from '../../value/2.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function integer_is_tests_values() {
    arguments_assert(arguments, []);
    return [
        -integer_value_2(),
        -integer_value_1(),
        integer_value_0(),
        integer_value_1(),
        integer_value_2(),
        integer_value_3()
    ];
}