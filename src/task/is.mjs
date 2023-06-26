import { metadata } from '../metadata.mjs';
import { list_all } from '../list/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
import { task_properties } from './properties.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
export function task_is(t) {
    arguments_assert(arguments, [defined_is]);
    let v = task_properties();
    let v_4 = function v_3(p) {
        let value = object_property_exists(t, p);
        return value;
    };
    let v_2 = list_all(v, v_4);
    return v_2;
    metadata([]);
}