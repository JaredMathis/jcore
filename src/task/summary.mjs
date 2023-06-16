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
import { list_add } from '../list/add.mjs';
export function task_summary(task) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let requires = task_requires_get(task);
    let strings = [];
    const task_number = object_property_get(task, task_property_number());
    list_add(strings, task_number);
    const requires_string = js_code_parenthesis_surround(string_add(`requires: `, list_join(requires, string_comma())));
    list_add(strings, requires_string);
    const title = object_property_get(task, task_property_title());
    list_add(strings, title);
    return list_join(strings, ' ');
}