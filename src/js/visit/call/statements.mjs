import { js_visit_stack_to_ancestor_list } from '../stack/to/ancestor/list.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { js_node_is_call_expression } from '../../node/is/call/expression.mjs';
import { not } from '../../../not.mjs';
import { js_return_statement_argument_get } from '../../return/statement/argument/get.mjs';
import { js_node_property_argument_get } from '../../node/property/argument/get.mjs';
import { js_node_is_await_expression } from '../../node/is/await/expression.mjs';
import { js_node_property_right_get } from '../../node/property/right/get.mjs';
import { js_node_is_assignment_expression } from '../../node/is/assignment/expression.mjs';
import { list_copy_shallow_add_multiple } from '../../../list/copy/shallow/add/multiple.mjs';
import { null_is } from '../../../null/is.mjs';
import { js_node_property_init_get } from '../../node/property/init/get.mjs';
import { js_declarations_single } from '../../declarations/single.mjs';
import { list_copy_shallow_add } from '../../../list/copy/shallow/add.mjs';
import { js_node_property_expression_get } from '../../node/property/expression/get.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { js_node_is } from '../../node/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_node_is_return_statement } from '../../node/is/return/statement.mjs';
import { js_node_is_variable_declaration } from '../../node/is/variable/declaration.mjs';
import { js_node_is_expression_statement } from '../../node/is/expression/statement.mjs';
import { js_visit_nodes_filter } from '../nodes/filter.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_visit_call_statements(args, call_each) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let parsed = object_property_get(args, 'parsed');
    js_visit_nodes_filter(parsed, function v_18(n) {
        return js_node_is_expression_statement(n) || js_node_is_variable_declaration(n) || js_node_is_return_statement(n);
    }, function v_19(v) {
        let node = object_property_get(v, 'node');
        let stack = object_property_get(v, 'stack');
        refactor_call_expression_to_assignments(node, stack);
        function refactor_call_expression_to_assignments(expression, refactor_stack) {
            arguments_assert(arguments, [
                js_node_is,
                defined_is
            ]);
            if (js_node_is_expression_statement(expression)) {
                let child = js_node_property_expression_get(expression);
                let v_2 = list_copy_shallow_add(refactor_stack, child);
                refactor_call_expression_to_assignments(child, v_2);
                return;
            }
            if (js_node_is_variable_declaration(expression)) {
                let declaration = js_declarations_single(expression);
                let init = js_node_property_init_get(declaration);
                if (null_is(init)) {
                    return;
                }
                let v_6 = list_copy_shallow_add_multiple(refactor_stack, [
                    declaration,
                    init
                ]);
                refactor_call_expression_to_assignments(init, v_6);
                return;
            }
            if (js_node_is_assignment_expression(expression)) {
                let right = js_node_property_right_get(expression);
                let v_8 = list_copy_shallow_add(refactor_stack, right);
                refactor_call_expression_to_assignments(right, v_8);
                return;
            }
            if (js_node_is_await_expression(expression)) {
                let argument = js_node_property_argument_get(expression);
                let v_10 = list_copy_shallow_add(refactor_stack, argument);
                refactor_call_expression_to_assignments(argument, v_10);
                return;
            }
            if (js_node_is_return_statement(expression)) {
                let argument = js_return_statement_argument_get(expression);
                if (null_is(argument)) {
                    return;
                }
                let v_12 = list_copy_shallow_add(refactor_stack, argument);
                let v_13 = refactor_call_expression_to_assignments(argument, v_12);
                return v_13;
            }
            if (not(js_node_is_call_expression(expression))) {
                return;
            }
            function lambda(ancestor_list) {
                call_each(stack_reversed, node, expression, ancestor_list);
            }
            let stack_reversed = list_reversed_get(refactor_stack);
            js_visit_stack_to_ancestor_list(refactor_stack, lambda);
        }
    });
}