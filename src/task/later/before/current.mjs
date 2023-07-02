import { task_available } from '../../available.mjs';
import { task_unset } from '../../unset.mjs';
import { metadata } from '../../../metadata.mjs';
import { task_id_get_string } from '../../id/get/string.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { task_later_before } from '../before.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function task_later_before_current(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task_number_string = await task_id_get_string();
    let result = await task_later_before(task_number_string, title);
    await task_unset();
    let v = await task_available();
    return result;
    metadata([]);
}