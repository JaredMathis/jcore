import { task_set } from '../../set.mjs';
import { task_property_number_get } from '../../property/number/get.mjs';
import { task_available_first } from '../../available/first.mjs';
import { task_unset } from '../../unset.mjs';
import { metadata } from '../../../metadata.mjs';
import { task_id_get_string } from '../../id/get/string.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { task_later_before } from '../before.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_to } from '../../../string/to.mjs';
export async function task_later_before_current(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task_number_string = await task_id_get_string();
    let result = await task_later_before(task_number_string, title);
    await task_unset();
    let taf = await task_available_first();
    let taf_number = task_property_number_get(taf);
    let taf_number_string = string_to(taf_number);
    return await task_set(taf_number_string);
    metadata([]);
}