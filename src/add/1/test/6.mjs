import { integer_value_2 } from '../../../integer/value/2.mjs';
import { integer_value_3 } from '../../../integer/value/3.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { add_1 } from '../../1.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
export function add_1_test_6() {
    arguments_assert(arguments, []);
    let v_3 = -integer_value_3();
    let v_2 = add_1(v_3);
    let v_4 = -integer_value_2();
    let v = equal(v_2, v_4);
    assert(v);
    metadata([]);
}