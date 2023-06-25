import { list_length_multiple } from '../../../../list/length/multiple.mjs';
import { js_call_expressions_named } from '../../../../js/call/expressions/named.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../metadata/arguments/assert/extra/allow.mjs';
import { function_open_vs_code } from '../../../open/vs/code.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_names_each } from '../../../names/each.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_call_expression } from '../../../../js/node/is/call/expression.mjs';
import { js_mapper_args_to_metadata_args } from '../../../../js/mapper/args/to/metadata/args.mjs';
import { list_map } from '../../../../list/map.mjs';
import { js_call_expression_name_get_or_null } from '../../../../js/call/expression/name/get/or/null.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_filter } from '../../../../list/filter.mjs';
export async function function_arguments_assert_extra_next() {
    arguments_assert(arguments, []);
    let result = null;
    await function_names_each(logic);
    async function logic(args) {
        let {parsed, function_name} = args;
        let metadata_fn = metadata_arguments_assert_extra_allow;
        const lc = await js_mapper_args_to_metadata_args_contains(args, metadata_fn);
        if (lc) {
            return;
        }
        const name_expected = function_name_get(arguments_assert);
        let matches = js_call_expressions_named(parsed, name_expected);
        if (list_length_multiple(matches)) {
            function_open_vs_code(function_name);
            result = function_name;
            return true;
        }
    }
    return result;
}

async function js_mapper_args_to_metadata_args_contains(args, metadata_fn) {
    let metadata_args = await js_mapper_args_to_metadata_args(args);
    let filtered = list_filter(metadata_args, js_node_is_call_expression);
    let mapped = list_map(filtered, js_call_expression_name_get_or_null);
    const lc = list_contains(mapped, function_name_get(metadata_fn));
    return lc;
}
