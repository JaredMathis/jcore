import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_node_is_object_pattern(node) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return object_property_get(node, 'ObjectPattern');
}