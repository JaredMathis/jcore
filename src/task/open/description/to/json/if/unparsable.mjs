import { task_open_get } from '../../../../get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function task_open_description_to_json_if_unparsable() {
    arguments_assert(arguments, []);
    let result = await task_open_get();
    return result;
}