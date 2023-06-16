import { task_body_requires } from './body/requires.mjs';
import { string_comma } from '../string/comma.mjs';
import { string_add } from '../string/add.mjs';
import { js_code_parenthesis_surround } from '../js/code/parenthesis/surround.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_property_title } from './property/title.mjs';
import { task_property_number } from './property/number.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { list_join } from '../list/join.mjs';
export function task_summary(task) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let body = object_property_get(o, task_property_body());
    if (null_not_is(body)) {
        let body_parsed = json_from(body);
        let requires = task_body_requires(body_parsed);
    }
    return `${ object_property_get(task, task_property_number()) } ${ js_code_parenthesis_surround(string_add(`requires: `, list_join(requires, string_comma()))) } ${ object_property_get(task, task_property_title()) }`;
}