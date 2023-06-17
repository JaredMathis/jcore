import { task_body_requires } from './body/requires.mjs';
import { task_available } from './available.mjs';
import { list_add_assert_exists_not } from '../list/add/assert/exists/not.mjs';
import { integer_parse } from '../integer/parse.mjs';
import { task_exists } from './exists.mjs';
import { task_body_map_json } from './body/map/json.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
import { function_is } from '../function/is.mjs';
export async function task_requires(task_number_string, task_number_required_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is
    ]);
    await task_requires_generic(task_number_string, task_number_required_string, requires_map)
    function requires_map(requires, task_number_required) {
        list_add_assert_exists_not(requires, task_number_required);
    }
}

async function task_requires_generic(task_number_string, task_number_required_string, requires_map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        string_is,
        function_is
    ]);
    let task_number_required = integer_parse(task_number_required_string);
    assert(await task_exists(task_number_required_string));
    await task_body_map_json(task_number_string, map);
    return await task_available();
    function map(body_parsed) {
        let requires = task_body_requires(body_parsed);
        requires_map(requires, task_number_required);
    }
}