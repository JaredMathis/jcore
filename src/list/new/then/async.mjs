import { list_new_then_generic_async } from './generic/async.mjs';
import { list_add } from '../../add.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function list_new_then_async(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_add;
    return await list_new_then_generic_async(then, lambda);
}