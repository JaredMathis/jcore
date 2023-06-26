import { js_node_is } from '../../../../js/node/is.mjs';
import { log } from '../../../../log.mjs';
import { refactor_call_arguments_to_assignments_skip } from './assignments/skip.mjs';
import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { js_node_assign_and_replace } from '../../../../js/node/assign/and/replace.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_visit_call_statements } from '../../../../js/visit/call/statements.mjs';
import { occurs_while } from '../../../../occurs/while.mjs';
import { js_node_is_return_statement } from '../../../../js/node/is/return/statement.mjs';
import { js_node_property_arguments_get } from '../../../../js/node/property/arguments/get.mjs';
import { list_get } from '../../../../list/get.mjs';
import { js_node_is_await_expression } from '../../../../js/node/is/await/expression.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_identifier } from '../../../../js/node/is/identifier.mjs';
import { js_call_expression_name_get_or_null } from '../../../../js/call/expression/name/get/or/null.mjs';
export function refactor_call_arguments_to_assignments(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = object_property_get(args, 'parsed');
    let {file_path} = args;
    occurs_while(function v_17(c) {
        js_visit_call_statements(args, call_each);
        function call_each(stack_reversed, node, expression, ancestor_list) {
            const skip = refactor_call_arguments_to_assignments_skip(expression);
            if (skip) {
                return;
            }
            console.log(js_call_expression_name_get_or_null(expression))
            let args = js_node_property_arguments_get(expression);
            for (let arg of args) {
                let v = !js_node_is_identifier(arg);
                if (v) {
                    replace(arg);
                }
            }
            let v_2 = js_node_is_return_statement(node);
            if (v_2) {
                let expression_parent = list_get(stack_reversed, integer_value_1());
                let v_3 = js_node_is(expression_parent) && js_node_is_await_expression(expression_parent);
                if (v_3) {
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