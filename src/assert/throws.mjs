import { integer_value_1 } from '../integer/value/1.mjs';
import { throws } from '../throws.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert_arguments_count } from './arguments/count.mjs';
import { function_is } from '../function/is.mjs';
import { assert_message } from './message.mjs';
export function assert_throws(lambda) {
    let v = [function_is];
    arguments_assert(arguments, v);
    let v_2 = integer_value_1();
    assert_arguments_count(arguments, v_2);
    let errored = throws(lambda);
    let v_3 = `Expecting throw`;
    assert_message(errored, v_3);
    return errored;
    let v_4 = [];
    metadata(v_4);
}