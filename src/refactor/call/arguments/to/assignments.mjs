import { null_is } from '../../../../null/is.mjs';
import { js_node_property_init_get } from '../../../../js/node/property/init/get.mjs';
import { js_declarations_single } from '../../../../js/declarations/single.mjs';
import { add_1 } from '../../../../add/1.mjs';
import { list_is } from '../../../../list/is.mjs';
import { list_find_first_index_after } from '../../../../list/find/first/index/after.mjs';
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
import { assert_message } from '../../../../assert/message.mjs';
import { js_node_is_block_statement } from '../../../../js/node/is/block/statement.mjs';
import { js_node_property_type_get } from '../../../../js/node/property/type/get.mjs';
import { list_map_try } from '../../../../list/map/try.mjs';
import { json_to } from '../../../../json/to.mjs';
import { js_node_is_variable_declaration } from '../../../../js/node/is/variable/declaration.mjs';
import { js_node_is_program } from '../../../../js/node/is/program.mjs';
import { list_reversed_get } from '../../../../list/reversed/get.mjs';
import { js_node_is_call_expression } from '../../../../js/node/is/call/expression.mjs';
import { not } from '../../../../not.mjs';
import { js_node_property_argument_get } from '../../../../js/node/property/argument/get.mjs';
import { js_node_is_await_expression } from '../../../../js/node/is/await/expression.mjs';
import { js_node_property_right_get } from '../../../../js/node/property/right/get.mjs';
import { js_node_is_assignment_expression } from '../../../../js/node/is/assignment/expression.mjs';
import { js_node_property_expression_get } from '../../../../js/node/property/expression/get.mjs';
import { js_node_is_expression_statement } from '../../../../js/node/is/expression/statement.mjs';
import { js_visit_nodes_filter } from '../../../../js/visit/nodes/filter.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { log } from '../../../../log.mjs';
export function refactor_call_arguments_to_assignments(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let parsed = object_property_get(args, 'parsed');
    let unparsed = object_property_get(args, 'unparsed');
    js_visit_nodes_filter(parsed, n => js_node_is_expression_statement(n) || js_node_is_variable_declaration(n), v => {
        let node = object_property_get(v, 'node');
        let stack = object_property_get(v, 'stack');
        refactor_call_expression_to_assignments(node);
        function refactor_call_expression_to_assignments(expression) {
            console.log({ expression });
            if (js_node_is_expression_statement(expression)) {
                let child = js_node_property_expression_get(expression);
                return refactor_call_expression_to_assignments(child);
            }
            if (js_node_is_variable_declaration(expression)) {
                let declaration = js_declarations_single(expression);
                let init = js_node_property_init_get(declaration);
                if (null_is(init)) {
                    return;
                }
                return refactor_call_expression_to_assignments(init);
            }
            if (js_node_is_assignment_expression(expression)) {
                let right = js_node_property_right_get(expression);
                return refactor_call_expression_to_assignments(right);
            }
            if (js_node_is_await_expression(expression)) {
                let argument = js_node_property_argument_get(expression);
                return refactor_call_expression_to_assignments(argument);
            }
            if (not(js_node_is_call_expression(expression))) {
                return false;
            }
            let stack_reversed = list_reversed_get(stack);
            let index_starting_at = 0;
            let list_find_first_after_result = list_find_first_after(stack_reversed, index_starting_at);
            let parent_list_next = object_property_get(list_find_first_after_result, 'next');
            let parent_list_index = object_property_get(list_find_first_after_result, 'index');
            if (js_node_is_program(parent_list_next)) {
                return false;
            }
            if (js_node_is_variable_declaration(parent_list_next)) {
                list_find_first_after_result = list_find_first_after(stack_reversed, parent_list_index);
                parent_list_next = object_property_get(list_find_first_after_result, 'next');
                parent_list_index = object_property_get(list_find_first_after_result, 'index');
                return false;
            }
            let v_2 = json_to({
                s: list_map_try(stack_reversed, js_node_property_type_get),
                n: js_node_property_type_get(parent_list_next)
            });
            let v_3 = js_node_is_block_statement(parent_list_next);
            assert_message(v_3, v_2);
            let parent_list = list_get(stack_reversed, parent_list_index);
            let args = js_node_property_arguments_get(expression);
            let args_reversed = list_reversed_get(args);
            for (let arg of args_reversed) {
                let arg_root = arg;
                if (js_node_is_await_expression(arg)) {
                    arg = js_node_property_argument_get(arg);
                }
                if (js_node_is_call_expression(arg)) {
                    let id = js_identifier_name_next(parsed);
                    let assignment_code = js_code_statement_assignment(id, string_a());
                    let assignment = js_parse_statement(assignment_code);
                    let declarations = js_node_property_declarations_get(assignment);
                    let declaration = list_single(declarations);
                    let v_4 = object_copy_shallow(arg);
                    js_variable_declarator_init_change(declaration, v_4);
                    let v_5 = js_parse_expression(id);
                    object_replace(arg_root, v_5);
                    list_add_before(parent_list, assignment, node);
                }
            }
            return true;
        }
    });
    function list_find_first_after(stack_reversed, index_starting_at) {
        let index = list_find_first_index_after(stack_reversed, list_is, index_starting_at);
        let index_next = add_1(index);
        let next = list_get(stack_reversed, index_next);
        return {
            next,
            index
        };
    }
}