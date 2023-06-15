import { equal } from '../equal.mjs';
import { metadata } from '../metadata.mjs';
import { task_id_get_or_null } from './id/get/or/null.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_current() {
    arguments_assert(arguments, []);
    let task_number_hashed = await task_id_get_or_null();
    if (equal(task_number_hashed, null)) {
        return 'no current task';
    }
    return task_number_hashed;
    metadata([]);
}