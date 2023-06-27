import { string_value_property } from '../../../string/value/property.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_combine } from '../combine.mjs';
export function js_identifier_prefix_property(property_prefix) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = string_value_property();
    let v_2 = js_identifier_combine(property_prefix, v);
    return v_2;
    metadata([]);
}