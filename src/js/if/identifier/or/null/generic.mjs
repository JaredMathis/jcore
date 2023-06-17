import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function js_if_identifier_or_null_generic(node, property_name, or_null, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let property = object_property_get(node, property_name);
    if (or_null) {
        if (!(js_node_is_identifier(property))) {
            return null;
        }
    }
    return lambda(property);
}