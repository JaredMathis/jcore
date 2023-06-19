import { js_node_assign_and_replace } from '../../../../js/node/assign/and/replace.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_visit_call_statements } from '../../../../js/visit/call/statements.mjs';
import { occurs_while } from '../../../../occurs/while.mjs';
import { js_node_is_return_statement } from '../../../../js/node/is/return/statement.mjs';
import { js_node_property_arguments_get } from '../../../../js/node/property/arguments/get.mjs';
import { list_get } from '../../../../list/get.mjs';
import { js_node_is_call_expression } from '../../../../js/node/is/call/expression.mjs';
import { js_node_is_await_expression } from '../../../../js/node/is/await/expression.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function refactor_call_arguments_to_assignments(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = object_property_get(args, 'parsed');
    occurs_while(function v_17(c) {
        js_visit_call_statements(args, call_each);
        function call_each(stack_reversed, node, expression, ancestor_list) {
            let args = js_node_property_arguments_get(expression);
            for (let arg of args) {
                if (js_node_is_call_expression(arg) || js_node_is_await_expression(arg)) {
                    replace(arg);
                }
            }
            if (js_node_is_return_statement(node)) {
                let expression_parent = list_get(stack_reversed, 1);
                if (js_node_is_await_expression(expression_parent)) {
                    replace(expression_parent);
                } else {
                    replace(expression);
                }
            }
            function replace(arg) {
                js_node_assign_and_replace(parsed, arg, ancestor_list, node);
                c();
            }
        }
    });
}