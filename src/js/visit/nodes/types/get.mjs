import { list_adder_unique } from '../../../../list/adder/unique.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_property_type_get } from '../../../node/property/type/get.mjs';
import { js_visit_nodes_all } from '../all.mjs';
export function js_visit_nodes_types_get(parsed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let types = list_adder_unique(function v_2(list_then_add) {
        js_visit_nodes_all(parsed, function v_3(v) {
            let {node} = v;
            let type = js_node_property_type_get(node);
            list_then_add(type);
        });
    });
    return types;
}