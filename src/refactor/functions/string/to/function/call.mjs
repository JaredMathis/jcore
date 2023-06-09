import { metadata } from '../../../../../metadata.mjs';
import { js_mapper_args_to_function_name } from '../../../../../js/mapper/args/to/function/name.mjs';
import { refactor_import_fix_if_changed } from '../../../../import/fix/if/changed.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { object_replace } from '../../../../../object/replace.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { equal } from '../../../../../equal.mjs';
import { js_node_property_value } from '../../../../../js/node/property/value.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is_literal } from '../../../../../js/node/is/literal.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
export async function refactor_functions_string_to_function_call(function_name_replacement, string_value) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo
    ]);
    let v_5 = async function logic(args) {
        let function_name = js_mapper_args_to_function_name(args);
        let v_3 = equal(function_name, function_name_replacement);
        if (v_3) {
            return;
        }
        await refactor_import_fix_if_changed(args, changed_lambda);
        function changed_lambda(change) {
            let {parsed} = args;
            let v_6 = function v_2(n) {
                let v = js_node_property_value();
                let value = object_property_get(n, v);
                let v_4 = equal(value, string_value);
                if (v_4) {
                    let replacement = js_parse_call_expression(function_name_replacement);
                    object_replace(n, replacement);
                    change();
                }
            };
            js_nodes_each(parsed, js_node_is_literal, v_6);
        }
    };
    await function_names_each_map(v_5);
    metadata([]);
}