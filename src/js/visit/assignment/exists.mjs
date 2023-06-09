import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_node_is_assignment_expression } from '../../node/is/assignment/expression.mjs';
import { equal } from '../../../equal.mjs';
import { js_node_property_name_get } from '../../node/property/name/get.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { js_node_property_left_get } from '../../node/property/left/get.mjs';
import { occurs } from '../../../occurs.mjs';
import { js_nodes_each } from '../../nodes/each.mjs';
export function js_visit_assignment_exists(parsed, identifier_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    return occurs(function v_3(o) {
        let v_26 = function v_9(node) {
            let left = js_node_property_left_get(node);
            let v_15 = js_node_is_identifier(left);
            if (v_15) {
                let v_29 = js_node_property_name_get(left);
                let v_16 = equal(v_29, identifier_name);
                if (v_16) {
                    o();
                }
            }
        };
        js_nodes_each(parsed, js_node_is_assignment_expression, v_26);
    });
}