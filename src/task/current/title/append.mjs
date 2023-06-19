import { task_id_get_string } from '../../id/get/string.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_title_append } from '../../title/append.mjs';
import { string_is } from '../../../string/is.mjs';
export async function task_current_title_append(title_additional) {
    arguments_assert(arguments, [string_is]);
    let task_number_string = await task_id_get_string();
    await task_title_append(task_number_string, title_additional);
    return result;
}