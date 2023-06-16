import { task_body_map_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { json_map_empty_if_null } from '../../../json/map/empty/if/null.mjs';
export async function task_body_map_json(issue_number, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let lambda = task_body_value => json_map_empty_if_null(task_body_value, map);
    let result = await task_body_map_generic(issue_number, lambda);
    return result;
}