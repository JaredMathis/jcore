import { task_id_get_string } from './id/get/string.mjs';
import { task_close_try } from './close/try.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_unset } from './unset.mjs';
import { task_available } from './available.mjs';
export async function task_finish() {
    arguments_assert(arguments, []);
    let task_number_string = await task_id_get_string();
    await task_close_try(task_number_string);
    await task_unset();
    let v = await task_available();
    return v;
    metadata([]);
}