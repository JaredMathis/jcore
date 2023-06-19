import { object_property_get } from '../../../../object/property/get.mjs';
import { js_visit_call_statements } from '../../../../js/visit/call/statements.mjs';
import { occurs_while } from '../../../../occurs/while.mjs';
import { js_node_is_return_statement } from '../../../../js/node/is/return/statement.mjs';
import { list_add_before } from '../../../../list/add/before.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_parse_expression } from '../../../../js/parse/expression.mjs';
import { js_variable_declarator_init_change } from '../../../../js/variable/declarator/init/change.mjs';
import { object_copy_shallow } from '../../../../object/copy/shallow.mjs';
import { list_single } from '../../../../list/single.mjs';
import { js_node_property_declarations_get } from '../../../../js/node/property/declarations/get.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
import { string_a } from '../../../../string/a.mjs';
import { js_code_statement_assignment } from '../../../../js/code/statement/assignment.mjs';
import { js_identifier_name_next } from '../../../../js/identifier/name/next.mjs';
import { js_node_property_arguments_get } from '../../../../js/node/property/arguments/get.mjs';
import { list_get } from '../../../../list/get.mjs';
import { js_node_is_call_expression } from '../../../../js/node/is/call/expression.mjs';
import { js_node_property_argument_get } from '../../../../js/node/property/argument/get.mjs';
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
                arg = newFunction(arg, parsed, ancestor_list, node);
                c();
            }
        }
    });
}

function newFunction(arg, parsed, ancestor_list, node) {
    let arg_root = arg;
    if (js_node_is_await_expression(arg)) {
        arg = js_node_property_argument_get(arg);
    }
    let id = js_identifier_name_next(parsed);
    let v_16 = string_a();
    let assignment_code = js_code_statement_assignment(id, v_16);
    let assignment = js_parse_statement(assignment_code);
    let declarations = js_node_property_declarations_get(assignment);
    let declaration = list_single(declarations);
    let v_4 = object_copy_shallow(arg_root);
    js_variable_declarator_init_change(declaration, v_4);
    let v_5 = js_parse_expression(id);
    object_replace(arg_root, v_5);
    list_add_before(ancestor_list, assignment, node);
    return arg;
}
