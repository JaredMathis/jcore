import { metadata } from '../../../../../metadata.mjs';
import { file_path_json } from '../../../../../file/path/json.mjs';
import { version_path_tasks_get } from '../../get.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_identifier_combine } from '../../../../../js/identifier/combine.mjs';
import { string_to } from '../../../../../string/to.mjs';
export function version_path_tasks_all_2_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let tasks_path = version_path_tasks_get(repository_name);
    let v_2 = js_identifier_combine('all', string_to(2));
    let v = file_path_json(tasks_path, v_2);
    return v;
    metadata([]);
}