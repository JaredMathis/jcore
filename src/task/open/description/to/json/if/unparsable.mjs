import { task_property_body } from '../../../../../property/body.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { task_open_get } from '../../../../get.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { json_to } from '../../../../../../json/to.mjs';
export async function task_open_description_to_json_if_unparsable() {
    arguments_assert(arguments, []);
    let open = await task_open_get();
    for (let t of open) {
        let task_body_value = object_property_get(t, task_property_body());
        try {
            json_to(body);
        } catch (e) {
        }
    }
    return open;
}