import { list_adder_generic_async } from '../generic/async.mjs';
import { list_add_if_not_exists } from '../../add/if/not/exists.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_adder_unique_async(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_add_if_not_exists;
    return await list_adder_generic_async(then, lambda);
}