import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_set } from '../../set.mjs';
import { task_available_first } from '../../available/first.mjs';
import { task_number_get_string } from '../../number/get/string.mjs';
export async function task_set_available_first() {
    arguments_assert(arguments, []);
    let first = await task_available_first();
    let first_number = task_number_get_string(first);
    let v = await task_set(first_number);
    return v;
    metadata([]);
}