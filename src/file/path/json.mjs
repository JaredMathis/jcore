import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { file_name_json } from '../name/json.mjs';
import { path_join } from '../../path/join.mjs';
export function file_path_json(tasks_path, file_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = [
        tasks_path,
        file_name_json(file_name)
    ];
    let v = path_join(v_2);
    return v;
    metadata([]);
}