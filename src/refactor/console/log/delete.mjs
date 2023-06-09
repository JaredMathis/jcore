import { js_mapper_args_to_function_name } from '../../../js/mapper/args/to/function/name.mjs';
import { list_reversed_get } from '../../../list/reversed/get.mjs';
import { js_visit_stack_reversed_to_ancestor_list_assert } from '../../../js/visit/stack/reversed/to/ancestor/list/assert.mjs';
import { js_node_is_identifier } from '../../../js/node/is/identifier.mjs';
import { js_node_property_property_get } from '../../../js/node/property/property/get.mjs';
import { js_node_property_object_get } from '../../../js/node/property/object/get.mjs';
import { js_identifier_name_get } from '../../../js/identifier/name/get.mjs';
import { js_node_property_callee_get } from '../../../js/node/property/callee/get.mjs';
import { js_node_is_member_expression } from '../../../js/node/is/member/expression.mjs';
import { js_node_is_call_expression } from '../../../js/node/is/call/expression.mjs';
import { js_node_property_expression_get } from '../../../js/node/property/expression/get.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../../js/visit/nodes/filter.mjs';
import { js_node_is_expression_statement } from '../../../js/node/is/expression/statement.mjs';
import { equal } from '../../../equal.mjs';
import { list_remove } from '../../../list/remove.mjs';
import { function_name_get } from '../../../function/name/get.mjs';
import { log } from '../../../log.mjs';
export function refactor_console_log_delete(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    let function_name = js_mapper_args_to_function_name(args);
    if (equal(function_name, function_name_get(log))) {
        return;
    }
    js_visit_nodes_filter(parsed, js_node_is_expression_statement, function v_2(v) {
        let {node, stack} = v;
        let expression = js_node_property_expression_get(node);
        if (js_node_is_call_expression(expression)) {
            let callee = js_node_property_callee_get(expression);
            if (js_node_is_member_expression(callee)) {
                let object = js_node_property_object_get(callee);
                let property = js_node_property_property_get(callee);
                if (js_node_is_identifier(object)) {
                    if (js_node_is_identifier(property)) {
                        let o_name = js_identifier_name_get(object);
                        let p_name = js_identifier_name_get(property);
                        if (equal(o_name, 'console')) {
                            if (equal(p_name, 'log')) {
                                let stack_reversed = list_reversed_get(stack);
                                let ancestor_list = js_visit_stack_reversed_to_ancestor_list_assert(stack_reversed);
                                list_remove(ancestor_list, node);
                            }
                        }
                    }
                }
            }
        }
    });
}