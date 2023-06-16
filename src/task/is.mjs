import { list_all } from '../list/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
import { task_properties } from './properties.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
export function task_is(t) {
    arguments_assert(arguments, [defined_is]);
    return list_all(task_properties(), p => {
        let value = object_property_exists(t, p);
        return value;
    });
}