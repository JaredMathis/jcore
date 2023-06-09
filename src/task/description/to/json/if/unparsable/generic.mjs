import { metadata } from '../../../../../../metadata.mjs';
import { lambda_get } from '../../../../../../lambda/get.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { task_description } from '../../../../../description.mjs';
import { task_body_map_generic } from '../../../../../body/map/generic.mjs';
import { log } from '../../../../../../log.mjs';
import { string_to } from '../../../../../../string/to.mjs';
import { task_property_number } from '../../../../../property/number.mjs';
import { json_invalid } from '../../../../../../json/invalid.mjs';
import { null_not_is } from '../../../../../../null/not/is.mjs';
import { task_property_body } from '../../../../../property/body.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { list_adder_async } from '../../../../../../list/adder/async.mjs';
export async function task_description_to_json_if_unparsable_generic(open) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_7 = async function v_4(list_add_then) {
        for (let task of open) {
            let v = task_property_body();
            let task_body_value = object_property_get(task, v);
            let v_5 = null_not_is(task_body_value);
            if (v_5) {
                let v_6 = json_invalid(task_body_value);
                if (v_6) {
                    let v_2 = task_property_number();
                    let t_number = object_property_get(task, v_2);
                    let t_number_string = string_to(t_number);
                    let v_8 = { task };
                    log(v_8);
                    let v_9 = null;
                    let v_3 = lambda_get(v_9);
                    await task_body_map_generic(t_number_string, v_3);
                    await task_description(t_number_string, task_body_value);
                    list_add_then(t_number);
                }
            }
        }
    };
    let result = await list_adder_async(v_7);
    return result;
    metadata([]);
}