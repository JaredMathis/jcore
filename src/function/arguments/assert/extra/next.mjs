import { metadata_arguments_assert_none } from '../../../../metadata/arguments/assert/none.mjs';
import { equal } from '../../../../equal.mjs';
import { function_open_vs_code } from '../../../open/vs/code.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_names_each } from '../../../names/each.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_visit_nodes } from '../../../../js/visit/nodes.mjs';
import { js_node_is_call_expression } from '../../../../js/node/is/call/expression.mjs';
import { js_call_expression_to_name } from '../../../../js/call/expression/to/name.mjs';
import { list_add } from '../../../../list/add.mjs';
import { list_length } from '../../../../list/length.mjs';
import { js_mapper_args_to_metadata_args } from '../../../../js/mapper/args/to/metadata/args.mjs';
import { list_map } from '../../../../list/map.mjs';
import { js_call_expression_to_name_or_null } from '../../../../js/call/expression/to/name/or/null.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_filter } from '../../../../list/filter.mjs';
export async function function_arguments_assert_extra_next() {
    arguments_assert(arguments, []);
    await function_names_each(logic);
    async function logic(args) {
        let {parsed, function_name} = args;
        let metadata_args = await js_mapper_args_to_metadata_args(args);
        let filtered = list_filter(metadata_args, js_node_is_call_expression1);
        let mapped = list_map(filtered, js_call_expression_to_name_or_null);
        if (list_contains(mapped, function_name_get(metadata_arguments_assert_none))) {
            return;
        }
        let result = [];
        js_visit_nodes(parsed, node => js_node_is_call_expression(node), v => {
            let {node} = v;
            if (equal(js_call_expression_to_name(node), function_name_get(arguments_assert))) {
                list_add(result, node);
            }
        });
        if (list_length(result) >= 2) {
            function_open_vs_code(function_name);
            return true;
        }
    }
}