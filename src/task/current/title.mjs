import { task_title } from '../title.mjs';
import { task_id_get_string } from '../id/get/string.mjs';
import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_current_title(title_new) {
    arguments_assert(arguments, [string_is]);
    let task_number_string = await task_id_get_string();
    let result = await task_title(task_number_string, title_new);
    return result;
}