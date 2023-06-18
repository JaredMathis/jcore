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
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
export async function refactor_functions_string_to_function_call(function_name_replacement, string_value) {
    arguments_assert(arguments, [
        string_identifier_is,
        arguments_assert_todo
    ]);
    await file_js_all_map_args_if_function(async function logic(args) {
        let function_name = js_mapper_args_to_function_name(args);
        if (equal(function_name, function_name_replacement)) {
            return;
        }
        await refactor_import_fix_if_changed(args, changed_lambda);
        function changed_lambda(change) {
            let {parsed} = args;
            js_nodes_each(parsed, js_node_is_literal, function v_2(n) {
                let v = js_node_property_value();
                let value = object_property_get(n, v);
                if (equal(value, string_value)) {
                    let replacement = js_parse_call_expression(function_name_replacement);
                    object_replace(n, replacement);
                    change();
                }
            });
        }
    });
}