import { task_id_get_or_null } from '../id/get/or/null.mjs';
import { task_open } from '../open.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_current_open() {
    arguments_assert(arguments, []);
    let current = await task_id_get_or_null();
    let result = await task_open(task_number_string);
    return result;
    metadata([]);
}