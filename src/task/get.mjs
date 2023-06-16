import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_find_property } from '../list/find/property.mjs';
import { task_property_number } from './property/number.mjs';
import { task_all } from './all.mjs';
import { integer_parse } from '../integer/parse.mjs';
export async function task_get(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_find_property;
    let task_number = integer_parse(task_number_string);
    let all = await task_all();
    const property_name = task_property_number();
    let result = lambda(all, property_name, task_number);
    return result;
}