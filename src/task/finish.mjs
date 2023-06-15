import { string_prefix_without } from '../string/prefix/without.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_remove } from './id/remove.mjs';
import { task_id_get } from './id/get.mjs';
import { task_close } from './close.mjs';
export async function task_finish() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get();
    let task_number = string_prefix_without(task_number_hashed, '#');
    await task_close(task_number);
    await task_id_remove();
    metadata([]);
}