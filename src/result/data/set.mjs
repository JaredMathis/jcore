import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_merge } from '../../object/merge.mjs';
export function result_data_set(result, data) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    object_merge({ data }, result);
    return result;
}