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
import { add_1 } from '../../../../../add/1.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { assert } from '../../../../../assert.mjs';
import { js_node_is_block_statement } from '../../../../../js/node/is/block/statement.mjs';
export async function refactor_functions_call_arguments_to_assignments() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async function logic(args) {
        await refactor_import_fix_if_changed(args, change => {
            let {parsed, unparsed} = args;
            js_visit_nodes_filter(parsed, js_node_is_expression_statement, v => {
                let {node, stack} = v;
                let expression = js_node_property_expression_get(node);
                if (js_node_is_call_expression(expression)) {
                    let args = js_node_property_arguments_get(expression);
                    let args_reversed = list_reversed_get(args);
                    log({
                        unparsed,
                        node,
                        stack
                    });
                    let stack_reversed = list_reversed_get(stack);
                    let parent_list_index = list_find_first_index(stack_reversed, list_is);
                    let parent_list_index_next = add_1(parent_list_index);
                    let parent_list_next = list_get(stack, parent_list_index_next);
                    log({ parent_list_next });
                    assert(js_node_is_block_statement(parent_list_next));
                    for (let arg of args_reversed) {
                        if (js_node_is_call_expression(arg)) {
                            log(arg);
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