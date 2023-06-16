import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { list_adder } from '../adder.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_adder_unique(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = list_adder(then);
    return result;
}