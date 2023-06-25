import { integer_value_0 } from '../../../integer/value/0.mjs';
import { arguments_assert } from '../../assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { assert_arguments_count } from '../../../assert/arguments/count.mjs';
export function arguments_count_test_3() {
    let v = [];
    arguments_assert(arguments, v);
    let v_2 = `no error`;
    comment(v_2);
    let v_3 = [];
    let v_4 = integer_value_0();
    assert_arguments_count(v_3, v_4);
    let v_5 = [];
    metadata(v_5);
}