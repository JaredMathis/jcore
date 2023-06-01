import { function_open_vs_code } from '../../../open/vs/code.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_names_each } from '../../../names/each.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_visit_nodes } from '../../../../js/visit/nodes.mjs';
import { node_is_call_expression } from '../../../../node/is/call/expression.mjs';
import { js_call_expression_to_name } from '../../../../js/call/expression/to/name.mjs';
import { list_add } from '../../../../list/add.mjs';
import { list_length } from '../../../../list/length.mjs';
export async function function_arguments_assert_extra_next() {
    arguments_assert(arguments, []);
    await function_names_each(logic);
    function logic(args) {
        let {parsed, function_name} = args;
        let result = [];
        js_visit_nodes(parsed, node => node_is_call_expression(node), v => {
            let {node} = v;
            if (js_call_expression_to_name(node, function_name_get(arguments_assert))) {
                list_add(result, node);
            }
        });
        if (list_length(result) >= 2) {
            function_open_vs_code(function_name);
            return true;
        }
    }
}