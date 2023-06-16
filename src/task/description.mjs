import { task_body_property_description } from './body/property/description.mjs';
import { js_brace_left_right } from '../js/brace/left/right.mjs';
import { null_is } from '../null/is.mjs';
import { task_get } from './get.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { task_body } from './body.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_property_body } from './property/body.mjs';
import { json_from } from '../json/from.mjs';
import { json_to } from '../json/to.mjs';
import { object_property_set } from '../object/property/set.mjs';
import { string_is } from '../string/is.mjs';
export async function task_description(issue_number, description) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    let t = await task_get(issue_number);
    let body_before = object_property_get(t, task_property_body());
    if (null_is(body_before)) {
        body_before = js_brace_left_right();
    }
    let body_parsed = json_from(body_before);
    map(body_parsed);
    let body_after = json_to(body_parsed);
    let result = await task_body(issue_number, body_after);
    return result;

    function map(body_parsed) {
        object_property_set(body_parsed, task_body_property_description(), description);
    }
}