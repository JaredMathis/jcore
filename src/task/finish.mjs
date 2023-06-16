import { task_id_unhash } from './id/unhash.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_remove } from './id/remove.mjs';
import { task_id_get_or_null } from './id/get/or/null.mjs';
import { task_close } from './close.mjs';
import { task_open } from './open.mjs';
export async function task_finish() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get_or_null();
    let task_number_string = task_id_unhash(task_number_hashed);
    await task_close(task_number_string);
    await task_id_remove();
    return task_open();
    metadata([]);
}