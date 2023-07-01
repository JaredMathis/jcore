import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_initialize } from '../../property/initialize.mjs';
import { string_case_snake_to_camel } from '../../../string/case/snake/to/camel.mjs';
import { object_keys_each } from '../each.mjs';
export function object_keys_to_camel(options) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda_map_key = string_case_snake_to_camel;
    let mapped = {};
    object_keys_each(options, function v(value, key) {
        let key_mapped = lambda_map_key(key);
        object_property_initialize(mapped, key_mapped, value);
    });
    return mapped;
}