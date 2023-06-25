import { arguments_assert_todo } from '../todo.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_predicate_default() {
    let v = [];
    arguments_assert(arguments, v);
    return arguments_assert_todo;
}