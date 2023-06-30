import { metadata } from '../../metadata.mjs';
import { task_open } from '../open.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_id_get_string } from '../id/get/string.mjs';
export async function task_current_open() {
    arguments_assert(arguments, []);
    let task_number_string = await task_id_get_string();
    let result = await task_open(task_number_string);
    return result;
    metadata([]);
}