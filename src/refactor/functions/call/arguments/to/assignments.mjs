import { js_node_property_declarations_get } from '../../../../../js/node/property/declarations/get.mjs';
import { js_code_statement_assignment } from '../../../../../js/code/statement/assignment.mjs';
import { js_identifier_name_next } from '../../../../../js/identifier/name/next.mjs';
import { list_find_first_index } from '../../../../../list/find/first/index.mjs';
import { list_reversed_get } from '../../../../../list/reversed/get.mjs';
import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { js_node_property_expression_get } from '../../../../../js/node/property/expression/get.mjs';
import { log } from '../../../../../log.mjs';
import { js_node_is_expression_statement } from '../../../../../js/node/is/expression/statement.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { refactor_import_fix_if_changed } from '../../../../import/fix/if/changed.mjs';
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { assert } from '../../../../../assert.mjs';
import { js_node_is_block_statement } from '../../../../../js/node/is/block/statement.mjs';
import { add_1 } from '../../../../../add/1.mjs';
import { js_node_is_program } from '../../../../../js/node/is/program.mjs';
import { list_index_of } from '../../../../../list/index/of.mjs';
import { string_a } from '../../../../../string/a.mjs';
import { error } from '../../../../../error.mjs';
import { js_parse_statement } from '../../../../../js/parse/statement.mjs';
import { list_single } from '../../../../../list/single.mjs';
export async function refactor_functions_call_arguments_to_assignments() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async function logic(args) {
        await refactor_import_fix_if_changed(args, change => {
            let {parsed, unparsed} = args;
            js_visit_nodes_filter(parsed, js_node_is_expression_statement, v => {
                let {node, stack} = v;
                let expression = js_node_property_expression_get(node);
                if (js_node_is_call_expression(expression)) {
                    log({
                        unparsed,
                        node,
                        stack
                    });
                    let stack_reversed = list_reversed_get(stack);
                    let parent_list_index = list_find_first_index(stack_reversed, list_is);
                    let parent_list_index_next = add_1(parent_list_index);
                    let parent_list_next = list_get(stack_reversed, parent_list_index_next);
                    log({ parent_list_next });
                    if (js_node_is_program(parent_list_next)) {
                        return;
                    }
                    assert(js_node_is_block_statement(parent_list_next));
                    let parent_list = list_get(stack_reversed, parent_list_index);
                    let node_index = list_index_of(parent_list, node);
                    let args = js_node_property_arguments_get(expression);
                    let args_reversed = list_reversed_get(args);
                    for (let arg of args_reversed) {
                        if (js_node_is_call_expression(arg)) {
                            let id = js_identifier_name_next(parsed);
                            let assignment_code = js_code_statement_assignment(id, string_a());
                            let assignment = js_parse_statement(assignment_code);
                            let declarations = js_node_property_declarations_get(assignment);
                            let declaration = list_single(declarations);
                            log({ declaration });
                            error();
                            if (false) {
                                change();
                            }
                        }
                    }
                }
            });
        });
    });
    metadata([]);
}