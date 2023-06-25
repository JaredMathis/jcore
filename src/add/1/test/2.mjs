import { integer_value_3 } from '../../../integer/value/3.mjs';
import { integer_value_2 } from '../../../integer/value/2.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { add_1 } from '../../1.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
export function add_1_test_2() {
    arguments_assert(arguments, []);
    let v_2 = add_1(integer_value_2());
    let v = equal(v_2, integer_value_3());
    assert(v);
    metadata([]);
}