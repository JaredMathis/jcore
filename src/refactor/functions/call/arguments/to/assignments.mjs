import { error } from '../../../../../error.mjs';
import { list_find_first_index_after } from '../../../../../list/find/first/index/after.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is_variable_declaration } from '../../../../../js/node/is/variable/declaration.mjs';
import { json_to } from '../../../../../json/to.mjs';
import { list_map_try } from '../../../../../list/map/try.mjs';
import { js_node_property_type_get } from '../../../../../js/node/property/type/get.mjs';
import { object_copy_shallow } from '../../../../../object/copy/shallow.mjs';
import { js_variable_declarator_init_change } from '../../../../../js/variable/declarator/init/change.mjs';
import { js_node_property_declarations_get } from '../../../../../js/node/property/declarations/get.mjs';
import { js_code_statement_assignment } from '../../../../../js/code/statement/assignment.mjs';
import { js_identifier_name_next } from '../../../../../js/identifier/name/next.mjs';
import { list_reversed_get } from '../../../../../list/reversed/get.mjs';
import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { js_node_property_expression_get } from '../../../../../js/node/property/expression/get.mjs';
import { js_node_is_expression_statement } from '../../../../../js/node/is/expression/statement.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { js_node_is_block_statement } from '../../../../../js/node/is/block/statement.mjs';
import { add_1 } from '../../../../../add/1.mjs';
import { js_node_is_program } from '../../../../../js/node/is/program.mjs';
import { string_a } from '../../../../../string/a.mjs';
import { js_parse_statement } from '../../../../../js/parse/statement.mjs';
import { list_single } from '../../../../../list/single.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { assert_message } from '../../../../../assert/message.mjs';
import { js_parse_expression } from '../../../../../js/parse/expression.mjs';
import { list_add_before } from '../../../../../list/add/before.mjs';
export async function refactor_functions_call_arguments_to_assignments() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async function logic(args) {
        let parsed = object_property_get(args, 'parsed');
        let unparsed = object_property_get(args, 'unparsed');
        js_visit_nodes_filter(parsed, js_node_is_expression_statement, v => {
            let node = object_property_get(v, 'node');
            let stack = object_property_get(v, 'stack');
            let expression = js_node_property_expression_get(node);
            if (js_node_is_call_expression(expression)) {
                refactor_call_expression_to_assignments();
            }
            if (js_node_is_variable_declaration(expression)) {
                error('here');
            }
            function refactor_call_expression_to_assignments() {
                let stack_reversed = list_reversed_get(stack);
                let index_starting_at = 0;
                let list_find_first_after_result = list_find_first_after(stack_reversed, index_starting_at);
                let parent_list_next = object_property_get(list_find_first_after_result, 'next');
                let parent_list_index = object_property_get(list_find_first_after_result, 'index');
                if (js_node_is_program(parent_list_next)) {
                    return;
                }
                if (js_node_is_variable_declaration(parent_list_next)) {
                    list_find_first_after_result = list_find_first_after(stack_reversed, parent_list_index);
                    parent_list_next = object_property_get(list_find_first_after_result, 'next');
                    parent_list_index = object_property_get(list_find_first_after_result, 'index');
                    return;
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
                    if (js_node_is_call_expression(arg)) {
                        let id = js_identifier_name_next(parsed);
                        let assignment_code = js_code_statement_assignment(id, string_a());
                        let assignment = js_parse_statement(assignment_code);
                        let declarations = js_node_property_declarations_get(assignment);
                        let declaration = list_single(declarations);
                        let v_4 = object_copy_shallow(arg);
                        js_variable_declarator_init_change(declaration, v_4);
                        let v_5 = js_parse_expression(id);
                        object_replace(arg, v_5);
                        list_add_before(parent_list, assignment, node);
                    }
                }
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
    });
    metadata([]);
}