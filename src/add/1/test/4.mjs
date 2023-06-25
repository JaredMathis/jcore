import { integer_value_0 } from '../../../integer/value/0.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { add_1 } from '../../1.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
export function add_1_test_4() {
    arguments_assert(arguments, []);
    let v_2 = add_1(-integer_value_1());
    let v = equal(v_2, integer_value_0());
    assert(v);
    metadata([]);
}