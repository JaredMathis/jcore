import { js_node_property_body_get } from '../../node/property/body/get.mjs';
import { js_node_property_test_get } from '../../node/property/test/get.mjs';
import { js_node_is_do_while_statement } from '../../node/is/do/while/statement.mjs';
import { js_node_property_elements_get } from '../../node/property/elements/get.mjs';
import { js_node_is_array_expression } from '../../node/is/array/expression.mjs';
import { js_node_property_expressions_get } from '../../node/property/expressions/get.mjs';
import { js_node_is_template_literal } from '../../node/is/template/literal.mjs';
import { result_property_data_get } from '../../../result/property/data/get.mjs';
import { list_reversed_get } from '../../../list/reversed/get.mjs';
import { js_visit_stack_reversed_to_ancestor_list } from '../stack/reversed/to/ancestor/list.mjs';
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
import { result_property_success_get } from '../../../result/property/success/get.mjs';
export function js_visit_call_statements(args, call_each) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let parsed = object_property_get(args, 'parsed');
    js_visit_nodes_filter(parsed, function v_18(n) {
        return js_node_is_expression_statement(n) || js_node_is_variable_declaration(n) || js_node_is_return_statement(n) || js_node_is_do_while_statement(n);
    }, function v_19(v) {
        let node = object_property_get(v, 'node');
        let stack = object_property_get(v, 'stack');
        refactor_call_expression_to_assignments(node, stack);
        function refactor_call_expression_to_assignments(expression, refactor_stack) {
            arguments_assert(arguments, [
                js_node_is,
                defined_is
            ]);
            let v_3 = js_node_is_expression_statement(expression);
            if (v_3) {
                let child = js_node_property_expression_get(expression);
                let v_2 = list_copy_shallow_add(refactor_stack, child);
                refactor_call_expression_to_assignments(child, v_2);
                return;
            }
            let v_4 = js_node_is_variable_declaration(expression);
            if (v_4) {
                let declaration = js_declarations_single(expression);
                let init = js_node_property_init_get(declaration);
                let v_5 = null_is(init);
                if (v_5) {
                    return;
                }
                let v_6 = list_copy_shallow_add_multiple(refactor_stack, [
                    declaration,
                    init
                ]);
                refactor_call_expression_to_assignments(init, v_6);
                return;
            }
            let v_7 = js_node_is_assignment_expression(expression);
            if (v_7) {
                let right = js_node_property_right_get(expression);
                let v_8 = list_copy_shallow_add(refactor_stack, right);
                refactor_call_expression_to_assignments(right, v_8);
                return;
            }
            let v_9 = js_node_is_await_expression(expression);
            if (v_9) {
                let argument = js_node_property_argument_get(expression);
                let v_10 = list_copy_shallow_add(refactor_stack, argument);
                refactor_call_expression_to_assignments(argument, v_10);
                return;
            }
            let v_11 = js_node_is_return_statement(expression);
            if (v_11) {
                let argument = js_return_statement_argument_get(expression);
                let v_14 = null_is(argument);
                if (v_14) {
                    return;
                }
                let v_12 = list_copy_shallow_add(refactor_stack, argument);
                let v_13 = refactor_call_expression_to_assignments(argument, v_12);
                return v_13;
            }
            if (js_node_is_template_literal(expression)) {
                let expressions = js_node_property_expressions_get(expression);
                for (let e of expressions) {
                    refactor_call_expression_to_assignments(e, list_copy_shallow_add_multiple(refactor_stack, [
                        expressions,
                        e
                    ]));
                }
                return;
            }
            if (js_node_is_array_expression(expression)) {
                let elements = js_node_property_elements_get(expression);
                for (let e of elements) {
                    refactor_call_expression_to_assignments(e, list_copy_shallow_add_multiple(refactor_stack, [
                        elements,
                        e
                    ]));
                }
                return;
            }
            if (js_node_is_do_while_statement(expression)) {
                let test = js_node_property_test_get(expression);
                let body = js_node_property_body_get(expression);
                for (let e of [test,body]) {
                    refactor_call_expression_to_assignments(e, list_copy_shallow_add_multiple(refactor_stack, [
                        expression,
                        e
                    ]))
                }
                return;
            }
            if (js_node_is_for_of_statement(expression)) {
                let test = js_node_property_test_get(expression);
                let body = js_node_property_body_get(expression);
                for (let e of [test,body]) {
                    refactor_call_expression_to_assignments(e, list_copy_shallow_add_multiple(refactor_stack, [
                        expression,
                        e
                    ]))
                }
                return;
            }
            let v_15 = not(js_node_is_call_expression(expression));
            if (v_15) {
                return;
            }
            let stack_reversed = list_reversed_get(refactor_stack);
            let r = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
            let v_16 = result_property_success_get(r);
            if (v_16) {
                let ancestor_list = result_property_data_get(r);
                call_each(stack_reversed, node, expression, ancestor_list);
            }
        }
    });
}