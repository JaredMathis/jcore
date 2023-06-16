import { object_property_get } from '../object/property/get.mjs';
import { task_body_property_requires } from './body/property/requires.mjs';
import { object_property_initialize_if_unset } from '../object/property/initialize/if/unset.mjs';
import { task_exists } from './exists.mjs';
import { task_body_map } from './body/map.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
export async function task_requires(task_number, task_number_required) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    assert(await task_exists(task_number_required));
    let result = await task_body_map(task_number, map);
    return result;
    function map(body_parsed) {
        object_property_initialize_if_unset(body_parsed, task_body_property_requires(), []);
        let requires = object_property_get(body_parsed, task_body_property_requires());
    }
}