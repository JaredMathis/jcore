import { list_adder_async } from '../../adder/async.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_each_with_index_async } from '../../each/with/index/async.mjs';
export async function list_map_generic_async(list, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await list_adder_async(async la => {
        await list_each_with_index_async(list, async (element, index) => {
            let mapped = await lambda(element, index);
            la(result, mapped);
        });
    });
    return result;
}