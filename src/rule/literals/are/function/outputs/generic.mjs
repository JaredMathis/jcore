import { object_replace } from '../../../../../object/replace.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { string_to } from '../../../../../string/to.mjs';
import { function_add_return } from '../../../../../function/add/return.mjs';
import { function_exists } from '../../../../../function/exists.mjs';
import { assert_message } from '../../../../../assert/message.mjs';
import { js_node_property_value_get } from '../../../../../js/node/property/value/get.mjs';
import { js_node_is_literal } from '../../../../../js/node/is/literal.mjs';
import { js_visit_nodes_filter_async } from '../../../../../js/visit/nodes/filter/async.mjs';
import { refactor_import_fix_if_changed } from '../../../../../refactor/import/fix/if/changed.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
import { string_starts_with } from '../../../../../string/starts/with.mjs';
import { js_mapper_args_to_function_name } from '../../../../../js/mapper/args/to/function/name.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes } from '../../../../../refactor/functions/arguments/assert/missing/add/excludes.mjs';
export async function rule_literals_are_function_outputs_generic(prefix_type, lambda_change, lambda_assert) {
    let prefix = `${ prefix_type }_value_`;
    let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
    await function_names_each_map(async function v_6(args) {
        let {parsed} = args;
        let function_name = js_mapper_args_to_function_name(args);
        let v_2 = string_starts_with(function_name, prefix);
        if (v_2) {
            return;
        }
        let v_3 = list_contains(excludes, function_name);
        if (v_3) {
            return;
        }
        await refactor_import_fix_if_changed(args, async function v_7(changed) {
            await js_visit_nodes_filter_async(parsed, js_node_is_literal, async function v_8(v) {
                let {node} = v;
                let value = js_node_property_value_get(node);
                let v_4 = !lambda_change(value);
                if (v_4) {
                    return;
                }
                assert_message(lambda_assert(value), `need to handle non-${ prefix_type }s maybe`);
                let function_name_new = `${ prefix }${ value }`;
                let v_5 = !await function_exists(function_name_new);
                if (v_5) {
                    await function_add_return(function_name_new, string_to(value));
                }
                let ce = js_parse_call_expression(function_name_new);
                object_replace(node, ce);
                changed();
            });
        });
    });
}