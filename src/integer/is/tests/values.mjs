import { metadata } from '../../../metadata.mjs';
import { integer_value_3 } from '../../value/3.mjs';
import { integer_value_0 } from '../../value/0.mjs';
import { integer_value_1 } from '../../value/1.mjs';
import { integer_value_2 } from '../../value/2.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function integer_is_tests_values() {
    arguments_assert(arguments, []);
    let v = integer_value_0();
    let v_2 = integer_value_1();
    let v_3 = integer_value_2();
    let v_4 = integer_value_3();
    return [
        -integer_value_2(),
        -integer_value_1(),
        v,
        v_2,
        v_3,
        v_4
    ];
    metadata([]);
}