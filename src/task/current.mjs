import { metadata } from '../metadata.mjs';
import { task_id_get } from './id/get.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_current() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get();
    return task_number_hashed;
    metadata([]);
}