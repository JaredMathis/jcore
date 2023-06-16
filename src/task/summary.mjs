import { task_requires_get } from './requires/get.mjs';
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
    let requires = task_requires_get(task);
    return `${ object_property_get(task, task_property_number()) } ${ js_code_parenthesis_surround(string_add(`requires: `, list_join(requires, string_comma()))) } ${ object_property_get(task, task_property_title()) }`;
}