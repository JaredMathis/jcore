import { string_split_comma } from '../../string/split/comma.mjs';
import { task_close } from '../close.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function task_close_multiple(task_number_list) {
    arguments_assert(arguments, []);
    let parts = string_split_comma(task_number_list);
    task_close(task_number);
}