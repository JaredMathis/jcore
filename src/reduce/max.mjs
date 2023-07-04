import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { reduce_generic } from './generic.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function reduce_max(intialize, each_inner, then) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = reduce_generic(intialize, each_inner, then);
    return result;
}