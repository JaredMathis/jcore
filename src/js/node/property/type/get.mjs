import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_property_type } from '../type.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_node_property_type_get(node) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = js_node_property_type();
    let v_2 = object_property_get(node, v);
    return v_2;
    metadata([]);
}