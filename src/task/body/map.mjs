import { json_invalid } from '../../json/invalid.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_body } from '../body.mjs';
import { json_map_empty_if_null } from '../../json/map/empty/if/null.mjs';
import { task_property_body } from '../property/body.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { task_get } from '../get.mjs';
import { string_is } from '../../string/is.mjs';
export async function task_body_map(issue_number, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    
    let t = await task_get(issue_number);
    let task_body_value = object_property_get(t, task_property_body());
    if (string_is(task_body_value)) {
        if (json_invalid(task_body_value)) {
            await file_json_write(tasks_all_path, mapped);
        }
    }
    let body_after = json_map_empty_if_null(task_body_value, map);
    let result = await task_body(issue_number, body_after);
    return result;
}