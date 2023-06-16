import { task_description } from '../../../../../../description.mjs';
import { task_body_map_generic } from '../../../../../../body/map/generic.mjs';
import { log } from '../../../../../../../log.mjs';
import { string_to } from '../../../../../../../string/to.mjs';
import { task_property_number } from '../../../../../../property/number.mjs';
import { json_invalid } from '../../../../../../../json/invalid.mjs';
import { null_not_is } from '../../../../../../../null/not/is.mjs';
import { task_property_body } from '../../../../../../property/body.mjs';
import { object_property_get } from '../../../../../../../object/property/get.mjs';
import { list_new_then_async } from '../../../../../../../list/new/then/async.mjs';
export async function task_open_description_to_json_if_unparsable_generic(open) {
    let result = await list_new_then_async(async list_add_then => {
        for (let task of open) {
            let task_body_value = object_property_get(task, task_property_body());
            if (null_not_is(task_body_value)) {
                if (json_invalid(task_body_value)) {
                    let t_number = object_property_get(task, task_property_number());
                    let t_number_string = string_to(t_number);
                    console.log({ task });
                    await task_body_map_generic(t_number_string, current => null);
                    await task_description(t_number_string, task_body_value);
                    list_add_then(t_number);
                }
            }
        }
    });
    return result;
}