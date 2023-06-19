import { task_open } from '../open.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_current_open() {
    arguments_assert(arguments, []);
    let result = await task_open(task_number_string);
    return result;
}