import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_name_get } from '../function/name/get.mjs';
import { file_json_write } from '../file/json/write.mjs';
import { version_path_log_now_get } from './path/log/now/get.mjs';
export async function version_log(repository_name, fn, args, message, data) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let log_path = version_path_log_now_get(repository_name);
    let v_2 = function_name_get(fn);
    let v = {
        function_name: v_2,
        arguments: args,
        message: message,
        data: data
    };
    await file_json_write(log_path, v);
    metadata([]);
}