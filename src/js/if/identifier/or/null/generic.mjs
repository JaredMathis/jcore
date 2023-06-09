import { function_is } from '../../../../../function/is.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { not } from '../../../../../not.mjs';
import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function js_if_identifier_or_null_generic(node, property_name, or_null, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        function_is
    ]);
    let property = object_property_get(node, property_name);
    if (or_null) {
        let v_3 = js_node_is_identifier(property);
        let v_2 = not(v_3);
        if (v_2) {
            return null;
        }
    }
    let v = lambda(property);
    return v;
    metadata([]);
}