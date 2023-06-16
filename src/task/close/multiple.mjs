import { string_split_comma } from '../../string/split/comma.mjs';
import { task_close } from '../close.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../../string/is.mjs';
export async function task_close_multiple(task_number_list) {
    arguments_assert(arguments, [string_is]);
    let task_numbers = string_split_comma(task_number_list);
    for (let task_number of task_numbers) {
        await task_close(task_number);
    }
}