import { json_invalid } from '../../../../../../json/invalid.mjs';
import { string_to } from '../../../../../../string/to.mjs';
import { list_new_then_async } from '../../../../../../list/new/then/async.mjs';
import { task_description } from '../../../../../description.mjs';
import { task_property_body } from '../../../../../property/body.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { task_open_get } from '../../../../get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { task_property_number } from '../../../../../property/number.mjs';
import { null_not_is } from '../../../../../../null/not/is.mjs';
export async function task_open_description_to_json_if_unparsable() {
    arguments_assert(arguments, []);
    let open = await task_open_get();
    let result = await list_new_then_async(async list_add_then => {
        for (let t of open) {
            let task_body_value = object_property_get(t, task_property_body());
            if (null_not_is(task_body_value)) {
                if (json_invalid(task_body_value)) {
                    let t_number = object_property_get(t, task_property_number());
                    let t_number_string = string_to(t_number);
                    await task_description(t_number_string, task_body_value);
                    list_add_then(t_number);
                }
            }
        }
    });
    return result;
}