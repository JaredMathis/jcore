import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { boolean_value_false } from './value/false.mjs';
import { boolean_value_true } from './value/true.mjs';
import { integer_value_1 } from '../integer/value/1.mjs';
import { equal } from '../equal.mjs';
import { assert } from '../assert.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { defined_is } from '../defined/is.mjs';
export function boolean_is(b) {
    arguments_assert(arguments, [arguments_assert_todo]);
    assert_arguments_count(arguments, integer_value_1());
    let v = defined_is(b);
    assert(v);
    return equal(b, boolean_value_true()) || equal(b, boolean_value_false());
}