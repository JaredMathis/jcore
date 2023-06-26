import { task_number_unhash } from '../../number/unhash.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_to } from '../../../string/to.mjs';
import { task_id_get } from '../get.mjs';
export async function task_id_get_string() {
    arguments_assert(arguments, []);
    let task_number = await task_id_get();
    let task_number_string_hashed = string_to(task_number);
    let task_number_string = task_number_unhash(task_number_string_hashed);
    return task_number_string;
    metadata([]);
}