import { function_is } from '../../../../../function/is.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
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
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is,
        function_is
    ]);
    let prefix = `${ prefix_type }_value_`;
    let excludes = await refactor_functions_arguments_assert_missing_add_excludes();
    let v_9 = async function v_6(args) {
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
        let v_10 = async function v_7(changed) {
            let v_11 = async function v_8(v) {
                let {node} = v;
                let value = js_node_property_value_get(node);
                let v_4 = !lambda_change(value);
                if (v_4) {
                    return;
                }
                let v_12 = lambda_assert(value);
                let v_13 = `need to handle non-${ prefix_type }s maybe`;
                assert_message(v_12, v_13);
                let function_name_new = `${ prefix }${ value }`;
                let v_5 = !await function_exists(function_name_new);
                if (v_5) {
                    let v_14 = string_to(value);
                    await function_add_return(function_name_new, v_14);
                }
                let ce = js_parse_call_expression(function_name_new);
                object_replace(node, ce);
                changed();
            };
            await js_visit_nodes_filter_async(parsed, js_node_is_literal, v_11);
        };
        await refactor_import_fix_if_changed(args, v_10);
    };
    await function_names_each_map(v_9);
    metadata([]);
}