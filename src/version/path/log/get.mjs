import { version_path_sub_get } from '../sub/get.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function version_path_log_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let sub_name = version_path_log_get();
    let repository_sub_path = version_path_sub_get(repository_name, sub_name);
    return repository_sub_path;
}