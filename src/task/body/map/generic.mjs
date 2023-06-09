import { function_is } from '../../../function/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { task_body } from '../../body.mjs';
import { task_property_body } from '../../property/body.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { task_get } from '../../get.mjs';
export async function task_body_map_generic(issue_number, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let task = await task_get(issue_number);
    let v = task_property_body();
    let task_body_value = object_property_get(task, v);
    let body_after = map(task_body_value);
    let result = await task_body(issue_number, body_after);
    return result;
    metadata([]);
}