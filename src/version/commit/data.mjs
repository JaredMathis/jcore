import { list_to } from '../../list/to.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_name_get } from '../../function/name/get.mjs';
export function version_commit_data(fn, args) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    return {
        command: function_name_get(fn),
        args: list_to(args)
    };
}