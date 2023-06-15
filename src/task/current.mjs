import { equal } from '../equal.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_get_or_null } from './id/get/or/null.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_all } from './all.mjs';
export async function task_current() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get_or_null();
    if (equal(task_number_hashed, null)) {
        return 'no current task';
    }
    let task_number_string = task_id_unhash(task_number_hashed);
    let all = await task_all();
    metadata([]);
}