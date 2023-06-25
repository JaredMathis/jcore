import { integer_value_1 } from '../integer/value/1.mjs';
import { throws } from '../throws.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert_arguments_count } from './arguments/count.mjs';
import { function_is } from '../function/is.mjs';
import { assert_message } from './message.mjs';
export function assert_throws(lambda) {
    arguments_assert(arguments, [function_is]);
    let v = integer_value_1();
    assert_arguments_count(arguments, v);
    let errored = throws(lambda);
    let v_2 = `Expecting throw`;
    assert_message(errored, v_2);
    return errored;
    metadata([]);
}