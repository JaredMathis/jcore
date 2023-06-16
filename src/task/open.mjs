import { task_open_get } from './open/get.mjs';
import { list_find_property_exists } from '../list/find/property/exists.mjs';
import { list_any } from '../list/any.mjs';
import { task_body_property_requires } from './body/property/requires.mjs';
import { task_property_body } from './property/body.mjs';
import { null_is } from '../null/is.mjs';
import { list_sort_property } from '../list/sort/property.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_map } from '../list/map.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_property_number } from './property/number.mjs';
import { task_property_title } from './property/title.mjs';
import { list_filter } from '../list/filter.mjs';
import { json_from } from '../json/from.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
export async function task_open() {
    arguments_assert(arguments, []);
    let open = await task_open_get();
    let filtered = list_filter(open, filter);
    list_sort_property(filtered, task_property_number());
    let summaries = list_map(filtered, function v_3(o) {
        return `${ object_property_get(o, task_property_number()) } ${ object_property_get(o, task_property_title()) }`;
    });
    return summaries;
    function filter(o) {
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
    }
}