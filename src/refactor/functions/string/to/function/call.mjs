import { object_replace } from '../../../../../object/replace.mjs';
import { js_parse_call_expression } from '../../../../../js/parse/call/expression.mjs';
import { equal } from '../../../../../equal.mjs';
import { js_node_property_value } from '../../../../../js/node/property/value.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is_literal } from '../../../../../js/node/is/literal.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { file_js_all_map_args_if_function } from '../../../../../file/js/all/map/args/if/function.mjs';
export async function refactor_functions_string_to_function_call(string_value, function_name) {
    await file_js_all_map_args_if_function(async function logic(args) {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_literal, n => {
            let value = object_property_get(n, js_node_property_value());
            if (equal(value, string_value)) {
                let replacement = js_parse_call_expression(function_name);
                object_replace(n, replacement);
            }
        });
    });
}