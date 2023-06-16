import { list_new_then_async } from '../../../../../../list/new/then/async.mjs';
import { task_description } from '../../../../../description.mjs';
import { throws } from '../../../../../../throws.mjs';
import { task_property_body } from '../../../../../property/body.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { task_open_get } from '../../../../get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { json_to } from '../../../../../../json/to.mjs';
import { task_property_number } from '../../../../../property/number.mjs';
export async function task_open_description_to_json_if_unparsable() {
    arguments_assert(arguments, []);
    let open = await task_open_get();
    let result = await list_new_then_async(async list_add_then => {
        for (let t of open) {
            let task_body_value = object_property_get(t, task_property_body());
            if (throws(() => json_to(task_body_value))) {
                await task_description(t, task_body_value);
                list_add_then(object_property_get(t, task_property_number()));
            }
        }
    });
    return result;
}