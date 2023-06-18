import { task_number_get_string } from '../number/get/string.mjs';
import { task_unrequires } from '../unrequires.mjs';
import { task_unsub_preview } from '../unsub/preview.mjs';
import { task_current } from '../current.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_sub_undo() {
    arguments_assert(arguments, []);
    let current = await task_current();
    let previous = await task_unsub_preview();
    await task_unrequires(task_number_get_string(current), task_number_get_string(previous));
}