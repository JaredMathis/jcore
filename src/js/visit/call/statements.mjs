import { add_1 } from '../../../add/1.mjs';
import { list_is } from '../../../list/is.mjs';
import { list_find_first_index_starting_at } from '../../../list/find/first/index/starting/at.mjs';
import { list_get } from '../../../list/get.mjs';
import { assert } from '../../../assert.mjs';
import { js_node_is_block_statement } from '../../node/is/block/statement.mjs';
import { js_node_is_program } from '../../node/is/program.mjs';
import { list_reversed_get } from '../../../list/reversed/get.mjs';
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
            let stack_reversed = list_reversed_get(refactor_stack);
            let index_starting_at = 0;
            let list_find_first_after_result = list_find_first_start_at(stack_reversed, index_starting_at);
            let parent_list_next = object_property_get(list_find_first_after_result, 'next');
            let parent_list_index = object_property_get(list_find_first_after_result, 'index');
            if (!js_node_is_program(parent_list_next)) {
                if (js_node_is_variable_declaration(parent_list_next)) {
                    list_find_first_after_result = list_find_first_start_at(stack_reversed, parent_list_index);
                    parent_list_next = object_property_get(list_find_first_after_result, 'next');
                    parent_list_index = object_property_get(list_find_first_after_result, 'index');
                }
                let v_14 = js_node_is_block_statement(parent_list_next);
                assert(v_14);
                let parent_list = list_get(stack_reversed, parent_list_index);
                lambda(parent_list);
            }
            function lambda(parent_list) {
                call_each(stack_reversed, node, expression, parent_list);
            }

            function list_find_first_start_at(stack_reversed, index_starting_at) {
                let index = list_find_first_index_starting_at(stack_reversed, list_is, index_starting_at);
                let index_next = add_1(index);
                let next = list_get(stack_reversed, index_next);
                return {
                    next,
                    index
                };
            }
        }
    });
}