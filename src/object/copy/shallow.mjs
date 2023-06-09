import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_initialize } from '../property/initialize.mjs';
import { object_property_get } from '../property/get.mjs';
import { object_keys } from '../keys.mjs';
export function object_copy_shallow(f) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = {};
    for (let key of object_keys(f)) {
        let value = object_property_get(f, key);
        object_property_initialize(result, key, value);
    }
    return result;
    metadata([]);
}