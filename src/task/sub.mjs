import { result_data_get } from '../result/data/get.mjs';
import { task_number_get_string } from './number/get/string.mjs';
import { task_current } from './current.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { task_add } from './add.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_requires } from './requires.mjs';
import { assert } from '../assert.mjs';
import { result_property_success } from '../result/property/success.mjs';
export async function task_sub(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let current_result = await task_current();
    assert(result_property_success())
    let current = result_data_get(current_result);
    let current_number_string = task_number_get_string(current);
    let sub = await task_add(title);
    let sub_number_string = task_number_get_string(sub);
    await task_requires(current_number_string, sub_number_string);
    return sub;
}