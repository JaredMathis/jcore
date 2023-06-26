import { metadata } from '../../metadata.mjs';
import { list_adder_generic_async } from './generic/async.mjs';
import { list_add } from '../add.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function list_adder_async(then) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_add;
    let v = await list_adder_generic_async(then, lambda);
    return v;
    metadata([]);
}