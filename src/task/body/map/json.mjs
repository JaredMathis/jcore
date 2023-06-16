import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_body } from '../../body.mjs';
import { json_map_empty_if_null } from '../../../json/map/empty/if/null.mjs';
import { task_property_body } from '../../property/body.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { task_get } from '../../get.mjs';
export async function task_body_map_json(issue_number, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let lambda = json_map_empty_if_null;
    let task = await task_get(issue_number);
    let task_body_value = object_property_get(task, task_property_body());
    let body_after = lambda(task_body_value, map);
    let result = await task_body(issue_number, body_after);
    return result;
}