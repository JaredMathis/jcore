import { list_add_assert_exists_not } from '../list/add/assert/exists/not.mjs';
import { integer_parse } from '../integer/parse.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_body_property_requires } from './body/property/requires.mjs';
import { object_property_initialize_if_unset } from '../object/property/initialize/if/unset.mjs';
import { task_exists } from './exists.mjs';
import { task_body_map_json } from './body/map/json.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
export async function task_requires(task_number_string, task_number_required_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    assert(await task_exists(task_number_required_string));
    await task_body_map_json(task_number_string, map);
    return await tasks_available();
    function map(body_parsed) {
        object_property_initialize_if_unset(body_parsed, task_body_property_requires(), []);
        let requires = object_property_get(body_parsed, task_body_property_requires());
        let task_number_required = integer_parse(task_number_required_string);
        list_add_assert_exists_not(requires, task_number_required);
    }
}