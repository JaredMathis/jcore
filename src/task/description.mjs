import { metadata } from '../metadata.mjs';
import { task_body_map_json } from './body/map/json.mjs';
import { task_body_property_description } from './body/property/description.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { string_is } from '../string/is.mjs';
export async function task_description(issue_number, description) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    let result = await task_body_map_json(issue_number, map);
    return result;
    function map(body_parsed) {
        let v = task_body_property_description();
        object_property_set(body_parsed, v, description);
    }
    metadata([]);
}