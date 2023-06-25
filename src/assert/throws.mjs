import { integer_value_1 } from '../integer/value/1.mjs';
import { throws } from '../throws.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert_arguments_count } from './arguments/count.mjs';
import { function_is } from '../function/is.mjs';
import { assert_message } from './message.mjs';
export function assert_throws(lambda) {
    arguments_assert(arguments, [function_is]);
    assert_arguments_count(arguments, integer_value_1());
    let errored = throws(lambda);
    assert_message(errored, `Expecting throw`);
    return errored;
    metadata([]);
}