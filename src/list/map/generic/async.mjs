import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add } from '../../add.mjs';
import { list_each_with_index_async } from '../../each/with/index/async.mjs';
export async function list_map_generic_async(list, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = [];
    await list_each_with_index_async(list, async (element, index) => {
        let mapped = await lambda(element, index);
        list_add(result, mapped);
    });
    return result;
}