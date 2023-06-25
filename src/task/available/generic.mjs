import { arguments_assert } from '../../arguments/assert.mjs';
import { task_property_number } from '../property/number.mjs';
import { list_find_property_exists } from '../../list/find/property/exists.mjs';
import { list_any } from '../../list/any.mjs';
import { task_body_property_requires } from '../body/property/requires.mjs';
import { object_property_exists } from '../../object/property/exists.mjs';
import { json_from } from '../../json/from.mjs';
import { task_property_body } from '../property/body.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { tasks_open_generic } from '../../tasks/open/generic.mjs';
import { null_not_is } from '../../null/not/is.mjs';
import { function_is } from '../../function/is.mjs';
export async function task_available_generic(map_with_all_unsummarized) {
    arguments_assert(arguments, [function_is]);
    let v = await tasks_open_generic(filter_get, map_with_all_unsummarized);
    return v;
    function filter_get(open) {
        return function filter(o) {
            let v_3 = task_property_body();
            let body = object_property_get(o, v_3);
            let v_7 = null_not_is(body);
            if (v_7) {
                let body_parsed = json_from(body);
                let v_8 = object_property_exists(body_parsed, task_body_property_requires());
                if (v_8) {
                    let v_4 = task_body_property_requires();
                    let requires = object_property_get(body_parsed, v_4);
                    let v_9 = list_any(requires, function v_2(r) {
                        let v_5 = task_property_number();
                        let v_6 = list_find_property_exists(open, v_5, r);
                        return v_6;
                    });
                    if (v_9) {
                        return false;
                    }
                }
            }
            return true;
        };
    }
}