import { task_get } from './get.mjs';
import { task_number_unhash } from './number/unhash.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_unset } from './unset.mjs';
import { task_id_get_or_null } from './id/get/or/null.mjs';
import { task_close } from './close.mjs';
import { task_available } from './available.mjs';
export async function task_finish() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get_or_null();
    let task_number_string = task_number_unhash(task_number_hashed);
    let task = await task_get(task_number_string);
    await task_close(task_number_string);
    await task_unset();
    let v = await task_available();
    return v;
    metadata([]);
}