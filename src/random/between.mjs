import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { add } from '../add.mjs';
import { multiply } from '../multiply.mjs';
import { subtract } from '../subtract.mjs';
import { less_than } from '../less/than.mjs';
import { integer_value_1 } from '../integer/value/1.mjs';
import { random_get } from './get.mjs';
import { number_floor } from '../number/floor.mjs';
import { assert } from '../assert.mjs';
export function random_between(lower, upper) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = less_than(lower, upper);
    assert(v);
    let v_2 = subtract(upper, lower);
    let v_3 = integer_value_1();
    let difference = add(v_2, v_3);
    let v_7 = random_get();
    let v_6 = multiply(difference, v_7);
    let v_4 = number_floor(v_6);
    let v_5 = add(v_4, lower);
    return v_5;
    metadata([]);
}