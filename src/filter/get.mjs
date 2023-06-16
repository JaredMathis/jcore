import { task_property_number } from '../task/property/number.mjs';
import { list_find_property_exists } from '../list/find/property/exists.mjs';
import { list_any } from '../list/any.mjs';
import { task_body_property_requires } from '../task/body/property/requires.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
import { json_from } from '../json/from.mjs';
import { null_is } from '../null/is.mjs';
import { task_property_body } from '../task/property/body.mjs';
import { object_property_get } from '../object/property/get.mjs';
export function filter_get(open) {
    return function filter(o) {
        let body = object_property_get(o, task_property_body());
        if (null_is(body)) {
            return true;
        }
        let body_parsed = json_from(body);
        if (object_property_exists(body_parsed, task_body_property_requires())) {
            let requires = object_property_get(body_parsed, task_body_property_requires());
            if (list_any(requires, function v_2(r) {
                    return list_find_property_exists(open, task_property_number(), r);
                })) {
                return false;
            }
        }
        return true;
    };
}