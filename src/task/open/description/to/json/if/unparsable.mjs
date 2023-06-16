import { task_open_description_to_json_if_unparsable_generic } from './unparsable/generic.mjs';
import { task_open_get } from '../../../../get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function task_open_description_to_json_if_unparsable() {
    arguments_assert(arguments, []);
    let open = await task_open_get();
    return await task_open_description_to_json_if_unparsable_generic(open);
}