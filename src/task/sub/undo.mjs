import { task_set } from '../set.mjs';
import { task_number_get_string } from '../number/get/string.mjs';
import { task_unrequires } from '../unrequires.mjs';
import { task_unsub_preview } from '../unsub/preview.mjs';
import { task_current } from '../current.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_sub_undo() {
    arguments_assert(arguments, []);
    let current = await task_current();
    let previous = await task_unsub_preview();
    const current_number = task_number_get_string(current);
    const previous_number = task_number_get_string(previous);
    await task_unrequires(current_number, previous_number);
    await task_set(previous_number);
}