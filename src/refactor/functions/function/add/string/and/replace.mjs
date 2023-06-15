import { object_replace } from '../../../../../../object/replace.mjs';
import { js_parse_call_expression } from '../../../../../../js/parse/call/expression.mjs';
import { function_add_string } from '../../../../../../function/add/string.mjs';
import { js_node_is_literal } from '../../../../../../js/node/is/literal.mjs';
import { js_nodes_each } from '../../../../../../js/nodes/each.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { string_identifier_is } from '../../../../../../string/identifier/is.mjs';
import { string_is } from '../../../../../../string/is.mjs';
export async function refactor_functions_function_add_string_and_replace(function_name, string_value) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is
    ]);
    await function_add_string(function_name, string_value);
    await file_js_all_map_args_if_function(async function logic(args) {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_literal, n => {
            let replacement = js_parse_call_expression(function_name);
            object_replace(n, replacement);
        });
    });
    metadata([]);
}