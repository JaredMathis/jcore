import { list_add_if_not_exists } from '../add/if/not/exists.mjs';
import { list_adder_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_adder_unique(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_add_if_not_exists;
    return list_adder_generic(then, lambda);
}