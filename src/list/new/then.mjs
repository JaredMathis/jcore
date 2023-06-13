import { list_new_then_generic } from './then/generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { list_add } from '../add.mjs';
export function list_new_then(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_add;
    return list_new_then_generic(then, lambda);
}