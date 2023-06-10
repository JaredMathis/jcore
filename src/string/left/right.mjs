import { string_take } from '../take.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_left_right_property_right } from './right/property/right.mjs';
import { string_left_right_property_left } from './right/property/left.mjs';
import { string_skip } from '../skip.mjs';
export function string_left_right(s, index, offset) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let left = string_take(s, index);
    let right = string_skip(s, index + offset);
    return {
        [string_left_right_property_left()]: left,
        [string_left_right_property_right()]: right
    };
}